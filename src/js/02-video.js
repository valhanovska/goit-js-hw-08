import videoPlayer from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new videoPlayer(iframe);

player.on(
  'timeupdate',
  lodashThrottle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }),
  1000
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
