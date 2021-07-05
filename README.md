# Make Naruto Great Again
This is just for fun mini project that implements player with possibility to skip or forward episodes and parts of videos

Basid data was initially retrieved from jut.su

## 1. Download list of episodes from jut.su
You can use `extract-episode-links.sh` to get list of all episodes

- `curl https://jut.su/narutoo/season-1/ | pup '.content a attr{href}' | tail -n +3`
- `curl https://jut.su/narutoo/season-2/ | pup '.content a attr{href}' | tail -n +3`

## 2. Download each episode and extract base64 data
- `mkdir jutsu-data/season-{1,2}`
- `extract-base64.sh`

## 3. Convert downloaded base64 data to json
- `to-json.sh`

# LICENSE
MIT
