import './style.css';
import Player from 'xgplayer';

let list = [];

let playerList = document.querySelector('.playerList');
for (let i = 1; i < 17; i++) {
  // 集数列表
  let li = document.createElement('li');
  li.classList.add('playerItem');
  li.innerHTML = `第${i}集`;
  playerList.appendChild(li);

  // url列表
  let url = `/mv/E0${i}.mkv`;
  list.push(url);

  li.addEventListener('click', (e) => {
    playerVideo(url);
  });
}

// 默认播放第一集
let playNow = list[0];
playerVideo(playNow);

function playerVideo(url) {
  document.querySelector('#mse').innerHTML = '';
  new Player({
    id: 'mse',
    url,
    fluid: true,
    playbackRate: [0.5, 0.75, 1, 1.5, 2], //传入倍速可选数组
    download: true, //设置download控件显示
  });
}
