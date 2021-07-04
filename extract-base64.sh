#!/bin/bash
# wrong
#cat season1.list.txt | xargs curl | grep -oE 'Base64.decode\(.*\)' | awk -F'[""]' '{print $2}' | split -l2  -d - jutsu-data/s

COUNTER=1; while read p; do curl "$p" | grep -oE 'Base64.decode\(.*\)' | awk -F'[""]' '{print $2}' > jutsu-data/season-2/`printf "%03d" $COUNTER`.b64.txt; let COUNTER=COUNTER+1 ; done < season2.list.txt
