NUM_OF_DATAPLANES ?= 2000
NUM_OF_SERVICES ?= 700
KUMA_CP_ADDRESS ?= grpcs://127.0.0.1:5678

run:
	go run main.go run --dps "${NUM_OF_DATAPLANES}" --services "${NUM_OF_SERVICES}" --xds-server-address "${KUMA_CP_ADDRESS}"
