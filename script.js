/* ===== এখানে নিজের তথ্য বদলাও ===== */
const CONFIG = {
  photoCaptions: [
    "এই তোমাকে নাহ দারূন লাগছে এই 3 pis a 😘",
    "উফ্ কি মায়াবী চোখ তোমার 🫣",
    "মুকুট বিহীন রাজার 👑 মুকুট বিহীন রানী 👸👸",
    "বৃষ্টিতে ভিজে তোমার সাথে 😍🥰 ",
    "আমার হাতে তোমার ঠোঁটৈর স্পর্শ উফ্ 🙈",
    "আমার জীবনে সবচেয়ে কঠিনতম রিস্ক নিয়ে তোমার সাথে দেখা+ এই দিনে সবথেকে সুন্দর ছবি উঠছে 💖💞",
  ], // ছবির নিচের লেখা (ঐচ্ছিক), যেমন ["প্রথম দেখা","আমাদের বিয়ে"]। না দিলে Memory 1, 2, ... আসবে
  endSong: ["last.mp3"], // শেষ (৬ নম্বর) উইন্ডোর গান, যেমন ["end.mp3"] (উইন্ডো খুললেই বাজবে)
  heartSong: ["heart.mp3"], // হৃদয়ের পেজে "দেখো" চাপলে যে গান বাজবে, যেমন ["heart.mp3"] (পেজ ছাড়লে থেমে যাবে, আগের গান আবার চলবে)
  endMessage:
    "অনেক ভালোবাসা, যত্ন আর মায়া দিয়ে বানিয়েছি, শুধু তোমার জন্য। একদিন দেখেই লিংকটা ডিলিট করে দিও না। কিছুদিন কাছে রেখে দিও। প্রায় আড়াই মাস ধরে অল্প অল্প করে সময় নিয়ে বানিয়েছি। আর একটা কথা, আমাকে ভুলে যেয়ো না। মনে রেখো আমাকে। ❤️ এটাই আমার পক্ষ থেকে তোমাকে দেওয়া সেরা ও শেষ উপহার। ❤️", // শেষ উইন্ডোর বাক্সের লেখা (নিজে নিজে টাইপ হয়)
  photos: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"], // ছবির তালিকা, যেমন ["photos/1.jpg","photos/2.jpg"]
  fireworks: 20, // আতশবাজির সংখ্যা
  introSongs: ["1.mp3"], // হাগ/No চাপার দৃশ্যের গান, যেমন ["song1.mp3"]
  mainSongs: [
    "2.mp3",
    "3.mp3",
    "4.mp3",
    "6.mp3",
    "5.mp3",
    "7.mp3",
    "8.mp3",
    "9.mp3",
  ], // No-র পরে মূল জন্মদিনের সাইটের গান, যেমন ["song2.mp3","song3.mp3"]
  name: "তন্নী", // স্ত্রীর নাম
  from: "তোমার ভালোবাসার মানুষ", // তোমার নাম
  birthday: "2027-01-01", // পরের জন্মদিনের তারিখ (YYYY-MM-DD)
  lines: [
    "আজ তোমার বিশেষ দিন।",
    "তুমি আমার জীবনের সবচেয়ে সুন্দর উপহার।",
    "প্রতিটা দিন তোমার সুন্দর হোক❤️",
    "আজ ১৭ ডিসেম্বর ২০২৬ ",
  ],
  reasons: [
    ["😊", "তোমার হাসি কি যে ভালোবাসি........ "],
    ["🗣️", "কিছু মিস্ করি আর না করি তোমার কণ্ঠস্বর টা খুব মিস করি পাখি 🥺"],
    ["🍰", " তোমার হাতে বানানো কেক উফ্ কি মজা। কেক টা খুব লোভনীয় ছিল।"],
    [
      "🥀",
      "একদিন লেট করে আসছিলে বলে রাগ করছিলাম তাই পাঞ্জাবীর সাথে ম্যাচিং করে গোলাপ নিয়ে আসছিলে মনে আছে। ওটা দারুন ছিল ",
    ],
    ["🏠", "আমার বাসায় তোমার দেওয়া সেই আর্ট টা এখনও আছে জানো"],
    [
      "✨",
      "তুমি আগের থেকে অনেক গ্লো করছো 🫣 , আল্লাহ তোমার চেহারার উজ্জলতা আরও বাড়িয়ে দিক আমিন 🤲",
    ],
  ],
  letterLines: [
    // চিঠির লাইন, একটার পর একটা টাইপ হবে। {name} = স্ত্রীর নাম
    " শুভ জন্মদিন, অপরূপা!❤️🌸 তামান্না সুলতানা তন্নী ",
    "জন্মদিনের অনেক অনেক শুভেচ্ছা।",
    "আজ এই জন্মদিনে আমার ভালোবাসা নিও। ",
    "এই ১০ বছরে কখনো তোমার জন্মদিনে উপস্থিত হতে পারেনি কিন্তু মন থেকে চেয়েছিলাম এবার হয়তো থাকতে পারবো কিন্তু সেটা কপালে জুটলো না। ",
    " তোমার সৌন্দর্য শুধু তোমার মুখে নয়, তোমার মায়াভরা হাসি, মিষ্টি কথা আর সুন্দর ব্যক্তিত্বের প্রতিটি ছোঁয়ায়।",
    " তুমি যেন এক টুকরো পূর্ণিমার চাঁদ, যার আলোয় চারপাশটা মুগ্ধতায় ভরে ওঠে।",
    "তোমার চোখে আছে এক অদ্ভুত মায়া, হাসিতে আছে এক স্বর্গীয় মুগ্ধতা।",
    "তোমার সরলতা, কোমলতা আর মায়াবী ব্যক্তিত্ব সত্যিই অতুলনীয়।",
    " তোমার প্রতিটি দিন কাটুক ফুলের মতো স্নিগ্ধতায়, প্রজাপতির মতো রঙিন আনন্দে ",
    " জীবনের প্রতিটি স্বপ্ন পূরণ হোক, প্রতিটি মুহূর্ত ভরে উঠুক অফুরন্ত সুখে।",
    "**এভাবেই চিরকাল সুন্দর থেকো, মায়াবতী!** ❤️",
    "একটা কথা কথা বলি, তোমাকে যে পাবে সে কখনো ঠকবে না । ",
    "অনেক সুখী হও তুমি। ❤️‍🩹",
  ],
};
/* ================================== */
const $=s=>document.querySelector(s);
$("#title").textContent = "শুভ জন্মদিন, " + CONFIG.name;
$('#sign').style.opacity=0;$('#sign').style.transition='opacity .8s';
$('#sign').textContent="— "+CONFIG.from;

// typing effect
(function(){const t=$('#typed');let l=0,c=0,del=false;
function tick(){const s=CONFIG.lines[l];t.textContent=s.slice(0,c);
if(!del&&c<s.length){c++;setTimeout(tick,70)}
else if(!del){del=true;setTimeout(tick,1600)}
else if(c>0){c--;setTimeout(tick,30)}
else{del=false;l=(l+1)%CONFIG.lines.length;setTimeout(tick,300)}}
tick()})();

// countdown to next birthday
function cd(){const el=$('#counter');let d=new Date(CONFIG.birthday+"T00:00:00");const n=new Date();
if(isNaN(d)){el.innerHTML="";return}
while(d<n)d.setFullYear(d.getFullYear()+1);
const x=d-n,v=[Math.floor(x/864e5),Math.floor(x/36e5)%24,Math.floor(x/6e4)%60,Math.floor(x/1e3)%60],lb=["দিন","ঘণ্টা","মিনিট","সেকেন্ড"];
el.innerHTML=v.map((a,i)=>`<div><b>${a}</b><span>${lb[i]}</span></div>`).join("")}


// floating hearts
setInterval(()=>{const h=document.createElement('div');h.className='heart';
h.textContent = ["❤️", "💖", "💕", "🌸", "✨", "💐", "🌷", "🥰", "😘", "🥀"][
  Math.floor(Math.random() * 10)
];
h.style.left=Math.random()*100+'vw';h.style.fontSize=(14+Math.random()*22)+'px';
h.style.animationDuration=(6+Math.random()*6)+'s';$('#hearts').appendChild(h);
setTimeout(()=>h.remove(),12000)},500);

// reasons
$('#reasons').innerHTML=CONFIG.reasons.map(r=>`<div class="flip"><div><div class="face front">${r[0]}</div><div class="face back">${r[1]}</div></div></div>`).join("");
document.querySelectorAll('.flip').forEach(f=>f.onclick=()=>f.classList.toggle('on'));

// letter
let letterRun=0;
function typeLetter(){
  const box=$('#letterText'),run=++letterRun;box.innerHTML='';$('#sign').style.opacity=0;let li=0;
  function nextLine(){
    if(run!==letterRun)return;
    if(li>=CONFIG.letterLines.length){$('#sign').style.opacity=1;return}
    const p=document.createElement('p');p.style.margin='0 0 10px';box.appendChild(p);
    const txt=CONFIG.letterLines[li].replace('{name}',CONFIG.name);
    const g=window.Intl&&Intl.Segmenter?[...new Intl.Segmenter('bn',{granularity:'grapheme'}).segment(txt)].map(x=>x.segment):Array.from(txt);
    let c=0;
    (function ch(){
      if(run!==letterRun)return;
      p.textContent=g.slice(0,c).join('')+(c<g.length?'▌':'');
      if(c++<g.length)setTimeout(ch,60);else{li++;setTimeout(nextLine,800)}
    })();
  }
  nextLine()}
$('#env').onclick=()=>{const e=$('#env'),open=e.classList.toggle('open');
  if(open){burst();typeLetter()}else{letterRun++}};

// confetti
const cv=$('#confetti'),cx=cv.getContext('2d');let P=[],run=false;
function size(){cv.width=innerWidth;cv.height=innerHeight}size();addEventListener('resize',size);
function burst(){const cols=['#e8436e','#f5b942','#7ec8ff','#9be37d','#ff9bb3','#c79bff'];
for(let i=0;i<160;i++)P.push({x:innerWidth/2,y:innerHeight/3,vx:(Math.random()-.5)*16,vy:Math.random()*-14-3,s:5+Math.random()*7,c:cols[i%6],r:Math.random()*6,vr:(Math.random()-.5)*.4,life:140+Math.random()*60});
if(!run){run=true;loop()}}
function loop(){cx.clearRect(0,0,cv.width,cv.height);
P=P.filter(p=>p.life-->0);
P.forEach(p=>{p.vy+=.3;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);cx.restore()});
if(P.length)requestAnimationFrame(loop);else run=false}
$('#party').onclick=()=>{burst();setTimeout(burst,400);launchFW(2);go(0)};

// cake
function blow(){const c=$('#cake');if(c.classList.contains('out')){c.classList.remove('out');return}c.classList.add('out');burst()}
$('#blow').onclick=blow;$('#cake').onclick=blow;

