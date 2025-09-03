const drawNumberBtn = document.getElementById('drawNumberBtn');
const lastNumberElem = document.getElementById('lastNumber');
let numbers = Array.from({length:90}, (_,i)=>i+1);

drawNumberBtn.addEventListener('click', ()=>{
  if(numbers.length===0){ alert("All numbers drawn"); return; }
  const idx = Math.floor(Math.random()*numbers.length);
  const num = numbers.splice(idx,1)[0];
  lastNumberElem.textContent = num;
  database.ref('lastDrawnNumber').set(num);
});
