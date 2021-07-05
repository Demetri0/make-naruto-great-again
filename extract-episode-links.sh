#!/bin/bash
curl https://jut.su/narutoo/season-1/ | pup '.content a attr{href}' | tail -n +3
