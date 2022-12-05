#!/bin/bash

res=$(curl -s https://divine-breese-6008.fly.dev/health)

echo $res

if [ "$res" == "ok" ]; then
  echo "Succeeded curl to /health"
  exit 0
fi

echo "Testing v7.1"
echo "Failed curl to /health"
# 0: OK, 1: Bad.
exit 1
