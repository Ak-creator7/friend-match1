const INTERESTS = ['Art','Music','Reading','Gaming','Sport','Nature','Science','Cooking'];
const TRAITS = ['creative','curious','outgoing','loyal','patient','honest','supportive','open-minded','reliable','thoughtful','energetic','reserved','impatient','disorganized','insecure'];
const DEFAULT_PROFILE = {
  name:'Amina', age:16, country:'Uzbekistan', initials:'AM', color:'blue',
  traits:['creative','curious','outgoing','loyal','impatient','disorganized'],
  interests:['Art','Music','Reading'],
  strengths:'I am good at drawing and encouraging people. I can make a new classmate feel welcome.',
  weaknesses:'I am sometimes impatient, and I can be disorganized before a deadline.',
  enjoys:'I enjoy drawing and love meeting new people. I don’t mind helping a friend.',
  dislikes:'I dislike waiting without a plan and avoid arguing online.',
  ideal:[
    {quality:'patient',reason:'I sometimes rush, so a patient friend can help me slow down.'},
    {quality:'honest',reason:'I want to trust my friend and hear kind, truthful advice.'},
    {quality:'supportive',reason:'I feel more confident when someone encourages my ideas.'},
    {quality:'open-minded',reason:'I love trying unfamiliar activities and learning about other cultures.'},
    {quality:'reliable',reason:'I can be disorganized, so keeping our promises is important.'}
  ],
  avoid:[
    {quality:'dishonest',reason:'Hiding the truth would make it hard to trust each other.'},
    {quality:'insensitive',reason:'Ignoring someone’s feelings can hurt a friendship.'}
  ],
  activities:'We could enjoy making a small art magazine, swapping books and creating a shared playlist.',
  team:['','','','']
};
const PALS = [
  {id:'hana',name:'Hana',age:16,country:'Japan',flag:'JP',color:'pink',initials:'HN',role:'The thoughtful creative',traits:['patient','honest','supportive','creative','reliable','reserved'],interests:['Art','Reading','Music'],bio:'I enjoy sketching everyday moments and swapping stories about life in different countries.',strengths:'I am good at listening and keeping promises.',weaknesses:'I sometimes feel insecure when I speak to a large group.',enjoys:'I love drawing characters and don’t mind helping with a difficult project.',dislikes:'I dislike shouting and avoid judging people too quickly.',answers:[0,0,0,0,0],icebreaker:'If you could draw one place from your hometown, what would it be?'},
  {id:'luca',name:'Luca',age:17,country:'Italy',flag:'IT',color:'yellow',initials:'LC',role:'The curious explorer',traits:['outgoing','curious','honest','energetic','open-minded','impatient'],interests:['Sport','Nature','Cooking'],bio:'I love exploring new places, playing football and trying recipes that do not always work!',strengths:'I am good at including others and trying new things.',weaknesses:'I can be impatient when a plan takes too long.',enjoys:'I enjoy cooking with friends and prefer spending time outside.',dislikes:'I dislike staying indoors all weekend and avoid wasting food.',answers:[1,1,0,1,2],icebreaker:'What simple meal would you teach a friend to cook?'},
  {id:'sofia',name:'Sofia',age:16,country:'Brazil',flag:'BR',color:'green',initials:'SF',role:'The playlist maker',traits:['creative','supportive','honest','outgoing','open-minded','disorganized'],interests:['Music','Art','Cooking'],bio:'I enjoy finding a song for every mood. I would love to learn about your favourite festival.',strengths:'I am good at cheering people up and sharing ideas.',weaknesses:'I am sometimes disorganized and forget where I put things.',enjoys:'I love singing and enjoy making colourful birthday cards.',dislikes:'I dislike unkind jokes and avoid interrupting others.',answers:[0,0,0,0,1],icebreaker:'Which song would be the soundtrack to your week?'},
  {id:'timur',name:'Timur',age:16,country:'Uzbekistan',flag:'UZ',color:'blue',initials:'TM',role:'The puzzle solver',traits:['patient','reliable','thoughtful','honest','curious','reserved'],interests:['Gaming','Science','Reading'],bio:'I enjoy solving puzzles and reading science stories. Let’s learn something surprising together.',strengths:'I am good at explaining difficult ideas and staying calm.',weaknesses:'I can feel insecure about starting a conversation.',enjoys:'I enjoy playing chess and don’t mind explaining a tricky rule.',dislikes:'I dislike dishonest behaviour and avoid arguing about scores.',answers:[1,2,1,0,1],icebreaker:'What is one surprising fact you recently learned?'},
  {id:'minjun',name:'Minjun',age:17,country:'South Korea',flag:'KR',color:'purple',initials:'MJ',role:'The easygoing teammate',traits:['loyal','supportive','patient','open-minded','energetic','disorganized'],interests:['Gaming','Music','Sport'],bio:'I love cooperative games and learning dance routines. A good teammate makes everything more fun.',strengths:'I am good at teamwork and helping people feel included.',weaknesses:'I can be disorganized with my homework schedule.',enjoys:'I enjoy practising dance moves and love playing team games.',dislikes:'I dislike unfriendly comments and avoid blaming teammates.',answers:[0,2,0,1,1],icebreaker:'Which game would you choose for a relaxed afternoon?'},
  {id:'noah',name:'Noah',age:16,country:'United Kingdom',flag:'GB',color:'orange',initials:'NH',role:'The weekend storyteller',traits:['creative','thoughtful','reliable','honest','open-minded','reserved'],interests:['Reading','Nature','Art'],bio:'I enjoy writing short stories and noticing little things on long walks. Every place has a story.',strengths:'I am good at noticing details and giving thoughtful advice.',weaknesses:'I sometimes feel insecure about sharing unfinished work.',enjoys:'I love taking nature notes and prefer walking to rushing.',dislikes:'I dislike insensitive comments and avoid making quick judgements.',answers:[1,0,0,0,0],icebreaker:'If your town were a story, what would its first sentence be?'}
];
const QUESTIONS = [
  {category:'Personality',icon:'spark',title:'Your friend is nervous about showing a drawing at a school exhibition. How would you help?',options:['Practise together and encourage them to share it.','Suggest showing it to one trusted person first.','Tell them to hurry up and stop worrying.'],tip:'Think about the kind of support your character gives.'},
  {category:'Common interests',icon:'compass',title:'You can start one small after-school club together. Which would you choose?',options:['An art-and-story club with a shared playlist.','An outdoor club with sport and simple cooking.','A puzzle-and-games club with science challenges.'],tip:'Choose an activity your fictional character would enjoy.'},
  {category:'Trust',icon:'shield',title:'Your friend leaves a private notebook in your bag. What do you do?',options:['Keep it closed and return it as soon as possible.','Keep it safe and ask when they want it back.','Read one page because I am curious.'],tip:'Consider how your choice would affect trust.'},
  {category:'Communication',icon:'chat',title:'A short message you sent sounds colder than you intended. What is your next step?',options:['Explain kindly what I meant and ask how they feel.','Send a clearer message when I have more time.','Wait for them to guess what I meant.'],tip:'Good communication can prevent misunderstandings.'},
  {category:'Fun together',icon:'sun',title:'It is raining, and you have one free hour together with no money to spend. What sounds fun?',options:['Make a tiny comic about a funny school day.','Play a guessing game and swap favourite songs.','Invent a simple indoor movement challenge.'],tip:'Different ideas can work if both friends take turns choosing.'}
];
const ROLES = ['Character creator','Ideal-friend designer','Test designer','Presenter & score checker'];
const CATEGORIES = ['Personality','Common interests','Trust','Communication','Fun together'];
function calculateMatch(profile,pal,answers){
  if(!pal||answers.length!==5||answers.some(x=>!Number.isInteger(x)||x<0||x>2)) throw new Error('Answer all five questions first.');
  const common=profile.interests.filter(x=>pal.interests.includes(x));
  const qualities=profile.ideal.filter(x=>pal.traits.includes(x.quality.trim().toLowerCase())).map(x=>x.quality);
  const scores=[
    Math.min(10,4+qualities.length+(answers[0]===pal.answers[0]?2:answers[0]===2?0:1)),
    Math.min(10,2+common.length*2+(answers[1]===pal.answers[1]?2:0)),
    Math.min([10,9,2][answers[2]],[10,9,2][pal.answers[2]]),
    Math.min([10,7,3][answers[3]],[10,7,3][pal.answers[3]]),
    answers[4]===pal.answers[4]?10:7
  ];
  return {scores,total:scores.reduce((a,b)=>a+b,0),common,qualities};
}
