const button = document.getElementById('button');
const input = document.getElementById('input');
const area = document.getElementById('area');
const tweet = document.getElementById('tweet');

button.onclick = () => {
  const userName = input.value;
  const result = assessment(userName);

  if (userName.length === 0) {
    return;
  }
  //診断結果
  area.innerText = ' ';
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  area.appendChild(header);
  //アンサー
  const p = document.createElement('p');
  p.innerText = result;
  area.appendChild(p);
  //ツイートボタン
  tweet.innerText = ' ';
  const a = document.createElement('a');
  a.setAttribute('href', 'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところを死んだ&ref_src=twsrc%5Etfw');
  a.setAttribute('class', 'twitter-hashtag-button');
  a.setAttribute('data-text', result);
  tweet.appendChild(a);
  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweet.appendChild(script);

}

const answer = [
  'てめえのいいところは絶対ある',
  'てめえのいいところはありすぎてわからん',
  'てめえのいいところは言葉では表現できん',
  'てめえのいいところは語彙力無くてうまく表現できん',
  'てめえのいいところはくぁw背drftgyフジ子lp',
  'てめえのいいところはおっおっおっおっ',
  'てめえのいいところは悔やむと書いてミライ',
  'てめえのいいところは何も浮かばん（ネタ切れ）',
];

function assessment(userName) {
  let Code = 0;
  for (let i = 0; i < userName.length; i++) {
    Code = Code + userName.charCodeAt(i);
  }
  let result = answer[Code % answer.length];
  result = result.replaceAll('てめえ', userName);
  return result;
}