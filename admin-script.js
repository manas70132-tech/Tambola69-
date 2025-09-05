/* ================= Firebase Init (REPLACE WITH YOUR CONFIG) ================= */
const firebaseConfig = {apiKey: "AIzaSyAphHTM4faH7_FVXdnootp4NipZd3vtEck",
  authDomain: "tambola69-9dc8f.firebaseapp.com",
  projectId: "tambola69-9dc8f",
  storageBucket: "tambola69-9dc8f.firebasestorage.app",
  messagingSenderId: "413290158586",
  appId: "1:413290158586:web:70fff2d94b29206487ec43",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();
const auth = firebase.auth();

/* ================= PRIZE CLAIMS (Corrected Logic) ================= */
// ... (rest of the code)

async function claimPrize(prizeName) {
  if (!currentGrid) {
    alert("Buy a ticket first!");
    return;
  }

  const uid = auth.currentUser ? auth.currentUser.uid : localStorage.getItem(LS_UID) || ('guest_' + Math.random().toString(36).slice(2, 6));
  const name = localStorage.getItem(LS_NAME) || myName || 'Guest';
  const amount = PRIZE_AMOUNTS[prizeName] || 0;

  // Fetch history from the correct location
  const historyRefPath = activeRoom ? `rooms/${activeRoom}/draw/history` : 'history';
  const historySnap = await db.ref(historyRefPath).once('value');
  const historyArr = historySnap.val() || [];
  const H = Array.isArray(historyArr) ? historyArr : Object.values(historyArr || {});

  const tnums = ticketNumbersFlat(currentGrid);
  let valid = false;

  const getTickedNumbers = () => {
    const tickedNumbers = [];
    const cells = ticketEl.querySelectorAll('.ticket-cell.ticked');
    cells.forEach(cell => {
      const num = parseInt(cell.textContent);
      if (!isNaN(num)) tickedNumbers.push(num);
    });
    return tickedNumbers;
  };

  const tickedNumbers = getTickedNumbers();

  // Your validation logic needs to check if the ticked numbers are also in the drawn history
  const isMatch = (arr) => arr.every(n => H.includes(n));

  switch (prizeName) {
    case 'Early Five':
      if (tickedNumbers.length === 5 && isMatch(tickedNumbers)) {
        valid = true;
      }
      break;
    case 'Top Line':
      const topRow = currentGrid[0].filter(Boolean);
      if (topRow.every(n => H.includes(n))) valid = true;
      break;
    case 'Middle Line':
      const middleRow = currentGrid[1].filter(Boolean);
      if (middleRow.every(n => H.includes(n))) valid = true;
      break;
    case 'Bottom Line':
      const bottomRow = currentGrid[2].filter(Boolean);
      if (bottomRow.every(n => H.includes(n))) valid = true;
      break;
    case 'Ticket Corner':
      const corners = [currentGrid[0][0], currentGrid[0][8], currentGrid[2][0], currentGrid[2][8]].filter(Boolean);
      if (corners.length === 4 && corners.every(n => H.includes(n))) valid = true;
      break;
    case 'Full House':
      if (tnums.every(n => H.includes(n))) valid = true;
      break;
    case '2nd Full House':
      // This needs a backend check, but for now we'll treat it as another Full House.
      // A more robust solution would involve checking if a Full House has already been claimed.
      if (tnums.every(n => H.includes(n))) valid = true;
      break;
  }

  if (!valid) {
    markTicketBuggy(`Wrong claim: ${prizeName}`);
    alert('Invalid claim — ticket marked buggy. Please review your numbers.');
    await db.ref('claims').push({ userId: uid, userName: name, prize: prizeName, time: firebase.database.ServerValue.TIMESTAMP, valid: false });
    return;
  }
  // ... (rest of claim logic)
}