// gallery
// ===== স্মৃতির বাক্স: বাক্সে ক্লিক করলে একটা করে ছবি বেরোয়, ডান পাশে লেখা আসে =====
const memBox=$('#memBox'),memShow=$('#memShow'),memCount=$('#memCount'),memHint=$('#memHint');
let memItems=[],seen=0,memBusy=false,memRun=0,localPhotos=[];
const bnum=n=>String(n).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d]);
function segs(t){return window.Intl&&Intl.Segmenter?Array.from(new Intl.Segmenter('bn',{granularity:'grapheme'}).segment(t),x=>x.segment):Array.from(t)}
function memUpdate(){
  const n=memItems.length;
  memCount.innerHTML=n?'<span class="on">'+'♥'.repeat(seen)+'</span>'+'♡'.repeat(n-seen):'';
  memHint.textContent=!n?'':seen===0?'বাক্সটায় ট্যাপ করো, ভেতরে '+bnum(n)+'টা স্মৃতি লুকিয়ে আছে 💖'
    :seen<n?'আবার ট্যাপ করো, আরও '+bnum(n-seen)+'টা বাকি ✨'
    :'সব স্মৃতি দেখা হলো ❤️ আবার দেখতে বাক্সে ট্যাপ করো';
}
function renderGallery(){
  memRun++;
  memItems=(CONFIG.photos||[]).concat(localPhotos).map(u=>({img:u}));
  if(!memItems.length)['🌹','💑','🎁','🌅','🍰','💍'].forEach(e=>memItems.push({emoji:e}));
  seen=0;memBusy=false;memBox.classList.remove('open');
  memShow.innerHTML='<div class="mem-empty">✨ বাক্সের ভেতরে লুকিয়ে আছে তোমার জন্য সাজানো স্মৃতিগুলো ✨</div>';
  memUpdate();
}
function memOpen(){
  const n=memItems.length;if(!n||memBusy)return;memBusy=true;
  if(seen>=n)seen=0;
  const run=++memRun,idx=seen;
  memBox.classList.remove('wiggle');void memBox.offsetWidth;memBox.classList.add('wiggle','open');
  const prev=memShow.querySelector('.mcard'),prevCap=memShow.querySelector('.mcap');
  if(prev){prev.classList.add('out');if(prevCap)prevCap.classList.remove('on')}
  setTimeout(()=>{
    if(run!==memRun)return;
    const it=memItems[idx],caps=CONFIG.photoCaptions||[];
    memShow.innerHTML='';
    const card=document.createElement('div');card.className='mcard in';
    const tape=document.createElement('i');tape.className='ptape';
    const box=document.createElement('div');box.className='pimg';
    if(it.img){const im=document.createElement('img');im.src=it.img;im.alt='';im.draggable=false;box.appendChild(im)}
    else{box.classList.add('pemo');box.textContent=it.emoji}
    const star=document.createElement('span');star.className='pstar';star.textContent='✦';box.appendChild(star);
    card.appendChild(tape);card.appendChild(box);
    const cap=document.createElement('div');cap.className='mcap';
    memShow.appendChild(card);memShow.appendChild(cap);
    seen=idx+1;memUpdate();
    setTimeout(()=>cap.classList.add('on'),450);
    const g=segs(caps[idx]||('Memory '+(idx+1)));let c=0;
    setTimeout(function ch(){
      if(run!==memRun)return;
      cap.textContent=g.slice(0,c).join('')+(c<g.length?'▌':'');
      if(c++<g.length)setTimeout(ch,45);
    },650);
    setTimeout(()=>{if(run===memRun){memBox.classList.remove('open');memBusy=false}},1100);
  },prev?460:60);
}
memBox.addEventListener('click',memOpen);
memBox.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();memOpen()}});
renderGallery();
// অ্যাডমিন মোডে নিজের ডিভাইস থেকে ছবি যোগ (শুধু এই ব্রাউজারে দেখা যায়)
$('#file').onchange=e=>{[...e.target.files].forEach(f=>localPhotos.push(URL.createObjectURL(f)));renderGallery()};

// ===== ফুলের তোড়া (স্লো মোশন) =====
function buildBouquet(){
  const F=[['r',170,70,1.25,'#e0245e','#ff7aa5'],['r',118,100,1.1,'#d7263d','#ff7b7b'],['r',222,100,1.1,'#f29a1f','#ffd36a'],['l',170,128,1,'#ff5fa2','#ffc2dc'],
    ['d',70,152,1],['d',270,152,1],['r',120,158,1.05,'#7b3fe4','#b88cff'],['r',220,158,1.05,'#ff7a2f','#ffb06a'],
    ['l',82,204,.95,'#ff7eb6','#ffd0e5'],['l',258,204,.95,'#ffb02e','#fff0b0'],['d',170,188,1],['d',128,208,.9],['r',212,208,.95,'#e0245e','#ff7aa5']];
  let df='',st='',lf='',fl='',fi='';
  F.forEach((f,i)=>{const [t,x,y,sc,c1,c2]=f;
    st+=`<path class="st" pathLength="1" style="--i:${i}" d="M170 365 Q${(170+x)/2} ${(365+y)/2+30} ${x} ${y+10*sc}"/>`;
    let p='';
    if(t==='r'){df+=`<radialGradient id="g${i}" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="${c2}"/><stop offset="1" stop-color="${c1}"/></radialGradient>`;
      for(let k=0;k<5;k++)p+=`<ellipse cx="0" cy="-14" rx="10" ry="11" transform="rotate(${k*72})" fill="url(#g${i})" stroke="rgba(0,0,0,.12)"/>`;
      p+=`<circle r="14" fill="url(#g${i})"/><path d="M-10 -3 Q-1 -15 11 -4 Q13 9 0 11 Q-9 9 -7 1 Q-3 -7 5 -3 Q7 3 0 5" fill="none" stroke="rgba(0,0,0,.3)" stroke-width="1.5" stroke-linecap="round"/><path d="M-6 -9 Q3 -13 8 -7" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="1.6" stroke-linecap="round"/>`}
    else if(t==='d'){for(let k=0;k<14;k++)p+=`<ellipse cx="0" cy="-17" rx="4.2" ry="12" transform="rotate(${k*25.7})" fill="#fff" stroke="#e3dbe0" stroke-width=".6"/>`;
      p+=`<circle r="8" fill="#ffc928"/><circle r="4" fill="#e59400"/>`}
    else{df+=`<linearGradient id="g${i}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>`;
      for(let k=0;k<6;k++)p+=`<path d="M0 0 Q-11 -18 0 -32 Q11 -18 0 0Z" transform="rotate(${k*60})" fill="url(#g${i})" stroke="rgba(0,0,0,.15)" stroke-width=".8"/>`;
      p+=`<path d="M0 0 L-4 -12 M0 0 L0 -14 M0 0 L4 -12" stroke="#8a4a00" stroke-width="1.2"/><circle cx="-4" cy="-12" r="2" fill="#8a4a00"/><circle cy="-14" r="2" fill="#8a4a00"/><circle cx="4" cy="-12" r="2" fill="#8a4a00"/>`}
    fl+=`<g transform="translate(${x} ${y}) scale(${sc})"><g class="fl" style="--i:${i}">${p}</g></g>`});
  [[46,200],[294,200],[40,118],[300,116],[100,58],[240,58],[150,28],[196,34],[60,92],[285,88]].forEach((q,i)=>{
    st+=`<path class="st th" pathLength="1" style="--i:${i}" d="M170 365 Q${(170+q[0])/2} ${(365+q[1])/2+30} ${q[0]} ${q[1]}"/>`;
    fi+=`<g transform="translate(${q[0]} ${q[1]})"><g class="fi" style="--i:${i}"><circle cx="-4" cy="-3" r="3.6" fill="#fff"/><circle cx="4" cy="-4" r="3.6" fill="#fff"/><circle cx="0" cy="3" r="3.6" fill="#fff"/><circle cx="-5" cy="4" r="2.6" fill="${i%2?'#d9c2ff':'#ffd0e0'}"/><circle cx="6" cy="2" r="2.6" fill="${i%2?'#ffd0e0':'#d9c2ff'}"/></g></g>`});
  [[100,254,-55],[240,254,55],[72,242,-78],[268,242,78],[140,246,-28],[200,246,28]].forEach(l=>{
    lf+=`<g transform="translate(${l[0]} ${l[1]}) rotate(${l[2]})"><g class="lf"><path d="M0 0 Q-16 -30 0 -58 Q16 -30 0 0Z" fill="#3fa65a" stroke="#2c7d41" stroke-width="1"/><path d="M0 0 V-50 M0 -18 L-7 -26 M0 -30 L7 -38 M0 -18 L7 -26" stroke="#2c7d41" stroke-width="1" fill="none"/></g></g>`});
  let lace='';for(let x=84;x<=256;x+=14)lace+=`<circle cx="${x}" cy="${251+Math.sin((x-84)/172*Math.PI)*10}" r="6.5" fill="#fff"/>`;
  let tw='';[[24,60],[318,70],[30,250],[312,230],[170,6],[110,20],[236,18]].forEach((q,i)=>{
    tw+=`<g transform="translate(${q[0]} ${q[1]})"><path class="tw" style="--i:${i}" d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3Z" fill="#ffd34d"/></g>`});
  $('#bouquet').innerHTML=`<svg viewBox="0 0 340 420" aria-hidden="true"><defs>${df}<linearGradient id="wp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffb3c9"/><stop offset="1" stop-color="#ff5c8a"/></linearGradient><linearGradient id="wi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#ffd9e6"/></linearGradient><linearGradient id="rb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff4d6d"/><stop offset="1" stop-color="#b3123c"/></linearGradient></defs>${st}${lf}${fi}${fl}<g class="wrap"><path d="M66 250 L170 408 L274 250 Q170 280 66 250Z" fill="url(#wp)"/><path d="M104 258 L170 408 L236 258 Q170 276 104 258Z" fill="url(#wi)"/><path d="M104 258 L170 408 M236 258 L170 408 M135 266 L170 408 M205 266 L170 408" stroke="#ff8fb0" stroke-width="1.2" opacity=".6" fill="none"/>${lace}</g><g transform="translate(170 292)"><g class="bow"><path d="M-6 6 L-26 52 L-12 46 L-6 60Z M6 6 L26 52 L12 46 L6 60Z" fill="url(#rb)"/><ellipse cx="-24" cy="0" rx="24" ry="12" transform="rotate(-18 -24 0)" fill="url(#rb)"/><ellipse cx="24" cy="0" rx="24" ry="12" transform="rotate(18 24 0)" fill="url(#rb)"/><circle r="8" fill="#8f0e30"/><circle cx="-3" cy="-3" r="2.5" fill="#fff" opacity=".6"/></g></g>${tw}</svg>`}
buildBouquet();

function buildCake(){
  const dr=(x,y,w,fill,n)=>{let o=`<rect x="${x}" y="${y}" width="${w}" height="12" rx="6" fill="${fill}"/>`;
    for(let i=0;i<n;i++){const dx=x+10+i*((w-33)/(n-1)),h=10+((i*7)%4)*7;o+=`<rect x="${dx}" y="${y+4}" width="13" height="${h+8}" rx="6.5" fill="${fill}"/>`}return o};
  let sp='';[[70,250,'#ff5c8a'],[100,290,'#ffd34d'],[140,255,'#7ec8ff'],[185,292,'#9be37d'],[225,252,'#c79bff'],[255,288,'#ff8a3d'],[205,268,'#ffffff'],[120,272,'#ff5c8a'],[245,268,'#ffd34d']].forEach((d,i)=>{
    sp+=`<rect x="${d[0]}" y="${d[1]}" width="9" height="3.5" rx="1.7" fill="${d[2]}" transform="rotate(${i*37} ${d[0]} ${d[1]})"/>`});
  let bd='';for(let x=56;x<=264;x+=18)bd+=`<circle cx="${x}" cy="310" r="6" fill="#fff4f8"/>`;
  for(let x=92;x<=228;x+=17)bd+=`<circle cx="${x}" cy="222" r="5" fill="#ffd9e6"/>`;
  let cd='';[130,160,190].forEach((x,i)=>{
    cd+=`<rect x="${x-4}" y="52" width="8" height="38" rx="2" fill="${['#7ec8ff','#ff9bb3','#ffe08a'][i]}"/><path d="M${x-4} 62 l8 -5 M${x-4} 74 l8 -5 M${x-4} 86 l8 -5" stroke="#fff" stroke-width="2" opacity=".7"/><g class="hc-flame" style="animation-delay:${i*.07}s"><path d="M${x} 24 Q${x+8} 38 ${x} 50 Q${x-8} 38 ${x} 24Z" fill="#ffb43a"/><path d="M${x} 33 Q${x+4} 42 ${x} 49 Q${x-4} 42 ${x} 33Z" fill="#fff3a0"/></g>`});
  let ch='';[145,175].forEach(x=>{ch+=`<path d="M${x} 84 Q${x+4} 70 ${x+10} 66" stroke="#3f9b4f" stroke-width="2" fill="none"/><circle cx="${x}" cy="90" r="8" fill="#d6143a"/><circle cx="${x-3}" cy="87" r="2.4" fill="#fff" opacity=".7"/>`});
  let sr='';[[36,40],[290,60],[22,150],[300,160],[62,12],[262,16],[40,260],[285,250]].forEach((q,i)=>{
    sr+=`<g transform="translate(${q[0]} ${q[1]})"><path class="hc-tw" style="animation-delay:${i*.25}s" d="M0 -9 L2.5 -2.5 L9 0 L2.5 2.5 L0 9 L-2.5 2.5 L-9 0 L-2.5 -2.5Z" fill="#ffd34d"/></g>`});
  $('#herocake').innerHTML=`<svg viewBox="0 0 320 345" aria-hidden="true"><defs><linearGradient id="cC" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9b6a4a"/><stop offset="1" stop-color="#4d2a18"/></linearGradient><linearGradient id="cP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffa6c1"/><stop offset="1" stop-color="#ff5c8a"/></linearGradient><linearGradient id="cW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#ffe0ec"/></linearGradient><radialGradient id="cL" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#cfc6d0"/></radialGradient></defs>${sr}<ellipse cx="160" cy="320" rx="152" ry="17" fill="#d8d0da"/><ellipse cx="160" cy="316" rx="148" ry="14" fill="url(#cL)"/><rect x="40" y="222" width="240" height="92" rx="14" fill="url(#cC)"/>${dr(40,222,240,'#fff8fb',9)}${sp}<text x="160" y="284" text-anchor="middle" font-family="Hind Siliguri,sans-serif" font-weight="700" font-size="22" fill="#ffd34d" stroke="#7a4a00" stroke-width=".6">শুভ জন্মদিন</text>${bd}<rect x="78" y="152" width="164" height="72" rx="12" fill="url(#cP)"/>${dr(78,152,164,'#fff',7)}<rect x="108" y="94" width="104" height="60" rx="11" fill="url(#cW)"/>${dr(108,94,104,'#ff9fbd',5)}${ch}${cd}</svg>`}
