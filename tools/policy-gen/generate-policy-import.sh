#!/bin/bash

set -e
GO_MODULE=$1
POLICIES_DIR=$2 # pkg/plugins/policies or pkg/core/resources/apis
IMPORTS_FILE="${POLICIES_DIR}/modules.go"

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
	\"github.com/kumahq/kuma/pkg/core/plugins\"
	$imports
)

var NameToModule = map[string]*plugins.PluginInitializer{
  $mappings
}
" > "${IMPORTS_FILE}"

gofmt -w "${IMPORTS_FILE}"
