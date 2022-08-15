import videoPlayer from '@vimeo/player';
import lodashThrottle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new videoPlayer(iframe);

const VIDEO_CURRENT = 'videoplayer-current-time';

player.on(
  'timeupdate',
  lodashThrottle(event => {
    localStorage.setItem(VIDEO_CURRENT, event.seconds);
  }),
  1000
);

const checkLS = localStorage.getItem(VIDEO_CURRENT);
checkLS && player.setCurrentTime(checkLS);