buildCake();

// ===== আতশবাজি + গভীর শব্দ =====
const fw=document.createElement('canvas');fw.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:45';document.body.appendChild(fw);
const fx=fw.getContext('2d');let RK=[],FP=[],FL=[],RG=[],TXT_FADE=Infinity,fwRun=false,fctx=null,fxBus=null,boomBuf=null;
function fwSize(){fw.width=innerWidth;fw.height=innerHeight}fwSize();addEventListener('resize',fwSize);
// ===== আতশবাজির শব্দ: স্তরে স্তরে (গভীর ধুম + কড়া ফাটা + ঝিকমিক ফটফট + প্রতিধ্বনি), একসাথে অনেকগুলো ফাটলেও ফাটে না =====
// শব্দের কাঁচামাল (noise, ঝিকমিক) একবারই বানিয়ে রাখা হয়, তাই ফোনে ফাটার সময় আটকে যায় না।
function buildMaster(c){
  const bus=c.createGain();
  const comp=c.createDynamicsCompressor();comp.threshold.value=-22;comp.knee.value=10;comp.ratio.value=12;comp.attack.value=.002;comp.release.value=.25;
  const out=c.createGain();out.gain.value=1.45;
  const conv=c.createConvolver(),len=Math.floor(c.sampleRate*1.8),ir=c.createBuffer(2,len,c.sampleRate),k=Math.pow(.001,1/len);
  for(let ch=0;ch<2;ch++){const d=ir.getChannelData(ch);let e=1;for(let i=0;i<len;i++){d[i]=(Math.random()*2-1)*e;e*=k}}
  conv.buffer=ir;
  const wet=c.createGain();wet.gain.value=.3;
  bus.connect(comp);bus.connect(conv);conv.connect(wet);wet.connect(comp);
  comp.connect(out);out.connect(c.destination);
  return bus;
}
function actx2(){
  if(!fctx){try{fctx=new (window.AudioContext||window.webkitAudioContext)();fxBus=buildMaster(fctx)}catch(e){}}
  if(fctx&&fctx.state==='suspended')fctx.resume();
  return fctx;
}
const NB={},NV=3;
function noise(c,sec,pow){
  const v=(Math.random()*NV)|0,key=c.sampleRate+'|'+sec+'|'+pow+'|'+v;let b=NB[key];
  if(!b){
    const len=Math.floor(c.sampleRate*sec);b=c.createBuffer(1,len,c.sampleRate);const d=b.getChannelData(0);
    for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,pow);
    NB[key]=b;
  }
  const n=c.createBufferSource();n.buffer=b;n.playbackRate.value=.9+Math.random()*.2;return n;
}
function crackleBuf(c){
  const v=(Math.random()*2)|0,key=c.sampleRate+'|crackle|'+v;let b=NB[key];
  if(!b){
    const sr=c.sampleRate,len=Math.floor(sr*1.5);b=c.createBuffer(1,len,sr);const d=b.getChannelData(0);
    for(let n=0;n<20;n++){
      const st=Math.floor(Math.random()*(len-sr*.04)),f=2500+Math.random()*4500,a=.25+Math.random()*.5,dl=Math.floor(sr*.025);
      for(let i=0;i<dl;i++)d[st+i]+=a*Math.exp(-i/(dl*.3))*(.6*Math.sin(2*Math.PI*f*i/sr)+.4*(Math.random()*2-1));
    }
    NB[key]=b;
  }
  return b;
}
function fxWarm(){
  const c=actx2();if(!c)return;
  [[.9,2.2],[.12,3],[1,.5]].forEach(a=>{for(let i=0;i<NV;i++){const key=c.sampleRate+'|'+a[0]+'|'+a[1]+'|'+i;if(!NB[key]){const len=Math.floor(c.sampleRate*a[0]),b=c.createBuffer(1,len,c.sampleRate),d=b.getChannelData(0);for(let j=0;j<len;j++)d[j]=(Math.random()*2-1)*Math.pow(1-j/len,a[1]);NB[key]=b}}});
  for(let i=0;i<2;i++)crackleBuf(c);
}
function route(c,dest,vol,pan){
  const out=c.createGain();out.gain.value=vol;
  if(c.createStereoPanner){const p=c.createStereoPanner();p.pan.value=Math.max(-1,Math.min(1,pan||0));out.connect(p);p.connect(dest)}
  else out.connect(dest);
  return out;
}
function fxCrackle(c,out,t,n){
  const s=c.createBufferSource(),hp=c.createBiquadFilter(),g=c.createGain();
  s.buffer=crackleBuf(c);s.playbackRate.value=.9+Math.random()*.2;hp.type='highpass';hp.frequency.value=1800;g.gain.value=n/18*.32;
  s.connect(hp);hp.connect(g);g.connect(out);s.start(t+.05);
}
function fxBoom(c,dest,t,vol,pan,rate){
  const out=route(c,dest,vol,pan);
  // ১) গভীর ধুম
  const o=c.createOscillator(),g=c.createGain();
  o.type='sine';o.frequency.setValueAtTime(95*rate,t);o.frequency.exponentialRampToValueAtTime(28,t+.55);
  g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.95,t+.008);g.gain.exponentialRampToValueAtTime(.001,t+1.1);
  o.connect(g);g.connect(out);o.start(t);o.stop(t+1.2);
  // ২) শরীর (নিচু আওয়াজ, ধীরে ডুবে যায়)
  const n=noise(c,.9,2.2),lp=c.createBiquadFilter(),ng=c.createGain();
  lp.type='lowpass';lp.frequency.setValueAtTime(1800*rate,t);lp.frequency.exponentialRampToValueAtTime(160,t+.7);lp.Q.value=.8;
  ng.gain.setValueAtTime(.0001,t);ng.gain.linearRampToValueAtTime(.8,t+.006);ng.gain.exponentialRampToValueAtTime(.001,t+.85);
  n.connect(lp);lp.connect(ng);ng.connect(out);n.start(t);
  // ৩) ফাটার কড়া শব্দ
  const k=noise(c,.12,3),hp=c.createBiquadFilter(),kg=c.createGain();
  hp.type='highpass';hp.frequency.value=2200;kg.gain.value=.55;
  k.connect(hp);hp.connect(kg);kg.connect(out);k.start(t);
  // ৪) ঝিকমিক ফটফট
  fxCrackle(c,out,t,18);
}
function fxWhistle(c,dest,t,vol,pan){
  const out=route(c,dest,vol*.5,pan);
  const o=c.createOscillator(),g=c.createGain();
  o.type='triangle';o.frequency.setValueAtTime(420,t);o.frequency.exponentialRampToValueAtTime(1500,t+.9);
  g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(.08,t+.15);g.gain.linearRampToValueAtTime(.0001,t+.95);
  o.connect(g);g.connect(out);o.start(t);o.stop(t+1);
  const n=noise(c,1,.5),bp=c.createBiquadFilter(),ng=c.createGain();
  bp.type='bandpass';bp.frequency.setValueAtTime(500,t);bp.frequency.exponentialRampToValueAtTime(2600,t+.9);bp.Q.value=1.2;ng.gain.value=.2;
  n.connect(bp);bp.connect(ng);ng.connect(out);n.start(t);
}
function boom(vol,pan){
  const c=actx2();if(!c)return;
  const v=vol==null?1:vol,t=c.currentTime,rate=.92+Math.random()*.16;
  if(boomBuf){  // নিজের আসল রেকর্ড করা শব্দ দিলে সেটাই বাজে (CONFIG-এ fireworkBoom)
    const s=c.createBufferSource();s.buffer=boomBuf;s.playbackRate.value=rate;
    s.connect(route(c,fxBus,v,pan));s.start(t);
    fxCrackle(c,route(c,fxBus,v,pan),t,10);
  }else fxBoom(c,fxBus,t,v,pan||0,rate);
}
function whoosh(vol,pan){const c=actx2();if(!c)return;fxWhistle(c,fxBus,c.currentTime,vol==null?1:vol,pan||0)}
function loadBoom(){
  const src=CONFIG.fireworkBoom;if(!src||boomBuf)return;
  const c=actx2();if(!c)return;
  fetch(src).then(r=>r.arrayBuffer()).then(b=>c.decodeAudioData(b)).then(d=>{boomBuf=d}).catch(()=>{});
}
function launchOne(){RK.push({x:innerWidth*(.12+Math.random()*.76),y:innerHeight,vy:-(9+Math.random()*3),ty:innerHeight*(.1+Math.random()*.32),h:Math.floor(Math.random()*360),k:Math.floor(Math.random()*4)});
  whoosh();if(!fwRun){fwRun=true;fwLoop()}}
function launchFW(n){let t=0;for(let i=0;i<n;i++){t+=(i>=n-5&&n>=10)?110:(380+Math.random()*180);setTimeout(launchOne,t)}return t}
function explode(r){boom(r.vol==null?.8:r.vol,(r.x/fw.width-.5)*1.6);const N=r.k===3?70:100;
  for(let i=0;i<N;i++){const a=Math.PI*2*i/N;let vx,vy,life=90+Math.random()*40;
    if(r.k===1){vx=Math.cos(a)*4.5;vy=Math.sin(a)*4.5}
    else if(r.k===2){vx=16*Math.pow(Math.sin(a),3)*.27;vy=-(13*Math.cos(a)-5*Math.cos(2*a)-2*Math.cos(3*a)-Math.cos(4*a))*.27}
    else{const sp=1.5+Math.random()*4.5,b=Math.random()*7;vx=Math.cos(b)*sp;vy=Math.sin(b)*sp;if(r.k===3)life=150+Math.random()*40}
    FP.push({x:r.x,y:r.y,vx,vy,life,max:life,h:(r.h+Math.random()*50)%360,l:Math.random()<.2?90:60})}}
