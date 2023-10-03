import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LS_KEY = 'videoplayer-current-time';
const player = new Player('vimeo-player');

const getVideoTime = function (event) {
  localStorage.setItem(LS_KEY, event.seconds);
};

player.on('timeupdate', throttle(getVideoTime, 1000));

player.setCurrentTime(parseFloat(localStorage.getItem(LS_KEY)));