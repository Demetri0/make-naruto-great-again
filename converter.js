#!/usr/bin/env node

const fs = require('fs');

// console.log(process.argv);
// process.stdin.pipe(process.stdout);

const buffer = fs.readFileSync(0);
const data = buffer.toString();

const js_preres_url = 'https://gen.jut.su';

eval(data);
var some_achiv_str = some_achiv_str ?? '';
const custom_achiv_str = Buffer.from(some_achiv_str, 'base64').toString();
eval(custom_achiv_str);
var pview_anime = pview_anime ?? null;
var pview_category = pview_category ?? null;
var pview_type = pview_type ?? null;
var pview_season = pview_season ?? null;
var pview_episode = pview_episode ?? null;
var video_intro_start = video_intro_start ?? null;
var video_intro_end = video_intro_end ?? null;
var video_music_intro = video_music_intro ?? null;
var video_outro_start = video_intro_start ?? null;
var this_video_duration = this_video_duration ?? null;
var this_anime_achievements = this_anime_achievements ?? null;

const results = {
  pview_anime,
  pview_category,
  pview_type,
  pview_season,
  pview_episode,
  video_intro_start,
  video_intro_end,
  video_music_intro,
  video_outro_start,
  video_music_outro,
  this_video_duration,
  jutsu_new_player,
  some_achiv_str,
  custom_achiv_str,
  custom_achivements: {
    this_anime_achievements: this_anime_achievements
  }
};

console.log( JSON.stringify(results, null, 2) );
/*
console.log(pview_anime);
console.log(pview_category);
console.log(pview_type);
console.log(pview_season);
console.log(pview_episode);

console.log(video_intro_start);
console.log(video_intro_end);
console.log(video_music_intro);

console.log(video_outro_start);
console.log(video_music_outro);
console.log(this_video_duration);

console.log(jutsu_new_player);
console.log(some_achiv_str);
//*/