// ===== গর্জাস আতশবাজি: HAPPY BIRTHDAY TO YOU 2026 =====
// প্রতিটা ধাপে সবগুলো রকেট একসাথে ওঠে আর একসাথে ফেটে একেকটা অক্ষর হয়ে ফোটে।
// CONFIG-এ fireworkText (ধাপের তালিকা) আর fireworkRows (কোন ধাপ কোন সারিতে) দিয়ে বদলানো যায়।
// ফোনে মসৃণ রাখতে: অক্ষরের ছবি আগেই একবার এঁকে রাখা হয়, ফোটার পর শুধু সেই ছবিটা বসানো হয় (হাজার হাজার বিন্দু প্রতি ফ্রেমে আঁকতে হয় না)।
const FW_TEXT=[["H","A","P","P","Y"],["B","I","R","T","H","D","A","Y"],["T","O"],["Y","O","U"]];
const FW_ROWS=[0,1,2,2,3];
const FW_GAPS=[0,2400,2500,1800,2300];
const FW_FONT=px=>'900 '+px+'px "Arial Black","Helvetica Neue",Arial,sans-serif';
const MOB=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||Math.min(innerWidth,innerHeight)<700;
const ptsCache={},glowCache={},flashCache={};
let FIN_DONE=false,FWQ=0,fwLast=0,fwEma=16,LT=[];
function textPoints(str,px,limitPer){
  const key=str+'|'+px+'|'+limitPer;if(ptsCache[key])return ptsCache[key];
  const c=document.createElement('canvas'),x=c.getContext('2d');
  x.font=FW_FONT(px);
  const w=Math.ceil(x.measureText(str).width)+8,h=Math.ceil(px*1.25);
  c.width=w;c.height=h;x.font=FW_FONT(px);x.fillStyle='#000';x.textBaseline='middle';x.textAlign='center';x.fillText(str,w/2,h/2);
  const d=x.getImageData(0,0,w,h).data,limit=Math.max(100,str.length*limitPer);
  let step=Math.max(2,Math.round(px/18)),pts;
  do{
    pts=[];
    for(let yy=0;yy<h;yy+=step)for(let xx=0;xx<w;xx+=step)if(d[(yy*w+xx)*4+3]>128)pts.push({x:xx-w/2,y:yy-h/2});
    step++;
  }while(pts.length>limit&&step<40);
  return ptsCache[key]={pts:pts,step:step-1,w:w,h:h};
}
function glowSprite(h,hot){
  const hh=(Math.round(h/12)*12)%360,key=hh+'|'+(hot?1:0);
  if(glowCache[key])return glowCache[key];
  const c=document.createElement('canvas');c.width=c.height=48;const g=c.getContext('2d');
  const rg=g.createRadialGradient(24,24,0,24,24,24);
  rg.addColorStop(0,'hsla('+hh+',100%,'+(hot?90:64)+'%,1)');
  rg.addColorStop(.3,'hsla('+hh+',100%,'+(hot?72:52)+'%,.8)');
  rg.addColorStop(1,'hsla('+hh+',100%,55%,0)');
  g.fillStyle=rg;g.fillRect(0,0,48,48);
  return glowCache[key]=c;
}
function flashSprite(h){
  const hh=(Math.round(h/30)*30)%360;
  if(flashCache[hh])return flashCache[hh];
  const c=document.createElement('canvas');c.width=c.height=128;const g=c.getContext('2d');
  const rg=g.createRadialGradient(64,64,0,64,64,64);
  rg.addColorStop(0,'hsla('+hh+',100%,90%,1)');rg.addColorStop(1,'hsla('+hh+',100%,60%,0)');
  g.fillStyle=rg;g.fillRect(0,0,128,128);
  return flashCache[hh]=c;
}
function warmSprites(){for(let h=0;h<360;h+=12){glowSprite(h,false);glowSprite(h,true)}for(let h=0;h<360;h+=30)flashSprite(h)}
function hueFor(si,j,nst){
  if(si===0)return [345,28,48,320,12][j%5];
  if(si===1)return [200,170,120,280,48,20,330,190][j%8];
  if(si===nst-1)return 44+(j%2)*6;
  const pal=[[190,330],[330,48,190]][si-2];
  return pal?pal[j%pal.length]:48;
}
let skyEl=null;
function skyDim(on,ms){
  if(!skyEl){skyEl=document.createElement('div');skyEl.style.cssText='position:fixed;inset:0;z-index:44;pointer-events:none;opacity:0;transition:opacity 1.2s;background:radial-gradient(ellipse at 50% 40%,rgba(22,3,32,.6),rgba(5,0,12,.78))';document.body.appendChild(skyEl)}
  if(on)document.body.classList.add('fxshow');   // নিচের পেজের অ্যানিমেশন থামে, ফোন হালকা থাকে
  setTimeout(()=>{
    skyEl.style.opacity=on?'1':'0';
    if(!on)setTimeout(()=>document.body.classList.remove('fxshow'),1300);
  },ms||0)}

// একটা অক্ষরের সব কণা + আগে থেকে আঁকা ছবি (bitmap)
function prepLetter(it){
  if(it.letter)return;
  const tp=textPoints(it.ch,it.px,MOB?100:140),sz=Math.max(it.sz,tp.step*.95);
  const parts=tp.pts.map(p=>{
    const hot=Math.random()<.2,h=(it.h+(p.y/it.px)*34+Math.random()*14+360)%360;
    return {dx:p.x,dy:p.y,tr:600+Math.random()*350,hot:hot,gh:h,spr:glowSprite(h,hot)};
  });
  const m=Math.ceil(sz*2.4),bw=tp.w+2*m,bh=tp.h+2*m,c=document.createElement('canvas');
  c.width=bw;c.height=bh;const g=c.getContext('2d');
  g.globalCompositeOperation='lighter';g.globalAlpha=.8;
  parts.forEach(p=>{const s=sz*(p.hot?1.7:1.4);g.drawImage(p.spr,bw/2+p.dx-s,bh/2+p.dy-s,2*s,2*s)});
  it.letter={parts:parts,bmp:c,bw:bw,bh:bh,sz:sz,hot:glowSprite(it.h,true)};
}

function launchText(opt){
  const page=!!(opt&&opt.page),W=fw.width,H=fw.height;
  const stages=(CONFIG.fireworkText&&CONFIG.fireworkText.length)?CONFIG.fireworkText:FW_TEXT;
  const rowOf=(CONFIG.fireworkRows&&CONFIG.fireworkRows.length===stages.length)?CONFIG.fireworkRows:(stages===FW_TEXT?FW_ROWS:stages.map((_,i)=>i));
  FIN_DONE=false;FWQ=MOB?1:0;fwEma=MOB?22:16;fwLast=0;
  loadBoom();fxWarm();warmSprites();
  const meas=document.createElement('canvas').getContext('2d');
  const adv=(ch,p)=>{meas.font=FW_FONT(p);return meas.measureText(ch).width};
  const rowIds=[...new Set(rowOf)],base=Math.min(H*.085,W*.125,92),items=[];
  const tEl=document.getElementById('typed')||document.querySelector('.hero h1'),tb=tEl?tEl.getBoundingClientRect().bottom:H*.2;
  const top=page?H*.24:Math.min(Math.max(tb+26,H*.14),H*.36);   // শিরোনামের নিচ থেকে শুরু
  let cy=0;
  rowIds.forEach((rid,ri)=>{
    const sIdx=stages.map((_,i)=>i).filter(i=>rowOf[i]===rid);
    let p=base*(ri===rowIds.length-1&&ri>0?1.2:1);
    const layout=pp=>{const L=[];let x=0;sIdx.forEach((si,k)=>{if(k>0)x+=pp*.75;stages[si].forEach((ch,j)=>{if(j>0)x+=pp*.28;const w=adv(ch,pp);L.push({ch:ch,si:si,j:j,x:x+w/2});x+=w})});return{L:L,total:x}};
    let lay=layout(p);
    if(lay.total>W*.92){p=Math.max(24,Math.floor(p*W*.92/lay.total));lay=layout(p)}
    cy=ri===0?top+p*.7:cy+p*1.55;
    const x0=(W-lay.total)/2;
    lay.L.forEach(l=>items.push({ch:l.ch,si:l.si,j:l.j,x:x0+l.x,y:cy,px:p,sz:Math.max(2.6,p/20),h:hueFor(l.si,l.j,stages.length)}));
  });
  let at=0;const stageAt=stages.map((_,i)=>{at+=(i<FW_GAPS.length?FW_GAPS[i]:2300);return at});
  items.forEach((it,gi)=>{
    const delay=stageAt[it.si]+Math.random()*70,n=stages[it.si].length,vol=Math.min(1.1,1.5/Math.sqrt(n)),pan=(it.x/W-.5)*1.6;
    setTimeout(()=>prepLetter(it),Math.max(0,delay-900)+(gi%8)*30);   // অক্ষরের ছবি আগে থেকে এঁকে রাখা
    setTimeout(()=>{
      prepLetter(it);
      RK.push({txt:true,item:it,x:it.x,y0:H,y:H,ty:it.y,born:performance.now(),dur:1000,h:it.h,vol:vol,pan:pan,fin:it.si===stages.length-1});
      whoosh(vol*.8,pan);if(!fwRun){fwRun=true;fwLoop()}
    },delay);
  });
  // ফাঁকা অংশে বাড়তি ছোট আতশবাজি (প্রতি ধাপে ২টা)
  stageAt.forEach(t=>{for(let i=0;i<2;i++)setTimeout(()=>{
    RK.push({x:W*(.1+Math.random()*.8),y:H,vy:-(9+Math.random()*3),ty:H*(.58+Math.random()*.22),h:Math.random()*360,k:Math.floor(Math.random()*4),vol:.35});
    whoosh(.25,0);if(!fwRun){fwRun=true;fwLoop()}
  },t+250+i*350)});
  const lastAt=stageAt[stageAt.length-1];
  if(!page){skyDim(true,0);skyDim(false,lastAt+1000+3500+1200)}
  TXT_FADE=performance.now()+lastAt+1000+3500;
  return lastAt+1000;
}
function explodeText(r){
  const now=performance.now();
  boom(r.vol,r.pan);
  FL.push({x:r.x,y:r.y,born:now,h:r.h});RG.push({x:r.x,y:r.y,born:now,h:r.h});
  prepLetter(r.item);
  LT.push({x:r.x,y:r.y,born:now,L:r.item.letter,ph:Math.random()*6.28});
  for(let i=0;i<34;i++){const a=Math.random()*6.28,sp=1.2+Math.random()*4;FP.push({x:r.x,y:r.y,vx:Math.cos(a)*sp,vy:Math.sin(a)*sp,life:46,max:46,h:r.h,l:80})}
  if(r.fin&&!FIN_DONE){   // শেষ ধাপ: ওপর থেকে সোনালি ঝিকমিক বৃষ্টি
    FIN_DONE=true;const W=fw.width,H=fw.height;
    for(let i=0;i<150;i++)FP.push({x:Math.random()*W,y:-10-Math.random()*H*.3,vx:(Math.random()-.5)*.6,vy:.5+Math.random()*1.2,life:170+Math.random()*60,max:230,h:38+Math.random()*16,l:72});
  }
}
function drawRocket(r){
  r.hist=r.hist||[];r.hist.push({x:r.x,y:r.y});if(r.hist.length>7)r.hist.shift();
  for(let i=1;i<r.hist.length;i++){
    const a=i/r.hist.length;
    fx.strokeStyle='rgba(255,'+(200+a*40|0)+','+(120+a*100|0)+','+(a*.85)+')';fx.lineWidth=1+a*2.4;
    fx.beginPath();fx.moveTo(r.hist[i-1].x,r.hist[i-1].y);fx.lineTo(r.hist[i].x,r.hist[i].y);fx.stroke();
  }
  fx.fillStyle='#fff';fx.beginPath();fx.arc(r.x,r.y,2.6,0,6.283);fx.fill();
  if(FP.length<600&&Math.random()<(FWQ>=2?.35:.7))FP.push({x:r.x+(Math.random()-.5)*3,y:r.y+6,vx:(Math.random()-.5)*.6,vy:.8+Math.random()*1.2,life:26,max:26,h:35+Math.random()*20,l:70});
}
function fwLoop(){
  const now=performance.now();
  // ফোন ধীর হলে নিজে থেকে ছোট-খাটো সাজ কমিয়ে ফ্রেম ঠিক রাখে
  const dt=fwLast?now-fwLast:16;fwLast=now;
  if(dt<250)fwEma=fwEma*.92+dt*.08;
  if(fwEma>34)FWQ=2;else if(fwEma>24&&FWQ<1)FWQ=1;
  fx.globalCompositeOperation='destination-out';fx.fillStyle='rgba(0,0,0,.24)';fx.fillRect(0,0,fw.width,fw.height);
  fx.globalCompositeOperation='source-over';
  // রকেট
  RK=RK.filter(r=>{
    if(r.txt){
      const p=Math.min(Math.max((now-r.born)/r.dur,0),1),e=1-Math.pow(1-p,2);
      r.y=r.y0+(r.ty-r.y0)*e;drawRocket(r);
      if(p>=1){explodeText(r);return false}
      return true;
    }
    r.y+=r.vy;r.vy*=.985;drawRocket(r);
    if(r.y<=r.ty||r.vy>-2){explode(r);return false}
    return true;
  });
  // ফুলকি
  FP=FP.filter(p=>{
    p.vy+=.045;p.vx*=.985;p.x+=p.vx;p.y+=p.vy;
    if(--p.life<=0)return false;
    fx.globalAlpha=p.life/p.max;fx.fillStyle=p.col||(p.col='hsl('+p.h+',100%,'+p.l+'%)');fx.fillRect(p.x-1.6,p.y-1.6,3.2,3.2);
    return true;
  });
  // আলোর ঝলক ও ঢেউয়ের রিং
  fx.globalCompositeOperation='lighter';
  if(FWQ<2){
    FL=FL.filter(f=>{
      const p=Math.max(0,(now-f.born)/380);if(p>=1)return false;
      const R=90+170*p;fx.globalAlpha=.55*(1-p);fx.drawImage(flashSprite(f.h),f.x-R,f.y-R,2*R,2*R);return true;
    });
    RG=RG.filter(g=>{
      const p=Math.max(0,(now-g.born)/700);if(p>=1)return false;
      const e=1-Math.pow(1-p,2);
      fx.globalAlpha=1;fx.strokeStyle='hsla('+g.h+',100%,75%,'+(.8*(1-p))+')';fx.lineWidth=4*(1-p)+1;
      fx.beginPath();fx.arc(g.x,g.y,12+190*e,0,6.283);fx.stroke();return true;
    });
  }else{FL.length=0;RG.length=0}
  // অক্ষর: প্রথমে কণা ছড়ায়, তারপর আগে থেকে আঁকা ছবি বসে ঝিকমিক করে, শেষে সব একসাথে মিলিয়ে যায়
  LT=LT.filter(E=>{
    let fade=1;
    if(now>TXT_FADE){fade=1-(now-TXT_FADE)/1800;if(fade<=0)return false}
    const age=now-E.born,L=E.L,P=L.parts,BAL=Math.min(Math.max((age-800)/200,0),1);
    if(age<1000){
      const k=FWQ>=2?3:2;
      for(let i=0;i<P.length;i+=k){
        const p=P[i],pr=Math.min(Math.max(age/p.tr,0),1),e=1-Math.pow(1-pr,3);
        const a=(pr<1?(.4+.6*pr):.9)*(1-BAL)*fade;if(a<=.01)continue;
        const s=L.sz*(p.hot?1.7:1.4);
        fx.globalAlpha=a*.85;fx.drawImage(p.spr,E.x+p.dx*e-s,E.y+p.dy*e-s,2*s,2*s);
      }
    }
    if(BAL>0){
      const t=Math.max(0,age-1000)/1000,sag=Math.min(t,6)*1.1,wob=Math.sin(now*.004+E.ph)*.4;
      fx.globalAlpha=BAL*fade*(.88+.12*Math.sin(now*.006+E.ph));
      fx.drawImage(L.bmp,E.x-L.bw/2+wob,E.y-L.bh/2+sag,L.bw,L.bh);
      const ns=FWQ>=2?2:(FWQ===1?4:6);
      for(let j=0;j<ns;j++){   // জ্বলে ওঠা ছোট তারা
        const kk=now/450+j*7.3,fl=Math.floor(kk),sa=Math.sin((kk-fl)*Math.PI),p=P[((fl*2654435761)>>>0)%P.length],s=L.sz*3.2*sa;
        if(s<.5)continue;
        fx.globalAlpha=.9*fade*sa;fx.drawImage(L.hot,E.x+p.dx+wob-s,E.y+p.dy+sag-s,2*s,2*s);
      }
      if(BAL>=1&&FP.length<(FWQ>=2?260:520)&&Math.random()<(FWQ>=1?.18:.35)){   // অক্ষর থেকে ঝরে পড়া ফুলকি
        const p=P[(Math.random()*P.length)|0];
        FP.push({x:E.x+p.dx+wob,y:E.y+p.dy+sag,vx:(Math.random()-.5)*.4,vy:.3+Math.random()*.6,life:40,max:40,h:p.gh,l:78});
      }
    }
    return true;
  });
  fx.globalCompositeOperation='source-over';fx.globalAlpha=1;
  if(RK.length||FP.length||LT.length||FL.length||RG.length)requestAnimationFrame(fwLoop);
  else{fx.clearRect(0,0,fw.width,fw.height);fwRun=false}
}
function showCake(){const c=$('#herocake'),st=$('#stage');st.classList.add('up');
  setTimeout(()=>{c.classList.add('show');st.scrollIntoView({behavior:'smooth',block:'center'})},900);
  setTimeout(burst,5500);setTimeout(burst,7000)}
