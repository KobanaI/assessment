'use strict';

const userName_input = document.getElementById('user-name');
const assessment_button = document.getElementById('assessment');
const result_div = document.getElementById('result-area');
const tweet_div = document.getElementById('tweet-area');

assessment_button.addEventListener(
  'click',
  
  ()=> {
    const userName = userName_input.value;
    if(userName.length === 0)return;

    result_div.innerText ='';
    const header =document.createElement('h3');
    header.innerText = '結果'
    result_div.appendChild(header);

    const paragraph = document.createElement('p');
    const result = Assessment(userName);
    paragraph.innerText = result;
    result_div.appendChild(paragraph);




    
  }
);










const asnwers = [
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。###userName###はよいです！',
'###userName###のいいところはあります。思いやりありますです！'];

function Assessment(userName){
  let moji_Code = 0
  for(let i = 0; i < userName.length; i++){
    moji_Code += userName.charCodeAt(i);
  }

  const i = moji_Code % asnwers.length;
  let result = asnwers[i];

  result = result.replace('###userName###',userName);

  return result;
}
console.log(Assessment('たろう'));
