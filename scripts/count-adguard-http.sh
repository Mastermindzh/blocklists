#!/bin/bash

SERVER="ADD_HOST_HERE"
COOKIE="ADD_COOKIE_HERE"

response=$(curl -s "http://$SERVER/control/filtering/status" -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H "Cookie: agh_session=$COOKIE")

echo $response | jq ".filters" | jq "[.[].rules_count] | add"