// তোড়া স্লো মোশনে ফোটে, তারপর সাধারণ আতশবাজি ওড়ে, শেষের দিকে কেক ধীরে উঠে আসে
function startBouquet(){
  $('#bouquet').classList.add('grow');
  setTimeout(()=>{const end=launchFW(CONFIG.fireworks||20);setTimeout(showCake,Math.max(end-2000,0))},10500);
}
// দুই পুতুল জড়িয়ে ধরার পর "শুভ জন্মদিন, তন্নী" পেজ খোলে
function startFinale(){
  document.querySelector('header.hero').classList.add('reveal');
  startBouquet();
}
// No চাপার পর নতুন পেজ: অন্ধকার আকাশে HAPPY BIRTHDAY TO YOU 2026 আতশবাজি (কোনো গান নয়)। শেষ হলে done() ডাকে।
function lettersPage(done){
  const pg=document.createElement('div');pg.className='fwPage';document.body.appendChild(pg);
  document.body.style.overflow='hidden';
  fw.style.zIndex=106;
  requestAnimationFrame(()=>pg.classList.add('on'));
  const end=launchText({page:true});                 // শেষ অক্ষর ফোটার সময়
  setTimeout(()=>{
    pg.classList.remove('on');
    done();                                          // পেজ মিলিয়ে যেতে যেতেই হাগের দৃশ্য শুরু
    setTimeout(()=>{pg.remove();fw.style.zIndex=45},900);
  },end+3500+1800+300);
}

// ===== এক এক করে উইন্ডো =====
const steps=[...document.querySelectorAll('main section')],hero=document.querySelector('header.hero');
function go(i){
  hero.classList.toggle('hidden',i>=0);
  steps.forEach((el,k)=>el.classList.toggle('active',k===i));
  window.scrollTo(0,0)}
steps.forEach((sec,i)=>{
  if(sec.dataset.final)return;
  const nav=document.createElement('div');nav.className='nav';
  if(i>0){const b=document.createElement('button');b.className='btn ghost';b.textContent='⬅ Back';b.onclick=()=>go(i-1);nav.appendChild(b)}
  const t=document.createElement('small');t.textContent=(i+1)+' / '+steps.length;nav.appendChild(t);
  const n=document.createElement('button');n.className='btn';
  if(i<steps.length-1){n.textContent='Next ➜';n.onclick=()=>{go(i+1);burst()}}
  else{n.textContent='🔁 আবার শুরু';n.onclick=()=>go(-1)}
  nav.appendChild(n);sec.appendChild(nav)});
// ===== শেষ উইন্ডো: আগে বাক্সের লেখা টাইপ হয়, তারপর বাকি অংশ আসে =====
(function(){
  const win=$('#endWin'),live=$('#endLive'),ghost=$('#endGhost'),thanks=$('#endThanks');
  let run=0,on=false;
  const txt=CONFIG.endMessage||'';
  ghost.textContent=txt;
  const g=window.Intl&&Intl.Segmenter?Array.from(new Intl.Segmenter('bn',{granularity:'grapheme'}).segment(txt),x=>x.segment):Array.from(txt);
  function start(){
    const r=++run;let c=0;live.textContent='';thanks.classList.add('wait');
    setTimeout(function ch(){
      if(r!==run)return;
      live.textContent=g.slice(0,c).join('')+(c<g.length?'▌':'');
      if(c++<g.length)setTimeout(ch,50);
      else setTimeout(()=>{if(r===run)thanks.classList.remove('wait')},900);
    },700);
  }
  new MutationObserver(()=>{
    const a=win.classList.contains('active');
    if(a&&!on){on=true;start();if(window.__endSong)window.__endSong.start()}
    else if(!a&&on){on=false;run++;live.textContent='';thanks.classList.add('wait');if(window.__endSong)window.__endSong.stop()}
  }).observe(win,{attributes:true,attributeFilter:['class']});
})();
// ===== Happy Endings: সাইট থেকে বেরিয়ে যাওয়া =====
$('#endBtn').onclick=()=>{
  try{window.__stopSong&&window.__stopSong()}catch(e){}
  const o=document.createElement('div');o.id='bye';
  o.innerHTML='<div><div style="font-size:3rem">❤️</div><div class="script" style="font-size:clamp(2rem,8vw,3.5rem)">Happy Endings</div><p>ধন্যবাদ, এবার আসি…</p></div>';
  document.body.appendChild(o);requestAnimationFrame(()=>requestAnimationFrame(()=>o.classList.add('on')));
  setTimeout(()=>{try{window.close()}catch(e){}},2600)};
