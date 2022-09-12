#!/bin/bash

for ((i=1;i<=100;i++)); do
  svcname=svc-$RANDOM
    curl -XPUT localhost:5681/meshes/default/taps/$svcname -H'content-type: application/json' --data "{
       \"type\": \"Tap\",
       \"mesh\": \"default\",
       \"name\": \"$svcname\",
       \"selectors\": [
         {
           \"match\": {
             \"kuma.io/service\": \"$svcname\"
           }
         }
       ],
       \"conf\": {
         \"id\": \"test_config_id\"
       }
     }"
done


curl -XPUT localhost:5681/meshes/default/taps/my-tap -H'content-type: application/json' --data '{
   "type": "Tap",
   "mesh": "default",
   "name": "my-tap",
   "selectors": [
     {
       "match": {
         "kuma.io/service": "*"
       }
     }
   ],
   "conf": {
     "id": "test_config_id"
   }
 }'

while true
do
  echo "type: Timeout
mesh: default
name: timeout-all-default
sources:
  - match:
      kuma.io/service: '*'
destinations:
  - match:
      kuma.io/service: '*'
conf:
  connectTimeout: ${RANDOM}s" | /root/kong/kuma/build/artifacts-linux-amd64/kumactl/kumactl apply -f -
  sleep 1
done
