const userBoard = document.getElementById('userBoard');
const highlightedNumberElem = document.getElementById('highlightedNumber');

// Example user numbers 1-15
const userNumbers = Array.from({length:15}, (_,i)=>i+1);

// Create user board
userNumbers.forEach(n=>{
  const cell = document.createElement('div');
  cell.className='cell';
  cell.textContent=n;
  cell.dataset.num = n;
  userBoard.appendChild(cell);
});

// Listen for admin draw
const lastNumberRef = database.ref('lastDrawnNumber');
lastNumberRef.on('value', snapshot=>{
  const num = snapshot.val();
  if(!num) return;
  highlightedNumberElem.textContent = num;
  document.querySelectorAll('.cell').forEach(cell=>{
    if(parseInt(cell.dataset.num)===num){
      cell.classList.add('highlight');
    }
  });
});