// theme
const root=document.documentElement;
$('#theme').onclick=()=>{const dark=root.dataset.theme==='dark'||(!root.dataset.theme&&matchMedia('(prefers-color-scheme: dark)').matches);
root.dataset.theme=dark?'light':'dark';$('#theme').textContent=dark?'🌙':'☀️'};
// ===== intro: Yes পালায়, No ক্লিক করা যায় =====
(function(){
const intro=$('#intro'),yes=$('#yes'),no=$('#no');
document.body.style.overflow='hidden';
let moved=false;
const spacer=document.createElement('span');spacer.style.cssText='display:inline-block;width:96px;height:1px';
function dodge(){
  if(!moved){moved=true;yes.parentNode.insertBefore(spacer,yes);yes.style.position='fixed';yes.style.zIndex='101'}
  const w=yes.offsetWidth,h=yes.offsetHeight,nb=no.getBoundingClientRect();
  let x,y,t=0;
  do{x=Math.random()*(innerWidth-w-20)+10;y=Math.random()*(innerHeight-h-20)+10;t++}
  while(t<30&&Math.abs(x-nb.left)<w+40&&Math.abs(y-nb.top)<h+40);
  yes.style.left=x+'px';yes.style.top=y+'px';
}
['mouseenter','pointerdown','touchstart','focus','click'].forEach(ev=>yes.addEventListener(ev,e=>{e.preventDefault();e.stopPropagation();dodge();yes.blur()},{passive:false}));
document.addEventListener('pointermove',e=>{
  if(intro.classList.contains('gone'))return;
  const r=yes.getBoundingClientRect();
  const d=Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2));
  if(d<110)dodge();
});
// ---- গান (শুধু নিজের বাছাই করা ফাইল) ----
let songEl=null,playing=false,muted=false,special=null;
let playlist=[],idx=0,scene='intro';
const lists={intro:(CONFIG.introSongs||[]).slice(),main:(CONFIG.mainSongs||[]).slice()},names={intro:'',main:''};
function dbOpen(){return new Promise((res,rej)=>{const r=indexedDB.open('bdaySongs',1);r.onupgradeneeded=()=>r.result.createObjectStore('s');r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
async function saveSong(f,k){try{const d=await dbOpen();d.transaction('s','readwrite').objectStore('s').put(f,k)}catch(e){}}
async function loadSong(k){try{const d=await dbOpen();return await new Promise(res=>{const q=d.transaction('s').objectStore('s').get(k);q.onsuccess=()=>res(q.result);q.onerror=()=>res(null)})}catch(e){return null}}
function prep(){const l=lists[scene];if(songEl)songEl.pause();songEl=null;if(!l.length)return;
  idx=0;playlist=l;songEl=new Audio(l[0]);
  songEl.onended=()=>{idx=(idx+1)%playlist.length;songEl.src=playlist[idx];songEl.play().catch(()=>{})};
  $('#pickName').textContent='🎶 '+(names[scene]||'গান ঠিক করা আছে')}
function setSong(f){if(!f)return;saveSong(f,scene);lists[scene]=[URL.createObjectURL(f)];names[scene]=f.name;prep();
  startSong()}
function toMain(){scene='main';if(lists.main.length)prep();startSong()}
let tapped=false;
['pointerdown','touchstart','keydown'].forEach(ev=>document.addEventListener(ev,e=>{
  if(tapped||scene!=='intro')return;if(e.target.closest&&e.target.closest('.music'))return;
  tapped=true;if(!playing)startSong()},true));
function activeEl(){return special&&special.el?special.el:songEl}
function startSong(){const a=activeEl();if(!a)return;playing=true;muted=false;$('#music').textContent='🔊';a.play().catch(()=>{})}
function stopSong(){playing=false;muted=true;$('#music').textContent='🔇';const a=activeEl();if(a)a.pause()}
$('#music').textContent='🔇';
$('#music').onclick=()=>playing?stopSong():startSong();
$('#songFile').onchange=e=>setSong(e.target.files[0]);
$('#songFile2').onchange=e=>setSong(e.target.files[0]);
prep();
// নির্দিষ্ট উইন্ডোর আলাদা গান (হৃদয়ের পেজ, শেষ উইন্ডো): শুরুতে মূল গান থামে (জায়গা মনে থাকে),
// উইন্ডো ছাড়লে এই গান থামে আর মূল গান আবার চলে
function makeSpecial(key){
  const sp={el:null};
  return {
    start:function(){
      const h=CONFIG[key],src=Array.isArray(h)?h[0]:h;
      if(!src)return false;
      if(special&&special!==sp&&special.el)special.el.pause();
      if(songEl)songEl.pause();
      if(!sp.el||sp.el.__src!==src){if(sp.el)sp.el.pause();sp.el=new Audio(src);sp.el.__src=src;sp.el.loop=true}
      try{sp.el.currentTime=0}catch(e){}
      special=sp;
      if(!muted){playing=true;$('#music').textContent='🔊';sp.el.play().catch(()=>{})}
      return true},
    stop:function(){
      if(special!==sp)return;
      special=null;if(sp.el)sp.el.pause();
      if(!muted&&songEl){playing=true;$('#music').textContent='🔊';songEl.play().catch(()=>{})}}
  };
}
window.__heartSong=makeSpecial('heartSong');
window.__endSong=makeSpecial('endSong');
window.__stopSong=stopSong;
window.__pauseSong=function(){const a=activeEl();if(a)a.pause()};
window.__startSong=startSong;
window.__reloadSongs=function(){lists.intro=(CONFIG.introSongs||[]).slice();lists.main=(CONFIG.mainSongs||[]).slice();prep()};
['intro','main'].forEach(k=>loadSong(k).then(f=>{const cfg=k==='intro'?CONFIG.introSongs:CONFIG.mainSongs;if(f&&!(cfg&&cfg.length)){lists[k]=[URL.createObjectURL(f)];names[k]=f.name;if(scene===k)prep()}}));
function showPair(){intro.classList.add('pair');document.querySelectorAll('#intro .pick').forEach(x=>x.style.display='none');
  const d=$('#dolls');['hb','hg'].forEach(c=>{const i=document.createElement('i');i.className='harm '+c;d.appendChild(i)});
  setTimeout(()=>{intro.classList.add('hug');burst();$('#introMsg').textContent='তোমাকে কখনো ছেড়ে যাব না 🤗❤️'},2000)}
let noBusy=false;
no.onclick=()=>{
  if(noBusy)return;noBusy=true;
  const hug=()=>{   // আগের মতোই: দুই পুতুল আসে, গান বাজে, জড়িয়ে ধরে
    $('#mouth').setAttribute('d','M40 62 Q50 76 60 62');
    $('#tear').style.display='none';
    $('#introMsg').textContent='জানতাম! তুমি আমাকে কখনো ভুলবে না ❤️';
    yes.style.display='none';no.style.display='none';spacer.remove();toMain();showPair();
    burst();
    setTimeout(()=>{intro.classList.add('gone');document.body.style.overflow='';burst();startFinale()},7500);
  };
  // No চাপার সাথে সাথে নতুন পেজে HAPPY BIRTHDAY TO YOU 2026 (গান থামানো থাকে), শেষে হাগের দৃশ্য
  if(window.lettersPage){if(window.__pauseSong)window.__pauseSong();window.lettersPage(hug)}else hug();
};
})();

/* hug3d.js — No চাপার পর দুই পুতুলের 3D জড়িয়ে ধরার দৃশ্য (Three.js)
   এই ফাইলটা script.js-এর পরে লোড হয়। Three.js লোড না হলে বা WebGL না থাকলে
   আগের SVG দৃশ্যটাই চলবে। */
(function () {
  var THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  var intro = document.getElementById('intro');
  if (!intro) return;
  var ready = false, started = false, raf = 0, goneT = 0;

  var lerp = function (a, b, t) { return a + (b - a) * t; };
  var cl = function (x) { return Math.min(1, Math.max(0, x)); };
  var ss = function (x) { x = cl(x); return x * x * (3 - 2 * x); };

  var s = document.createElement('script');
  s.src = THREE_URL;
  s.onload = function () { ready = true; check(); };
  document.head.appendChild(s);
  new MutationObserver(check).observe(intro, { attributes: true, attributeFilter: ['class'] });

  function check() {
    if (started || !ready) return;
    if (intro.classList.contains('pair')) start();
  }

  /* ---------- পুতুল বানানো ---------- */
  function makeDoll(cfg) {
    var M = function (c, r) { return new THREE.MeshStandardMaterial({ color: c, roughness: r == null ? 0.55 : r, metalness: 0.05 }); };
    var root = new THREE.Group();
    var bodyG = new THREE.Group();
    root.add(bodyG);

    // পা
    var legs = [];
    [-0.2, 0.2].forEach(function (x) {
      var g = new THREE.Group();
      g.position.set(x, 0.55, 0);
      var m = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.12, 0.55, 16), M(cfg.legs));
      m.position.y = -0.27;
      g.add(m);
      var shoe = new THREE.Mesh(new THREE.SphereGeometry(0.17, 16, 12), M(cfg.shoe));
      shoe.scale.set(1, 0.6, 1.4);
      shoe.position.set(0, -0.55, 0.06);
      g.add(shoe);
      bodyG.add(g);
      legs.push(g);
    });

    // শরীর (ছেলের শার্ট / মেয়ের ফ্রক)
    var torsoGeo = cfg.girl ? new THREE.CylinderGeometry(0.3, 0.72, 1.0, 32) : new THREE.CylinderGeometry(0.42, 0.48, 0.95, 32);
    var torso = new THREE.Mesh(torsoGeo, M(cfg.top));
    torso.position.y = 1.02;
    bodyG.add(torso);

    // মাথা
    var headG = new THREE.Group();
    headG.position.y = 1.5;
    bodyG.add(headG);
    var head = new THREE.Mesh(new THREE.SphereGeometry(0.62, 32, 24), M(cfg.skin, 0.7));
    head.position.y = 0.55;
    headG.add(head);

    // চুল
    var cap = new THREE.Mesh(new THREE.SphereGeometry(0.66, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.52), M(cfg.hair, 0.8));
    cap.position.y = 0.55;
    cap.rotation.x = -0.25;
    headG.add(cap);
    if (cfg.girl) {
      var back = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 18), M(cfg.hair, 0.8));
      back.scale.set(1, 1.15, 0.85);
      back.position.set(0, 0.35, -0.2);
      headG.add(back);
      [-1, 1].forEach(function (sd) {
        var tail = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), M(cfg.hair, 0.8));
        tail.position.set(sd * 0.66, 0.3, -0.05);
        headG.add(tail);
        var bow = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 10), M(0xff3d71));
        bow.position.set(sd * 0.6, 0.62, 0.1);
        headG.add(bow);
      });
    }

    // মুখ
    var eyes = [], hl = [];
    [-1, 1].forEach(function (sd) {
      var e = new THREE.Mesh(new THREE.SphereGeometry(0.075, 12, 10), new THREE.MeshBasicMaterial({ color: 0x222222 }));
      e.position.set(sd * 0.22, 0.5, 0.57);
      headG.add(e);
      eyes.push(e);
      var h = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      h.position.set(sd * 0.22 + 0.025, 0.53, 0.635);
      headG.add(h);
      hl.push(h);
      var b = new THREE.Mesh(new THREE.CircleGeometry(0.1, 16), new THREE.MeshBasicMaterial({ color: 0xff8fb0, transparent: true, opacity: 0.55 }));
      b.position.set(sd * 0.38, 0.4, 0.5);
      b.rotation.y = sd * 0.65;
      headG.add(b);
    });
    var mouth = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.018, 8, 16, Math.PI), new THREE.MeshBasicMaterial({ color: 0xb3202f }));
    mouth.rotation.z = Math.PI;
    mouth.position.set(0, 0.36, 0.595);
    headG.add(mouth);

    // হাত
    function arm(side) {
      var pivot = new THREE.Group();
      pivot.position.set(side * (cfg.girl ? 0.4 : 0.5), 1.32, -0.02);
      var mid = new THREE.Group();
      pivot.add(mid);
      var swing = new THREE.Group();
      mid.add(swing);
      var len = 1.15;
      var m = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.1, len, 16), M(cfg.top));
      m.position.y = -len / 2;
      swing.add(m);
      var hand = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 12), M(cfg.skin));
      hand.position.y = -len;
      swing.add(hand);
      bodyG.add(pivot);
      return { mid: mid, swing: swing, side: side };
    }
    return { root: root, bodyG: bodyG, headG: headG, legs: legs, eyes: eyes, hl: hl, R: arm(1), L: arm(-1) };
  }

  function heartTexture() {
    var c = document.createElement('canvas');
    c.width = c.height = 64;
    var x = c.getContext('2d');
    x.fillStyle = '#ff4d79';
    x.beginPath();
    x.moveTo(32, 56);
    x.bezierCurveTo(4, 36, 6, 10, 26, 12);
    x.bezierCurveTo(30, 12, 32, 16, 32, 20);
    x.bezierCurveTo(32, 16, 34, 12, 38, 12);
    x.bezierCurveTo(58, 10, 60, 36, 32, 56);
    x.fill();
    return new THREE.CanvasTexture(c);
  }

  /* ---------- দৃশ্য শুরু ---------- */
  function start() {
    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return; }
    started = true;

    var dollsEl = intro.querySelector('.dolls');
    if (!dollsEl) return;
    var holder = document.createElement('div');
    holder.id = 'hug3d';
    holder.style.cssText = 'width:min(560px,94vw);aspect-ratio:1.28;margin:0 auto;position:relative';
    dollsEl.parentNode.insertBefore(holder, dollsEl);
    dollsEl.style.display = 'none';

    var W = holder.clientWidth || 320, H = holder.clientHeight || 250;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(W, H, false);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
    holder.appendChild(renderer.domElement);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    var sun = new THREE.DirectionalLight(0xffffff, 0.75);
    sun.position.set(3, 6, 5);
    scene.add(sun);
    var pink = new THREE.PointLight(0xff6b93, 0.4, 20);
    pink.position.set(-4, 2, 4);
    scene.add(pink);

    // মঞ্চ
    var stage = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.4, 0.12, 48), new THREE.MeshStandardMaterial({ color: 0xffc2d6, roughness: 0.4 }));
    stage.position.y = -0.06;
    scene.add(stage);
    var ring = new THREE.Mesh(new THREE.TorusGeometry(2.3, 0.04, 8, 64), new THREE.MeshStandardMaterial({ color: 0xf5b942, roughness: 0.3, metalness: 0.4 }));
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    var boy = makeDoll({ skin: 0xffd2a8, hair: 0x4a2c1a, top: 0x4f8ef7, legs: 0x3b3b5c, shoe: 0x2b2b3d, girl: false });
    var girl = makeDoll({ skin: 0xffd2a8, hair: 0x2b1a12, top: 0xff6b93, legs: 0xffd2a8, shoe: 0xc2185b, girl: true });
    scene.add(boy.root);
    scene.add(girl.root);
    boy.root.position.x = -6;
    girl.root.position.x = 6;

    var heartTex = heartTexture();
    var hearts = [];
    var lastHeart = 0;
    var t0 = performance.now();
    var HUG = Math.PI / 2 - 0.05;

    function frame(now) {
      if (intro.classList.contains('gone')) {
        if (!goneT) goneT = now;
        else if (now - goneT > 1500) { renderer.dispose(); return; }
      }
      var t = (now - t0) / 1000;
      var walkEnd = 2.8;
      var walking = t < walkEnd;
      var e = 1 - Math.pow(1 - cl(t / walkEnd), 3);
      var close = ss((t - 2.6) / 1.2);
      var a = ss((t - 2.9) / 1.0);               // জড়িয়ে ধরার অগ্রগতি
      var bx = lerp(lerp(-5.8, -0.95, e), -0.72, close);
      boy.root.position.x = bx;
      girl.root.position.x = -bx;
      var turn = ss((t - 2.2) / 1.0);
      boy.root.rotation.y = lerp(1.1, 0, turn);
      girl.root.rotation.y = -lerp(1.1, 0, turn);
      var hop = walking ? Math.abs(Math.sin(t * 8)) * 0.15 : 0;
      boy.root.position.y = hop;
      girl.root.position.y = hop;
      var legAmp = 0.6 * (1 - ss((t - 2.4) / 0.4));
      [boy, girl].forEach(function (d, i) {
        d.legs[0].rotation.x = Math.sin(t * 8 + i) * legAmp;
        d.legs[1].rotation.x = -Math.sin(t * 8 + i) * legAmp;
      });

      // হাত: একটা হাত পিঠ জড়ায়, অন্যটা নাড়ে
      var hang = function (side) { return side * 0.18; };
      function pose(d, hugArm, farArm) {
        var hs = hugArm.side, fs = farArm.side;
        hugArm.swing.rotation.z = lerp(hang(hs), hs * HUG, a);
        hugArm.mid.rotation.y = lerp(0, hs * 0.35, a);
        farArm.swing.rotation.z = lerp(hang(fs), fs * (2.3 + 0.25 * Math.sin(t * 7)), a);
        if (walking) {
          hugArm.swing.rotation.z += Math.sin(t * 8) * 0.25 * (1 - a);
          farArm.swing.rotation.z -= Math.sin(t * 8) * 0.25 * (1 - a);
        }
      }
      pose(boy, boy.R, boy.L);
      pose(girl, girl.L, girl.R);

      // মাথা কাছাকাছি হেলে যায়, চোখ বন্ধ (খুশি)
      boy.headG.rotation.z = -0.17 * a;
      girl.headG.rotation.z = 0.17 * a;
      boy.headG.rotation.y = 0.38 * a;
      girl.headG.rotation.y = -0.38 * a;
      var close2 = ss((a - 0.6) / 0.4);
      [boy, girl].forEach(function (d) {
        d.eyes.forEach(function (eye) { eye.scale.y = lerp(1, 0.12, close2); });
        d.hl.forEach(function (h) { h.visible = close2 < 0.5; });
        d.bodyG.rotation.z = 0.05 * a * Math.sin(t * 2.2);
      });

      // ক্যামেরা ধীরে ঘোরে
      var ang = 0.35 * Math.sin(t * 0.8);
      camera.position.set(Math.sin(ang) * 9.8, 2.2, Math.cos(ang) * 9.8);
      camera.lookAt(0, 1.35, 0);

      // হার্ট ভেসে ওঠে
      if (t > 3.8 && now - lastHeart > 280) {
        lastHeart = now;
        var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: heartTex, transparent: true }));
        var sc = 0.35 + Math.random() * 0.35;
        sp.scale.set(sc, sc, 1);
        sp.position.set((Math.random() - 0.5) * 1.0, 3.0, (Math.random() - 0.5) * 0.6);
        scene.add(sp);
        hearts.push({ sp: sp, vx: (Math.random() - 0.5) * 0.4, vy: 0.8 + Math.random() * 0.6, born: now });
      }
      hearts = hearts.filter(function (h) {
        var age = (now - h.born) / 1000;
        if (age > 2.6) { scene.remove(h.sp); h.sp.material.dispose(); return false; }
        h.sp.position.x += h.vx * 0.016;
        h.sp.position.y += h.vy * 0.016;
        h.sp.material.opacity = 1 - age / 2.6;
        return true;
      });

      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);
  }
})();

