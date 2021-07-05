#!/bin/bash

for filename in ./jutsu-data/season-1/*; do cat $filename | base64 --decode | ./converter.js > "$filename.json" ; done
