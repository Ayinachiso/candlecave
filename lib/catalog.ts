export const products = [
 {id:'sunday',name:'Slow Sunday',notes:'Vanilla · Sandalwood · Soft musk',family:'Warm',price:18000,image:'/images/sunday.jpg',colour:'#e4d5b9',description:'The feeling of nowhere to be. Creamy vanilla settles into soft woods for the gentlest end to your day.'},
 {id:'golden',name:'Golden Hour',notes:'Bergamot · Amber · Cedar',family:'Fresh',price:19500,image:'/images/golden.jpg',colour:'#d9ab72',description:'Windows open. Light on the wall. Bright bergamot meets glowing amber and a quietly woody finish.'},
 {id:'midnight',name:'After Hours',notes:'Dark rose · Oud · Patchouli',family:'Woody',price:21000,image:'/images/midnight.jpg',colour:'#bba5a1',description:'For conversations that run late. Deep woods, a little rose, and a rich, lingering warmth.'}
];
export const money=(value:number)=>new Intl.NumberFormat('en-NG',{style:'currency',currency:'NGN',maximumFractionDigits:0}).format(value);