/* হৃদয়ের উইন্ডো — canvas দিয়ে আঁকা ৩D পাপড়ির হৃদয় (হালকা, তাই ফোনেও মসৃণ)।
   #heartWin উইন্ডো দেখালে শুরু হয়, ছেড়ে গেলে থেমে যায়। */
(function(){
  // ====== সেটিংস: এখানে বদলে নাও ======
  var DURATION = 12;                                         // মোট সময় (সেকেন্ড)
  var LINE1 = "ভালোবাসি তোমাকে তামান্না সুলতানা তন্নী";       // বড় লেখা
  var LINE2 = "আমার মনে তোমার জায়গা কেউ নিতে পারবে না।";      // ছোট লেখা
  var LAYERS = 9, SIZE = 11, PETAL_TIME = 1.8;
  var ASK_TEXT =
    "আমার হৃদয়ে তোমার জন্য ফুলে সাজানো দেখবা 🫣 ? দেখতে হলে এই বাটনে ক্লিক করো। ❤️";  // বাক্সের লেখা
  // ====================================

  var win=document.getElementById('heartWin');
  if(!win)return;
  var $=function(id){return document.getElementById(id)};
  var box=win.querySelector('.hw-box'),cv=$('hwCanvas'),ctx=cv.getContext('2d'),stage=$('hwStage');
  var ask=$('hwAsk'),askText=$('hwAskText'),askBtn=$('hwAskBtn'),askRun=0;
  var running=false,playing=false,raf=0,t0=0,pausedAt=0;
  var W=0,H=0,dpr=1,k=1,cx=0,cy=0,items=[],falls=[],rises=[],lastRise=0,tX=0,tY=0,tiltX=0,tiltY=0;
  var sprites={},glowSpr=null,heartSpr=null,PI=Math.PI;
  box.style.setProperty('--T',DURATION+'s');
  $('hwL1').textContent=LINE1;$('hwL2').textContent=LINE2;
  function rnd(a,b){return a+Math.random()*(b-a)}
  function clamp(x){return x<0?0:x>1?1:x}

  // ---------- স্প্রাইট (একবার আঁকা, বারবার ব্যবহার) ----------
  function petalSprite(h,l){
    var key=h+'|'+l;if(sprites[key])return sprites[key];
    var S=2,w=17*S,hh=24*S,c=document.createElement('canvas');c.width=w;c.height=hh;
    var g=c.getContext('2d');
    var gr=g.createLinearGradient(0,hh,0,0);
    gr.addColorStop(0,'hsl('+h+',82%,'+Math.max(l-10,8)+'%)');
    gr.addColorStop(1,'hsl('+h+',88%,'+Math.min(l+12,95)+'%)');
    g.beginPath();g.moveTo(w/2,1);
    g.bezierCurveTo(w+3,hh*.18,w*1.02,hh*.86,w/2,hh-1);
    g.bezierCurveTo(-w*.02,hh*.86,-3,hh*.18,w/2,1);
    g.fillStyle=gr;g.fill();
    var rg=g.createRadialGradient(w/2,hh*.22,0,w/2,hh*.22,w*.6);
    rg.addColorStop(0,'rgba(255,255,255,.5)');rg.addColorStop(1,'rgba(255,255,255,0)');
    g.fillStyle=rg;g.fill();
    g.strokeStyle='rgba(70,0,25,.28)';g.lineWidth=1;g.stroke();
    return sprites[key]=c;
  }
  function makeGlow(){
    var c=document.createElement('canvas');c.width=c.height=256;var g=c.getContext('2d');
    var rg=g.createRadialGradient(128,128,0,128,128,128);
    rg.addColorStop(0,'rgba(255,60,120,.55)');rg.addColorStop(.45,'rgba(255,60,120,.18)');rg.addColorStop(.7,'rgba(255,60,120,0)');
    g.fillStyle=rg;g.fillRect(0,0,256,256);return c;
  }
  function makeHeartSprite(){
    var c=document.createElement('canvas');c.width=c.height=96;var g=c.getContext('2d');
    g.font='52px sans-serif';g.textAlign='center';g.textBaseline='middle';
    g.shadowColor='rgba(255,80,130,.9)';g.shadowBlur=14;g.fillStyle='#ff4f86';g.fillText('♥',48,50);return c;
  }
  glowSpr=makeGlow();heartSpr=makeHeartSprite();

  // ---------- মাপ ----------
  function resize(){
    var r=box.getBoundingClientRect();
    W=r.width;H=r.height;
    dpr=Math.min(window.devicePixelRatio||1,(navigator.hardwareConcurrency||4)<=4?1.5:2);
    cv.width=Math.max(1,Math.round(W*dpr));cv.height=Math.max(1,Math.round(H*dpr));
    var sr=stage.getBoundingClientRect();
    cx=sr.left-r.left+sr.width/2;cy=sr.top-r.top+sr.height/2;
    k=Math.min(Math.min(sr.width,sr.height)/430,1.25);
  }

  // ---------- তৈরি ----------
  function build(){
    items=[];var list=[];
    for(var l=0;l<LAYERS;l++){
      var s=1-(l/LAYERS)*0.88,count=Math.round(110*s+14);
      for(var q=0;q<count;q++){
        var t=(q/count)*PI*2+l*0.45;
        var hx=16*Math.pow(Math.sin(t),3);
        var hy=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t));
        list.push({l:l,s:s,px:hx*SIZE*s+rnd(-2,2),py:(hy+2.5)*SIZE*s+rnd(-2,2)});
      }
    }
    var n=list.length;
    list.forEach(function(it,i){
      var a=Math.atan2(it.py,it.px);
      var hue=rnd(338,352),light=36+it.s*28+rnd(-4,4);
      if(it.l===0)light=66+rnd(-3,5);
      if(Math.random()<0.09){hue=rnd(345,355);light=82+rnd(-3,4)}
      items.push({
        tx:it.px,ty:it.py,tz:(1-it.s)*100+rnd(-6,6),
        sx:rnd(-380,380),sy:rnd(-460,-200),sz:-500,
        rz:a+PI/2+rnd(-8,8)*PI/180,
        d:(i/n)*(DURATION-PETAL_TIME),
        img:petalSprite(Math.round(hue/3)*3,Math.round(light/6)*6),
        px:0,py:0,z2:0,sc:0,al:0
      });
    });
    falls=[];
    for(var i=0;i<22;i++)falls.push({x:rnd(0,1),w:rnd(8,15),dx:rnd(-90,90),dur:rnd(8,14),off:rnd(0,14),img:petalSprite(348,58)});
    rises=[];lastRise=0;
  }

  // ---------- ধুকপুক ----------
  function beat(u){
    if(u<.14)return 1+.07*(u/.14);
    if(u<.28)return 1.07-.07*((u-.14)/.14);
    if(u<.42)return 1+.04*((u-.28)/.14);
    if(u<.70)return 1.04-.04*((u-.42)/.28);
    return 1;
  }

  // ---------- প্রতি ফ্রেম ----------
  function frame(now){
    raf=requestAnimationFrame(frame);
    var t=(now-t0)/1000;
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,W,H);
    tiltX+=(tX-tiltX)*.12;tiltY+=(tY-tiltY)*.12;
    var after=t>DURATION,ta=after?t-DURATION:0;
    var b=after?beat((ta%1.5)/1.5):1;

    // ঝরা পাপড়ি
    ctx.globalAlpha=.75;
    for(var i=0;i<falls.length;i++){
      var f=falls[i],u=((t+f.off)%f.dur)/f.dur;
      var fy=(-.05+u*1.17)*H;
      var fx=f.x*W+(u<.5?f.dx*(u/.5):f.dx-1.5*f.dx*((u-.5)/.5));
      var sc=f.w/17,ang=u*420*PI/180,cs=Math.cos(ang)*sc*dpr,sn=Math.sin(ang)*sc*dpr;
      ctx.setTransform(cs,sn,-sn,cs,fx*dpr,fy*dpr);
      ctx.drawImage(f.img,-8.5,-20.4,17,24);
    }

    // আভা
    ctx.setTransform(dpr,0,0,dpr,0,0);
    var ge=1-Math.pow(1-clamp(t/DURATION),2),gs=(210*2*k)*(after?b:1);
    ctx.globalAlpha=.8*ge;
    ctx.drawImage(glowSpr,cx-gs/2,cy-gs/2,gs,gs);

    // কোণ
    var spin=1-Math.pow(1-clamp(t/DURATION),3);
    var ramp=clamp(ta/1.5);
    var ayD=-360*(1-spin)+tiltY+(after?14*Math.sin(2*PI*ta/12)*ramp:0);
    var axD=18*(1-spin)+tiltX+(after?3*Math.sin(2*PI*ta/12)*ramp:0);
    var ay=ayD*PI/180,ax=axD*PI/180;
    var cyA=Math.cos(ay),syA=Math.sin(ay),cxA=Math.cos(ax),sxA=Math.sin(ax);

    var vis=[];
    for(var j=0;j<items.length;j++){
      var it=items[j],p=clamp((t-it.d)/PETAL_TIME);
      if(p<=0)continue;
      var e=1-Math.pow(1-p,3);
      var x=it.sx+(it.tx-it.sx)*e,y=it.sy+(it.ty-it.sy)*e,z=it.sz+(it.tz-it.sz)*e;
      var x1=x*cyA+z*syA,z1=-x*syA+z*cyA;
      var y1=y*cxA-z1*sxA,z2=y*sxA+z1*cxA;
      var fz=1100/Math.max(1100-z2,150);
      it.px=cx+x1*fz*k*b*(after?1:1);it.py=cy+(y1)*fz*k*b;
      it.z2=z2;it.sc=(.1+.9*e)*fz*k*b;it.al=Math.min(1,p*3);
      vis.push(it);
    }
    vis.sort(function(a,c){return a.z2-c.z2});
    for(var m=0;m<vis.length;m++){
      var v=vis[m],cs2=Math.cos(v.rz)*v.sc*dpr,sn2=Math.sin(v.rz)*v.sc*dpr;
      ctx.globalAlpha=v.al;
      ctx.setTransform(cs2,sn2,-sn2,cs2,v.px*dpr,v.py*dpr);
      ctx.drawImage(v.img,-8.5,-20.4,17,24);
    }

    // ভেসে ওঠা হৃদয় (হৃদয় তৈরি শেষ হলে)
    ctx.setTransform(dpr,0,0,dpr,0,0);
    if(after&&now-lastRise>500){
      lastRise=now;
      rises.push({x:rnd(.15,.85)*W,y:H*.92,size:rnd(14,34),dx:rnd(-50,50),dur:rnd(4.5,7)*1000,born:now});
    }
    for(var r=rises.length-1;r>=0;r--){
      var h=rises[r],age=(now-h.born)/h.dur;
      if(age>=1){rises.splice(r,1);continue}
      var al=age<.15?age/.15*.95:.95*(1-(age-.15)/.85);
      var sz=h.size*(.5+.6*(1-Math.pow(1-age,2)))*1.3;
      ctx.globalAlpha=Math.max(al,0);
      ctx.drawImage(heartSpr,h.x+h.dx*age-sz/2,h.y-age*H*.8-sz/2,sz,sz);
    }
    ctx.globalAlpha=1;
  }

  function startLoop(){cancelAnimationFrame(raf);raf=requestAnimationFrame(frame)}
  function stopLoop(){cancelAnimationFrame(raf);raf=0;ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,cv.width,cv.height)}

  function play(){
    box.classList.remove('play');
    resize();build();
    void box.offsetWidth;
    box.classList.add('play');
    playing=true;t0=performance.now();startLoop();
    if(window.__heartSong)window.__heartSong.start();
  }
  function stop(){
    askRun++;playing=false;
    if(window.__heartSong)window.__heartSong.stop();
    box.classList.remove('play');
    stopLoop();items=[];falls=[];rises=[];
  }

  // বাক্স: লেখা নিজে নিজে টাইপ হয়, শেষে বাটন আসে
  function showAsk(){
    playing=false;stopLoop();box.classList.remove('play');
    ask.classList.remove('off','ready');askText.textContent='';
    var run=++askRun;
    var g=window.Intl&&Intl.Segmenter?Array.from(new Intl.Segmenter('bn',{granularity:'grapheme'}).segment(ASK_TEXT),function(x){return x.segment}):Array.from(ASK_TEXT);
    var c=0;
    (function ch(){
      if(run!==askRun)return;
      askText.textContent=g.slice(0,c).join('')+(c<g.length?'▌':'');
      if(c++<g.length)setTimeout(ch,55);else ask.classList.add('ready');
    })();
  }
  askBtn.addEventListener('click',function(){ask.classList.add('off');play()});
  $('hwReplay').addEventListener('click',play);

  box.addEventListener('pointermove',function(e){
    var r=stage.getBoundingClientRect();
    tY=((e.clientX-r.left)/r.width-.5)*30;
    tX=-((e.clientY-r.top)/r.height-.5)*30;
  });
  box.addEventListener('pointerleave',function(){tX=0;tY=0});
  window.addEventListener('resize',function(){if(running&&playing)resize()});
  // ট্যাব লুকালে থামে, ফিরলে চলে (ব্যাটারি বাঁচে)
  document.addEventListener('visibilitychange',function(){
    if(!playing)return;
    if(document.hidden){pausedAt=performance.now();cancelAnimationFrame(raf)}
    else{t0+=performance.now()-pausedAt;startLoop()}
  });

  // উইন্ডো দেখালে শুরু, লুকালে বন্ধ
  new MutationObserver(function(){
    var on=win.classList.contains('active');
    if(on&&!running){running=true;setTimeout(showAsk,500)}
    else if(!on&&running){running=false;stop()}
  }).observe(win,{attributes:true,attributeFilter:['class']});
})();

