#!/bin/bash

set -e
GO_MODULE=$1
POLICIES_DIR=$2 # pkg/plugins/policies or pkg/core/resources/apis
IMPORTS_FILE="${POLICIES_DIR}/imports.go"

imports=$(
  for i in "${@:3}"; do
    if [[ -f "${POLICIES_DIR}/${i}/zz_generated.plugin.go" ]]; then
      echo "\"${GO_MODULE}/${POLICIES_DIR}/${i}\""
    fi
  done
)

mappings=$(for i in "${@:3}"; do
  if [[ -f ${POLICIES_DIR}/${i}/zz_generated.plugin.go ]]; then
    policy_dir="${POLICIES_DIR}/${i}"
    policy_crd_dir="${policy_dir}/k8s/crd"
    policy_crd_file="$(find "${policy_crd_dir}" -type f)"
    plural=$(yq e '.spec.names.plural' "$policy_crd_file")
    echo "\"$plural\": {InitFn: ${i}.InitPlugin, Initialized: false},"
  fi
done)

echo "// Generated by tools/policy-gen
// Run \"make generate\" to update this file.

package policies

import (
  $imports
)

type PluginInitializer struct {
	InitFn      func()
	Initialized bool
}

var NameToModule = map[string]*PluginInitializer{
  $mappings
}

func InitAllPolicies() {
	for _, initializer := range NameToModule {
		if !initializer.Initialized {
			initializer.InitFn()
			initializer.Initialized = true
		}
	}
}

func InitPolicies(enabledPluginPolicies []string) {
	for _, policy := range enabledPluginPolicies {
		initializer, ok := NameToModule[policy]
		if ok && !initializer.Initialized {
			initializer.InitFn()
			initializer.Initialized = true
		} else {
			panic(\"policy \" + policy + \" not found\")
		}
	}
}
" > "${IMPORTS_FILE}"

gofmt -w "${IMPORTS_FILE}"
