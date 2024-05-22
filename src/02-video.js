import videoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new videoPlayer(iframe);

const STORAGE_KEY = 'videoplayer-current-time';


const onTimeUpdate = throttle((event) => {
  localStorage.setItem(STORAGE_KEY, event.seconds);
}, 1000);


const savedTime = localStorage.getItem(STORAGE_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime).catch((error) => {
    console.error('Error setting time:', error);
  });
}


player.on('timeupdate', onTimeUpdate);