// ===== data.json: GitHub-এ সেভ করা গান ও ছবি লোড =====
const ADMIN=new URLSearchParams(location.search).has('admin');
if(!ADMIN){document.documentElement.classList.add('viewer');$('#file').parentNode.style.display='none'}
fetch('data.json?v='+Date.now()).then(r=>r.ok?r.json():null).then(d=>{
  if(!d)return;
  ['introSongs','mainSongs','photos','heartSong','endSong'].forEach(k=>{if(Array.isArray(d[k]))CONFIG[k]=d[k]});
  if(window.__reloadSongs)window.__reloadSongs();
  renderGallery();
  if(window.__admRefresh)window.__admRefresh();
}).catch(()=>{});

// ===== অ্যাডমিন প্যানেল (শুধু ?admin দিয়ে খুললে): ওয়েবপেজ থেকে গান/ছবি বেছে সরাসরি GitHub-এ সেভ =====
if(ADMIN)(function(){
  const KEY='bdayAdmin',LAB={introSongs:'ইন্ট্রোর গান (১টা)',mainSongs:'মূল সাইটের গান',heartSong:'হৃদয়ের পেজের গান (১টা)',endSong:'শেষ উইন্ডোর গান (১টা)',photos:'ছবি'};
  const st={introSongs:[],mainSongs:[],heartSong:[],endSong:[],photos:[]};
  let cfg={owner:'',repo:'',branch:'main',token:''},cnt=0;
  try{Object.assign(cfg,JSON.parse(localStorage.getItem(KEY)||'{}'))}catch(e){}
  if(!cfg.owner&&/\.github\.io$/.test(location.hostname)){cfg.owner=location.hostname.split('.')[0];cfg.repo=location.pathname.split('/')[1]||''}
  const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const hasNew=()=>Object.keys(st).some(k=>st[k].some(i=>i.file));
  function load(){Object.keys(st).forEach(k=>{st[k]=(CONFIG[k]||[]).map(p=>({path:p}))})}
  function safe(n){const m=n.match(/\.[a-z0-9]{1,5}$/i),ext=m?m[0].toLowerCase():'';
    return (n.slice(0,n.length-ext.length).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')||'file')+ext}
  function b64(f){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]);r.onerror=()=>rej(r.error);r.readAsDataURL(f)})}

  const fab=document.createElement('button');fab.id='admFab';fab.textContent='⚙️';fab.title='গান ও ছবি ম্যানেজ';
  const box=document.createElement('div');box.id='adm';box.hidden=true;
  box.innerHTML='<div class="adm-in"><h3>⚙️ গান ও ছবি ম্যানেজ</h3>'+
   '<p class="adm-note">এখান থেকে সেভ করলে ফাইল সরাসরি GitHub-এ আপলোড হয়, আর ১-৩ মিনিট পর সব ডিভাইসে দেখা যায়।</p>'+
   '<details open><summary>GitHub সেটিংস</summary>'+
   '<label>Owner (ইউজারনেম)<input id="admOwner" autocomplete="off"></label>'+
   '<label>Repository<input id="admRepo" autocomplete="off"></label>'+
   '<label>Branch<input id="admBranch" autocomplete="off"></label>'+
   '<label>Token<input id="admToken" type="password" autocomplete="off"></label>'+
   '<label class="adm-chk"><input type="checkbox" id="admRem"> এই ডিভাইসে মনে রাখো</label></details>'+
   '<div id="admLists"></div><button class="btn" id="admSave">💾 GitHub-এ সেভ করো</button>'+
   '<div id="admLog"></div><button class="adm-x" id="admClose">✕ বন্ধ করো</button></div>';
  document.body.appendChild(fab);document.body.appendChild(box);
  const log=m=>{const l=$('#admLog');l.textContent+=(l.textContent?'\n':'')+m;l.scrollTop=l.scrollHeight};

  function render(){
    $('#admLists').innerHTML=Object.keys(LAB).map(k=>'<div class="adm-sec"><b>'+LAB[k]+'</b><ul>'+
      (st[k].map((it,i)=>'<li>'+(it.file?'🆕 ':'')+'<span>'+esc(decodeURIComponent(it.path.split('/').pop()))+'</span><button class="adm-del" data-k="'+k+'" data-i="'+i+'">✕</button></li>').join('')||'<li><i>খালি</i></li>')+
      '</ul><label class="btn adm-add">➕ '+(k==='photos'?'ছবি':'গান')+' যোগ করো<input type="file" data-k="'+k+'" accept="'+(k==='photos'?'image/*':'audio/*')+'" '+(k==='introSongs'||k==='heartSong'||k==='endSong'?'':'multiple ')+'hidden></label></div>').join('');
  }
  function fill(){$('#admOwner').value=cfg.owner;$('#admRepo').value=cfg.repo;$('#admBranch').value=cfg.branch||'main';$('#admToken').value=cfg.token||'';$('#admRem').checked=!!cfg.token}
  function readForm(){
    cfg.owner=$('#admOwner').value.trim();cfg.repo=$('#admRepo').value.trim();cfg.branch=$('#admBranch').value.trim()||'main';cfg.token=$('#admToken').value.trim();
    try{if($('#admRem').checked)localStorage.setItem(KEY,JSON.stringify(cfg));else localStorage.removeItem(KEY)}catch(e){}
  }
  async function api(method,url,body){
    const r=await fetch('https://api.github.com/repos/'+cfg.owner+'/'+cfg.repo+url,{method:method,headers:{'Authorization':'Bearer '+cfg.token,'Accept':'application/vnd.github+json'},body:body?JSON.stringify(body):undefined});
    let j={};try{j=await r.json()}catch(e){}
    if(!r.ok)throw new Error(r.status===401?'Token ভুল বা মেয়াদ শেষ (401)':(j.message||'সমস্যা')+' ('+r.status+')');
    return j}

  async function save(){
    readForm();
    if(!cfg.owner||!cfg.repo||!cfg.token){log('⚠️ Owner, Repository আর Token দিতে হবে');return}
    const btn=$('#admSave');btn.disabled=true;$('#admLog').textContent='';
    try{
      const files=[];Object.keys(st).forEach(k=>st[k].forEach(it=>{if(it.file)files.push(it)}));
      let n=0;
      for(const it of files){
        log('⬆️ আপলোড ('+(++n)+'/'+files.length+'): '+it.path);
        await api('PUT','/contents/'+it.path,{message:'Add '+it.path,content:await b64(it.file),branch:cfg.branch});
        delete it.file;
      }
      log('📝 data.json আপডেট হচ্ছে...');
      let sha;try{sha=(await api('GET','/contents/data.json?ref='+encodeURIComponent(cfg.branch))).sha}catch(e){}
      const data={};Object.keys(st).forEach(k=>{data[k]=st[k].map(i=>i.path)});
      const body={message:'Update songs and photos',content:btoa(unescape(encodeURIComponent(JSON.stringify(data,null,2)))),branch:cfg.branch};
      if(sha)body.sha=sha;
      await api('PUT','/contents/data.json',body);
      Object.keys(data).forEach(k=>{CONFIG[k]=data[k]});
      log('✅ সেভ হয়েছে! ১-৩ মিনিট পর সব ডিভাইসে নতুন গান-ছবি দেখা যাবে (Ctrl+F5 দিয়ে রিফ্রেশ করো)।');
    }catch(e){log('❌ '+e.message)}
    btn.disabled=false;render();
  }

  fab.onclick=()=>{if(!hasNew())load();fill();render();box.hidden=false};
  $('#admClose').onclick=()=>{box.hidden=true};
  $('#admSave').onclick=save;
  box.addEventListener('click',e=>{
    const b=e.target.closest&&e.target.closest('.adm-del');if(!b)return;
    st[b.dataset.k].splice(+b.dataset.i,1);render()});
  box.addEventListener('change',e=>{
    const inp=e.target;if(inp.type!=='file'||!inp.dataset.k)return;
    const k=inp.dataset.k;
    [...inp.files].forEach(f=>{
      if(f.size>25*1024*1024){log('⚠️ '+f.name+' অনেক বড় (২৫ MB-র বেশি), বাদ দেওয়া হলো');return}
      const it={path:(k==='photos'?'photos/':'songs/')+Date.now()+'-'+(cnt++)+'-'+safe(f.name),file:f};
      if(k==='introSongs'||k==='heartSong'||k==='endSong')st[k]=[it];else st[k].push(it);
    });
    render();
  });
  window.__admRefresh=function(){if(!hasNew()){load();if(!box.hidden)render()}};
  load();
})();

