/* ====================================================== */
/* 🔥🔥🔥 PASTE YOUR FIREBASE CONFIG HERE 🔥🔥🔥        */
/* ====================================================== */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAphHTM4faH7_FVXdnootp4NipZd3vtEck",
    authDomain: "tambola69-9dc8f.firebaseapp.com",
    databaseURL: "https://tambola69-9dc8f-default-rtdb.firebaseio.com",
    projectId: "tambola69-9dc8f",
    storageBucket: "tambola69-9dc8f.firebasestorage.app",
    messagingSenderId: "413290158586",
    appId: "1:413290158586:web:c4c6d6d224c96a7487ec43",
    measurementId: "G-TM68JPXH18"
    };
    
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase connection successful!");
} else {
    console.log("Firebase app already running.");
}

const db = firebase.database();
const storage = firebase.storage();
const storageRef = storage.ref();

/* ================= Elements ================= */
const boardEl = document.getElementById('board');
const tambolaBoardEl = document.getElementById('tambola-board');
const ticketEl = document.getElementById('ticket');
const ticketSerialEl = document.getElementById('ticketSerial');
const historyEl = document.getElementById('history');
const winnerListEl = document.getElementById('winnerList');
const userTicketContainer = document.getElementById('userTicketContainer');
const ticketShellEl = document.getElementById('ticketShell');
const gameOverMessageEl = document.getElementById('gameOverMessage');

const waitingTitle = document.getElementById('waitingTitle');
const waitingDesc = document.getElementById('waitingDesc');
const latestNumber = document.getElementById('latestNumber');
const waitingLiveText = document.getElementById('waitingLiveText');
const liveDot = document.getElementById('liveDot');

const buyTicketBtnTop = document.getElementById('buyTicketBtnTop');
const buyTicketBtnBottom = document.getElementById('buyTicketBtnBottom');
const menuToggle = document.getElementById('menuToggle');
const menuPanel = document.getElementById('menuPanel');
const viewProfileBtn = document.getElementById('viewProfileBtn');
const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const viewTicketsBtn = document.getElementById('viewTicketsBtn'); // Main button for viewing all tickets
const userGamesListEl = document.getElementById('userGamesList'); // The container for all booked tickets

const withdrawBtn = document.getElementById('withdrawBtn');
const withdrawModal = document.getElementById('withdrawModal');
const cancelWithdrawBtn = document.getElementById('cancelWithdrawBtn');
const submitWithdrawBtn = document.getElementById('submitWithdrawBtn');
const withdrawAmount = document.getElementById('withdrawAmount');
const withdrawDest = document.getElementById('withdrawDest');

const createRoomBtn = document.getElementById('createRoomBtn');
const joinRoomBtn = document.getElementById('joinRoomBtn');
const joinRoomIdInput = document.getElementById('joinRoomIdInput');
const roomBuyTicketBtn = document.getElementById('roomBuyTicketBtn');
const startRoomGameBtn = document.getElementById('startRoomGameBtn');
const roomInfoEl = document.getElementById('roomInfo');
const playersListEl = document.getElementById('playersList');
const roomStatusPill = document.getElementById('roomStatusPill');
const claimButtonsContainer = document.getElementById('claimButtonsContainer'); // New element to contain buttons

const watchLiveBtn = document.getElementById('watchLiveBtn');
const liveVideoBox = document.getElementById('liveVideoBox');
const liveFrame = document.getElementById('liveFrame');

const autoTickToggle = document.getElementById('autoTickToggle');
const autoClaimToggle = document.getElementById('autoClaimToggle');

const musicRef = db.ref("music");
const player = document.getElementById("liveMusic");
const musicBtn = document.getElementById("musicBtn");
const currentGameRef = db.ref('currentGame');
const nextGameRef = db.ref('nextGame');
const videoRef = db.ref('video');
const userGamesRef = db.ref('userTickets');
const claimsRef = db.ref('claims');
const winnersRef = db.ref('winners');
const gamePrizesRef = db.ref('gamePrizes'); // Central prize list

// Profile Modal elements
const profileModal = document.getElementById('profileModal');
const profileForm = document.getElementById('profileForm');
const profileView = document.getElementById('profileView');
const closeProfileBtn = document.getElementById('closeProfileBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const profileNameInput = document.getElementById('profileNameInput');
const profileContactInput = document.getElementById('profileContactInput');
const profileEmailInput = document.getElementById('profileEmailInput');
const profileImageUpload = document.getElementById('profileImageUpload');
const profileImagePreview = document.getElementById('profileImagePreview');
const viewNameEl = document.getElementById('viewName');
const viewPhoneEl = document.getElementById('viewPhone');
const viewEmailEl = document.getElementById('viewEmail');
const editProfileBtn = document.getElementById('editProfileBtn');
const closeViewProfileBtn = document.getElementById('closeViewProfileBtn');

// Winner Profile Modal elements
const winnerProfileModal = document.getElementById('winnerProfileModal');
const winnerProfileImage = document.getElementById('winnerProfileImage');
const winnerProfileName = document.getElementById('winnerProfileName');
const winnerGamesList = document.getElementById('winnerGamesList');

// Room Creation Modal elements
const createRoomModal = document.getElementById('createRoomModal');
const priceSelectOptions = document.getElementById('priceSelectOptions');
const cancelRoomCreationBtn = document.getElementById('cancelRoomCreationBtn');
const confirmRoomCreationBtn = document.getElementById('confirmRoomCreationBtn');
const friendsPartyAmount = document.getElementById('friendsPartyAmount');

let selectedPartyAmount = null;

// Attach click listeners to all claim buttons
document.querySelectorAll('.claim-button').forEach(button => {
    button.addEventListener('click', () => {
        const prizeName = button.getAttribute('data-prize');
        if (prizeName) {
            claimPrize(prizeName);
        }
    });
});

/* ================= Decorative random box colors ================= */
const boxes = [
    document.getElementById('claimBox'), document.getElementById('historyBox'), document.getElementById('winnersBox'),
    document.getElementById('nextGameBoxTop'), document.getElementById('nextGameBoxBottom'), document.getElementById('playFriendsBox')
];
boxes.forEach(el => {
    if (!el) return;
    const h = Math.floor(Math.random() * 360);
    const s = 60 + Math.random() * 20;
    const l = 45 + Math.random() * 15;
    el.style.background = `hsl(${h},${s}%,${l}%)`;
});

/* ================= Identity / Profile ================= */
let userId = null;
let myName = null;
let myContact = null;
let myEmail = null;
let myImageUrl = "https://via.placeholder.com/100";
let currentTicketSerial = null;
let currentTicketGameId = null; // The unique ID of the currently displayed ticket's game

const LS_UID = 'tambola_user_v2', LS_NAME = 'tambola_name_v2', LS_CONTACT = 'tambola_contact_v2', LS_EMAIL = 'tambola_email_v2', LS_IMAGE = 'tambola_image_v2';
const LS_AUTOTICK = 'tambola_auto_tick_v2', LS_AUTOCLAIM = 'tambola_auto_claim_v2';
const LS_TICKET_TICKS_PREFIX = 'tambola_ticket_ticks_v2_'; // New prefix including gameId

function setLocalProfile(id, name, phone, email, image) {
    if (id) localStorage.setItem(LS_UID, id);
    if (name) localStorage.setItem(LS_NAME, name);
    if (phone) localStorage.setItem(LS_CONTACT, phone);
    if (email) localStorage.setItem(LS_EMAIL, email);
    if (image) localStorage.setItem(LS_IMAGE, image);
}
function loadProfileFromLocal() {
    userId = localStorage.getItem(LS_UID);
    myName = localStorage.getItem(LS_NAME);
    myContact = localStorage.getItem(LS_CONTACT);
    myEmail = localStorage.getItem(LS_EMAIL);
    myImageUrl = localStorage.getItem(LS_IMAGE) || "https://via.placeholder.com/100";
    if (profileImagePreview) profileImagePreview.src = myImageUrl;
}
function ensureGuest() {
    if (!localStorage.getItem(LS_UID)) {
        const gen = 'u_' + Math.random().toString(36).slice(2, 9);
        setLocalProfile(gen, 'Guest', null, null, "https://via.placeholder.com/100");
    }
    loadProfileFromLocal();
}
autoTickToggle.checked = localStorage.getItem(LS_AUTOTICK) === '1';
autoClaimToggle.checked = localStorage.getItem(LS_AUTOCLAIM) === '1';
autoTickToggle.addEventListener('change', () => localStorage.setItem(LS_AUTOTICK, autoTickToggle.checked ? '1' : '0'));
autoClaimToggle.addEventListener('change', () => localStorage.setItem(LS_AUTOCLAIM, autoClaimToggle.checked ? '1' : '0'));

/* OTP Modal */
const loginModal = document.getElementById('loginModal');
const sendOtpBtn = document.getElementById('sendOtpBtn');
const verifyOtpBtn = document.getElementById('verifyOtpBtn');
const closeLoginBtn = document.getElementById('closeLoginBtn');
const detailsStep = document.getElementById('detailsStep');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const phoneInput = document.getElementById('phoneInput');
const otpInput = document.getElementById('otpInput');
const saveDetailsBtn = document.getElementById('saveDetailsBtn');
let recaptchaVerifier = null, confirmationResult = null;
function showLoginModal() { loginModal.style.display = 'flex'; ensureRecaptcha(); }
function hideLoginModal() { loginModal.style.display = 'none'; }
closeLoginBtn.addEventListener('click', hideLoginModal);

function applyAuthUser(u) {
    if (!u) return;
    userId = u.uid;
    myContact = u.phoneNumber || myContact;
    setLocalProfile(userId, myName, myContact, myEmail, myImageUrl);
    loadUserTicket();
}

/* ================= Board ================= */
for (let i = 1; i <= 90; i++) {
    const cell = document.createElement('div');
    cell.className = 'tambola-board-cell';
    cell.id = 'b_' + i;
    cell.textContent = i;
    tambolaBoardEl.appendChild(cell);
}
// Note: The 'board' element is no longer used in the HTML/CSS but kept in JS elements for legacy/future use.

function highlightBoard(n, hist) {
    document.querySelectorAll('.tambola-board-cell').forEach(cell => cell.classList.remove('drawn'));
    hist.forEach(num => {
        const hCell = document.getElementById('b_' + num);
        if (hCell) hCell.classList.add('drawn');
    });
    const latestCell = document.getElementById('b_' + n);
    if (latestCell) {
        latestCell.classList.add('drawn');
    }
}

/* ================= Ticket generator ================= */
function generateTicketMatrix() {
    const cols = [], chosen = [];
    for (let c = 0; c < 9; c++) {
        const min = c === 0 ? 1 : c * 10;
        const max = c === 8 ? 90 : c * 10 + 9;
        const pool = []; for (let n = min; n <= max; n++) pool.push(n);
        cols.push(pool);
    }
    while (chosen.length < 15) {
        const c = Math.floor(Math.random() * 9);
        if (chosen.filter(x => x.col === c).length >= 3) continue;
        const pool = cols[c];
        const val = pool[Math.floor(Math.random() * pool.length)];
        if (!chosen.some(x => x.num === val) && val) chosen.push({ col: c, num: val }); // Check for valid number
    }
    const byCol = Array.from({ length: 9 }, () => []);
    chosen.forEach(x => byCol[x.col].push(x.num));
    byCol.forEach(a => a.sort((a, b) => a - b));
    const grid = Array.from({ length: 3 }, () => Array(9).fill(null));
    const rowCounts = [0, 0, 0];
    for (let c = 0; c < 9; c++) {
        if (byCol[c].length === 3) { for (let r = 0; r < 3; r++) { grid[r][c] = byCol[c][r]; rowCounts[r]++; } }
    }
    for (let c = 0; c < 9; c++) {
        if (byCol[c].length === 2) {
            const rows = [0, 1, 2].sort((a, b) => rowCounts[a] - rowCounts[b]).slice(0, 2);
            grid[rows[0]][c] = byCol[c][0]; grid[rows[1]][c] = byCol[c][1];
            rowCounts[rows[0]]++; rowCounts[rows[1]]++;
        }
    }
    for (let c = 0; c < 9; c++) {
        if (byCol[c].length === 1) {
            const r = [0, 1, 2].sort((a, b) => rowCounts[a] - rowCounts[b])[0];
            grid[r][c] = byCol[c][0]; rowCounts[r]++;
        }
    }
    return grid;
}
let currentGrid = null;

/**
 * Renders the ticket, loading ticks from local storage for the given gameId.
 * @param {Array<Array<number|null>>} grid - The 3x9 ticket matrix.
 * @param {string} serialText - The serial number text to display.
 * @param {string} gameId - The ID of the game this ticket belongs to.
 */
function renderTicket(grid, serialText, gameId) {
    const g = grid || currentGrid;
    if (!g) return;
    userTicketContainer.style.display = 'block';
    ticketEl.innerHTML = '';
    if (serialText) ticketSerialEl.textContent = serialText;

    // Load ticks for the specific ticket/game from local storage
    const ticks = JSON.parse(localStorage.getItem(LS_TICKET_TICKS_PREFIX + gameId) || '[]');
    currentTicketGameId = gameId;

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 9; c++) {
            const val = g[r][c];
            const cell = document.createElement('div');
            if (!val) { cell.className = 'ticket-cell empty'; cell.innerHTML = '&nbsp;'; }
            else {
                cell.className = 'ticket-cell';
                cell.textContent = val;
                if (ticks.includes(val)) cell.classList.add('ticked');
            }
            // Attach click listener for manual ticking
            cell.addEventListener('click', () => {
                if (!val || !currentTicketGameId) return;
                // Use the *currently loaded* game ID
                const currentId = currentTicketGameId; 
                const ticksNow = JSON.parse(localStorage.getItem(LS_TICKET_TICKS_PREFIX + currentId) || '[]');
                
                if (cell.classList.contains('ticked')) {
                    cell.classList.remove('ticked');
                    const idx = ticksNow.indexOf(val);
                    if (idx > -1) ticksNow.splice(idx, 1);
                } else {
                    cell.classList.add('ticked'); ticksNow.push(val);
                }
                // Save state for the currently loaded ticket's game ID
                localStorage.setItem(LS_TICKET_TICKS_PREFIX + currentId, JSON.stringify(ticksNow));
            });
            ticketEl.appendChild(cell);
        }
    }
}
function markTicketBuggy(reason) {
    const cells = ticketEl.querySelectorAll('.ticket-cell.ticked');
    cells.forEach(c => c.classList.add('buggy'));
    const uid = localStorage.getItem(LS_UID) || userId || ('guest_' + Math.random().toString(36).slice(2, 6));
    db.ref('buggyClaims').push({ userId: uid, name: localStorage.getItem(LS_NAME) || myName || 'Guest', time: firebase.database.ServerValue.TIMESTAMP, reason });
    setTimeout(() => { cells.forEach(c => c.classList.remove('buggy')); }, 6000);
}
function ticketNumbersFlat(grid) {
    return grid.flat().filter(Boolean);
}

function saveTicketToDB(ticketData, gameId) {
    if (!userId) {
        alert("Please log in to book a ticket.");
        return;
    }
    const userTicketRef = userGamesRef.child(userId).child(gameId);
    return userTicketRef.set(ticketData).then(() => {
        console.log("Ticket saved to DB successfully.");
    }).catch(error => {
        console.error("Error saving ticket to DB:", error);
        alert("Failed to save ticket. Please try again.");
    });
}

function loadUserTicket() {
    if (!userId) return;
    userGamesRef.child(userId).once('value', snapshot => {
        const allTickets = snapshot.val();
        userGamesListEl.innerHTML = '';
        if (allTickets) {
            userGamesListEl.innerHTML = renderUserGamesList(allTickets);
        } else {
            userGamesListEl.innerHTML = 'No booked tickets yet.';
        }
    });
}

function renderUserGamesList(tickets) {
    let html = '';
    const ticketKeys = Object.keys(tickets).reverse(); // Show latest tickets first
    ticketKeys.forEach(gameId => {
        const ticketData = tickets[gameId];
        const statusText = ticketData.status ? ticketData.status.toUpperCase() : 'BOOKED';
        const statusColor = statusText.startsWith('CLAIMED') ? 'style="color:#00ff00;"' : 'style="color:#ffeb3b;"';
        html += `
            <div class="game-info-item">
                <div>
                    <div style="font-weight: bold;">${ticketData.gameName}</div>
                    <div>ID: ${ticketData.serial}</div>
                    <div ${statusColor}>Status: ${statusText}</div>
                </div>
                <div><button class="view-all-button" style="margin: 0; background:#388e3c; color:#fff;" onclick="showSpecificTicket('${gameId}', '${ticketData.serial}')">View Ticket</button></div>
            </div>
        `;
    });
    return html;
}

/**
 * Updates the claim buttons' visibility and state based on the current game context.
 * @param {Array<string>} claimedPrizes - List of prizes already claimed for the current game.
 * @param {boolean} isFriendsRoom - True if the current game is a Play with Friends room.
 */
async function updateClaimButtons(claimedPrizes, isFriendsRoom = false) {
    const prizeButtons = document.querySelectorAll('#claimButtonsContainer .claim-button');

    prizeButtons.forEach(button => {
        const prizeName = button.getAttribute('data-prize');
        const amount = PRIZE_AMOUNTS[prizeName] || '???';

        // 1. Hide non-Full House prizes for Friends Rooms
        if (isFriendsRoom) {
            if (prizeName !== 'Full House') {
                button.style.display = 'none';
            } else {
                button.style.display = 'inline-block';
                button.innerHTML = `Full House ₹${amount}`; // Ensure prize amount reflects room cost calculation (TBD by host)
                // In a friends room, the amount is calculated by the host/admin
            }
        } else {
            button.style.display = 'inline-block';
            button.innerHTML = `${prizeName} ₹${amount}`;
        }

        // 2. Set claimed state
        if (claimedPrizes.includes(prizeName)) {
            button.style.backgroundColor = 'gray';
            button.disabled = true;
            button.innerHTML = `<span class="claimed-button-text">CLAIMED</span> ₹${amount}`;
        } else {
            button.style.backgroundColor = 'green';
            button.disabled = false;
        }
    });
}

async function showSpecificTicket(gameId, serial) {
    if (!userId) {
        alert("Please log in to view tickets.");
        return;
    }

    const ticketDataSnap = await userGamesRef.child(userId).child(gameId).once('value');
    const ticketData = ticketDataSnap.val();

    if (ticketData) {
        currentGrid = ticketData.ticket;
        currentTicketSerial = serial;
        currentTicketGameId = gameId;

        // Determine if it's a Friends Room to adjust claim buttons
        const isFriendsRoom = gameId.startsWith('room_');

        // Get claimed prizes for this game
        let gameClaimedPrizes = [];
        if (!isFriendsRoom) {
            const gameClaimedPrizesSnap = await gamePrizesRef.child(gameId).once('value');
            gameClaimedPrizes = gameClaimedPrizesSnap.val() || [];
        } else {
            // For room games, check the players node for claims (simplified for this example)
            // A more robust solution would be a separate claims node for rooms
            const roomSnap = await db.ref(`rooms/${gameId}/players/${userId}`).once('value');
            const roomTicket = roomSnap.val();
            if (roomTicket && roomTicket.status && roomTicket.status.startsWith('claimed')) {
                // Parse the status string to get the claimed prize
                const prize = roomTicket.status.split(' - ')[1];
                if (prize) gameClaimedPrizes.push(prize);
            }
        }

        // Render the ticket with ticks from the selected game's local storage key
        renderTicket(currentGrid, `#${currentTicketSerial}`, currentTicketGameId);

        // Update UI based on claimed prizes and game type
        updateClaimButtons(gameClaimedPrizes, isFriendsRoom);

        // Change button text and hide the list view
        userGamesListEl.style.display = 'none';
        viewTicketsBtn.textContent = 'View my all ticket';
        viewTicketsBtn.onclick = () => {
            userGamesListEl.style.display = 'grid'; // Show list
            viewTicketsBtn.textContent = 'Hide All Booked Tickets';
            viewTicketsBtn.onclick = () => {
                userGamesListEl.style.display = 'none'; // Hide list
                viewTicketsBtn.textContent = 'View my all ticket';
                viewTicketsBtn.onclick = initialViewTicketsClickHandler;
            };
        };


    } else {
        alert("Ticket not found!");
    }
}
window.showSpecificTicket = showSpecificTicket; // Expose to global scope for HTML onclick

// Initial click handler setup
const initialViewTicketsClickHandler = () => {
    if (!userId) {
        alert('Please login to view your tickets.');
        return;
    }
    const listEl = userGamesListEl;
    if (listEl.style.display === 'none') {
        listEl.style.display = 'grid'; // Changed to grid for better display
        viewTicketsBtn.textContent = 'Hide All Booked Tickets';
        loadUserTicket();
        viewTicketsBtn.onclick = () => {
            listEl.style.display = 'none'; // Hide list
            viewTicketsBtn.textContent = 'View my all ticket';
            viewTicketsBtn.onclick = initialViewTicketsClickHandler;
        };
    } else {
        listEl.style.display = 'none';
        viewTicketsBtn.textContent = 'View my all ticket';
        viewTicketsBtn.onclick = initialViewTicketsClickHandler;
    }
};

if (viewTicketsBtn) {
    viewTicketsBtn.addEventListener('click', initialViewTicketsClickHandler);
}


[buyTicketBtnTop, buyTicketBtnBottom].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', async () => {
        if (!userId) {
            alert("Please create a profile first!");
            showProfileModal();
            return;
        }
        alert("Payment Placeholder: Payment Success! Your ticket is now booked.");

        // Use a unique gameId for global games
        const gameId = 'global-' + Date.now();

        const grid = generateTicketMatrix();
        const serial = Math.floor(Math.random() * 100000);
        const ticketData = { ticket: grid, serial, gameId, gameName: 'Mega Contest', status: 'booked' };

        await saveTicketToDB(ticketData, gameId);

        currentGrid = grid;
        currentTicketSerial = serial;
        currentTicketGameId = gameId;

        // Clear old ticks for the new ticket
        localStorage.removeItem(LS_TICKET_TICKS_PREFIX + gameId);
        // Show the newly purchased ticket
        renderTicket(currentGrid, `#${serial}`, gameId);

        // Reset claim buttons to active state for new ticket
        const gameClaimedPrizesSnap = await gamePrizesRef.child(gameId).once('value');
        const gameClaimedPrizes = gameClaimedPrizesSnap.val() || [];
        updateClaimButtons(gameClaimedPrizes);
    });
});


/* ================= Global presence/history ================= */
const presenceRef = db.ref('presence');
let myPresence = null;
let activeRoom = null;
let isHost = false;
let drawTimer = null;
const DRAW_INTERVAL_MS = 4000;
const ROOM_STATUS = { WAIT: 'waiting', START: 'started', END: 'ended' };

let globalCountdownInterval;
let nextCountdownInterval;

function updateCountdownDisplay(seconds, elementId) {
    const countdownEl = document.getElementById(elementId);
    if (!countdownEl) return;
    let remaining = seconds;

    const intervalId = setInterval(() => {
        remaining--;
        if (remaining >= 0) {
            const hours = Math.floor(remaining / 3600);
            const minutes = Math.floor((remaining % 3600) / 60);
            const secs = remaining % 60;
            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            countdownEl.textContent = formattedTime;
        } else {
            countdownEl.textContent = "00:00:00";
            clearInterval(intervalId);
        }
    }, 1000);
    return intervalId;
}

function handleGlobalGameData(data) {
    const status = data.status || 'idle';
    const liveNumber = data.liveNumber;
    const historyArr = data.history || [];
    const countdown = data.countdown;

    waitingTitle.textContent = `Game Status: ${status}`;
    waitingDesc.textContent = status === 'started' ? 'Global public draw is live' : 'No active game';
    latestNumber.textContent = liveNumber ? 'Number: ' + liveNumber : '—';
    historyEl.textContent = historyArr.length ? historyArr.join(', ') : 'None';
    highlightBoard(liveNumber, historyArr);

    if (status === 'ended' && currentTicketGameId && currentTicketGameId.startsWith('global-')) {
        showGameOverMessage();
    } else if (currentTicketGameId && currentTicketGameId.startsWith('global-')) {
        hideGameOverMessage();
    }
}

function showGameOverMessage() {
    if (gameOverMessageEl) gameOverMessageEl.style.display = 'block';
}

function hideGameOverMessage() {
    if (gameOverMessageEl) gameOverMessageEl.style.display = 'none';
}

function handleNextGameData(data) {
    const countdown = data.countdown;
    const ticketsLeft = data.ticketsLeft || 0;
    const prizePercentage = data.prizePercentage || 0;
    const totalSpots = data.totalSpots || 100;

    document.getElementById('ticketsLeftBottom').textContent = ticketsLeft;
    document.getElementById('prizePercentageBottom').textContent = `${prizePercentage}%`;
    document.getElementById('TotalSpotBottum').textContent = totalSpots;
    document.getElementById('ticketsLeftTop').textContent = ticketsLeft;
    document.getElementById('prizePercentageTop').textContent = `${prizePercentage}%`;
    document.getElementById('TotalSpotTop').textContent = totalSpots;

    if (countdown) {
        clearInterval(nextCountdownInterval);
        nextCountdownInterval = updateCountdownDisplay(countdown, 'nextCountdownBottom');
        updateCountdownDisplay(countdown, 'nextCountdownTop');
    }
}

currentGameRef.on('value', s => {
    const data = s.val() || {};
    if (!activeRoom) {
        handleGlobalGameData(data);
    }
});

nextGameRef.on('value', s => {
    const data = s.val() || {};
    handleNextGameData(data);
});

videoRef.on('value', snap => {
    const data = snap.val() || {};
    const liveBtn = document.getElementById('watchLiveBtn');
    if (data.url && liveBtn) {
        liveBtn.onclick = function () {
            liveFrame.src = data.url + '?autoplay=1&rel=0';
            liveVideoBox.style.display = 'block';
            liveBtn.style.display = 'none';
        };
    }
});

// New listener for central claimed prizes
gamePrizesRef.on('child_changed', snap => {
    const gameId = snap.key;
    if (gameId === currentTicketGameId && !gameId.startsWith('room_')) {
        const claimedPrizes = snap.val() || [];
        updateClaimButtons(claimedPrizes);
    }
});
gamePrizesRef.on('child_added', snap => {
    const gameId = snap.key;
    if (gameId === currentTicketGameId && !gameId.startsWith('room_')) {
        const claimedPrizes = snap.val() || [];
        updateClaimButtons(claimedPrizes);
    }
});

/* ================= Claims & Winners ================= */
const userHistoryRef = db.ref('userHistory');
const withdrawalHistoryRef = db.ref('withdrawalHistory');
const notificationRef = db.ref('notifications');

const PRIZE_AMOUNTS = {
    'Early Five': 500, 'Top Line': 500, 'Middle Line': 500, 'Bottom Line': 500,
    'Full House': 3000, 'Ticket Corner': 500, 'Ticket Corner Prize': 500, 'Each Line': 500, '2nd Full House': 1000
};

// Function to handle "View All Winners" button
async function showAllWinners() {
    const snap = await winnersRef.once('value');
    const data = snap.val() || {};

    const winnerList = await Promise.all(Object.entries(data).map(async ([k, w]) => {
        const userSnap = await db.ref('users/' + w.userId).once('value');
        const userData = userSnap.val() || {};
        const uname = userData.name || w.userName || 'Player';
        const imageUrl = userData.imageUrl || "https://via.placeholder.com/30";
        return `
                <div class="winner-row" onclick="showWinnerProfile('${w.userId}')">
                    <div class="winner-info">
                        <img src="${imageUrl}" class="winner-avatar" alt="Profile Image">
                        <div>${uname} - ${w.prize || 'Winner'}</div>
                    </div>
                    <div>₹${w.amount || 0}</div>
                </div>
            `;
    }));

    const modal = document.createElement('div');
    modal.className = 'modal-backdrop';
    modal.innerHTML = `<div class="modal" style="text-align:left;">
            <div class="row" style="justify-content:space-between; align-items:center;">
                <h3>All Winners List</h3>
                <button class="btn secondary" onclick="document.body.removeChild(this.closest('.modal-backdrop'));">Close</button>
            </div>
            <div style="max-height: 400px; overflow-y: auto; margin-top: 10px;">
                ${winnerList.length ? winnerList.join('') : '<p>No winners recorded yet.</p>'}
            </div>
        </div>`;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
}
window.showAllWinners = showAllWinners; // Expose to global scope for HTML onclick

// Refactored winner's list update to include images and click handlers
winnersRef.on('value', async (s) => {
    const data = s.val() || {};
    const arr = await Promise.all(Object.entries(data).slice(0, 5).map(async ([k, w]) => {
        const userSnap = await db.ref('users/' + w.userId).once('value');
        const userData = userSnap.val() || {};
        const uname = userData.name || w.userName || 'Player';
        const imageUrl = userData.imageUrl || "https://via.placeholder.com/30";
        const claimed = w.claimed ? '<span class="winner-x">✔️</span>' : '';

        return `
                <div class="winner-row" onclick="showWinnerProfile('${w.userId}')">
                    <div class="winner-info">
                        <img src="${imageUrl}" class="winner-avatar" alt="Profile Image">
                        <div>${claimed}${uname} - ${w.prize || 'Winner'}</div>
                    </div>
                    <div>₹${w.amount || 0}</div>
                </div>
            `;
    }));
    winnerListEl.innerHTML = arr.length ? arr.join('') : 'No winners yet...';
});

async function showWinnerProfile(winnerId) {
    const userSnap = await db.ref('users/' + winnerId).once('value');
    const userData = userSnap.val() || {};
    const gamesSnap = await userGamesRef.child(winnerId).once('value');
    const userGames = gamesSnap.val() || {};

    winnerProfileImage.src = userData.imageUrl || 'https://via.placeholder.com/100';
    winnerProfileName.textContent = userData.name || 'Player';

    let gamesHtml = '<div class="game-info-grid">';
    const gameKeys = Object.keys(userGames).reverse();

    if (gameKeys.length === 0) {
        gamesHtml += 'No games played yet.';
    } else {
        gameKeys.forEach(gameId => {
            const game = userGames[gameId];
            gamesHtml += `
                    <div class="game-info-item">
                        <div>
                            <div style="font-weight: bold;">${game.gameName}</div>
                            <div>Ticket ID: ${game.serial}</div>
                            <div>Status: ${game.status ? game.status.toUpperCase() : 'BOOKED'}</div>
                        </div>
                    </div>
                `;
        });
    }
    gamesHtml += '</div>';
    winnerGamesList.innerHTML = gamesHtml;

    winnerProfileModal.style.display = 'flex';
}
window.showWinnerProfile = showWinnerProfile;

/* ================= Wallet helpers ================= */
async function ensureUserRecord(uid) {
    const userRef = db.ref('users/' + uid);
    const snap = await userRef.once('value');
    if (!snap.exists()) {
        await userRef.set({ name: localStorage.getItem(LS_NAME) || myName || 'Guest', phone: localStorage.getItem(LS_CONTACT) || myContact || '', email: localStorage.getItem(LS_EMAIL) || myEmail || '', balance: 0, imageUrl: myImageUrl });
    }
}
async function getUserBalance(uid) {
    const snap = await db.ref('users/' + uid).once('value');
    return (snap.val() && snap.val().balance) || 0;
}
async function setUserBalance(uid, newBal) {
    await db.ref('users/' + uid).update({ balance: newBal });
    document.getElementById('myWinnings').textContent = newBal;
}

/* ================= Claim Prize (with validation + buggy handling) ================= */
async function claimPrize(prizeName) {
    if (!currentGrid || !currentTicketGameId) {
        alert("Please book and view a ticket first!");
        return;
    }

    const uid = localStorage.getItem(LS_UID) || userId || ('guest_' + Math.random().toString(36).slice(2, 6));
    const name = localStorage.getItem(LS_NAME) || myName || 'Guest';
    let amount = PRIZE_AMOUNTS[prizeName] || 0;
    const gameId = currentTicketGameId;
    const isFriendsRoom = gameId.startsWith('room_');

    // 1. Get the list of already claimed prizes
    let claimedPrizes = [];
    if (!isFriendsRoom) {
        const claimedPrizesSnap = await gamePrizesRef.child(gameId).once('value');
        claimedPrizes = claimedPrizesSnap.val() || [];
    } else {
        // Friends room prize logic (only Full House, fixed 90%)
        const roomRef = db.ref(`rooms/${gameId}`);
        const roomSnap = await roomRef.once('value');
        const roomData = roomSnap.val();
        if (roomData && roomData.prizeAmount) {
            amount = Math.floor(roomData.prizeAmount * 0.90);
        } else if (prizeName !== 'Full House') {
            alert('Only Full House is available in this room!');
            return;
        }
        // Check if Full House is already claimed in the room
        if (roomData && roomData.fullHouseClaimed) {
            claimedPrizes.push('Full House');
        }
    }


    if (claimedPrizes.includes(prizeName)) {
        alert("This prize has already been claimed!");
        return;
    }

    // 2. Get draw history
    const historyRef = activeRoom ? db.ref(`rooms/${activeRoom}/draw/history`) : currentGameRef.child('history');
    const historyArr = (await historyRef.once('value')).val() || [];
    const H = Array.isArray(historyArr) ? historyArr : Object.values(historyArr || {});

    // 3. Get all ticket numbers and the user's *ticked* numbers
    const tnums = ticketNumbersFlat(currentGrid);
    const myTickedNumbers = JSON.parse(localStorage.getItem(LS_TICKET_TICKS_PREFIX + currentTicketGameId) || '[]');

    // 4. Validation (Buggy Check - must tick only drawn numbers)
    const undrawnTickedNumbers = myTickedNumbers.filter(n => !H.includes(n));
    if (undrawnTickedNumbers.length > 0) {
        markTicketBuggy(`Ticked undrawn number(s): ${undrawnTickedNumbers.join(', ')}`);
        alert('Invalid claim — you have ticked number(s) not yet drawn. Ticket marked buggy. Please review!');
        await db.ref('claims').push({ userId: uid, userName: name, prize: prizeName, time: firebase.database.ServerValue.TIMESTAMP, valid: false, gameId });
        return;
    }

    // 5. Check Claim Condition
    let valid = false;
    const corners = [currentGrid[0][0], currentGrid[0][8], currentGrid[2][0], currentGrid[2][8]].filter(Boolean);

    switch (prizeName) {
        case 'Early Five':
            if (myTickedNumbers.length === 5) { valid = true; }
            break;
        case 'Top Line':
            const topRow = currentGrid[0].filter(Boolean);
            if (topRow.every(n => myTickedNumbers.includes(n))) { valid = true; }
            break;
        case 'Middle Line':
            const middleRow = currentGrid[1].filter(Boolean);
            if (middleRow.every(n => myTickedNumbers.includes(n))) { valid = true; }
            break;
        case 'Bottom Line':
            const bottomRow = currentGrid[2].filter(Boolean);
            if (bottomRow.every(n => myTickedNumbers.includes(n))) { valid = true; }
            break;
        case 'Ticket Corner':
            // Corner check: Must have 4 numbers and all 4 must be ticked
            if (corners.length === 4 && corners.every(n => myTickedNumbers.includes(n))) { valid = true; }
            break;
        case 'Full House':
            if (tnums.length === 15 && tnums.every(n => myTickedNumbers.includes(n))) { valid = true; }
            break;
        case '2nd Full House':
            if (tnums.length === 15 && tnums.every(n => myTickedNumbers.includes(n)) && claimedPrizes.includes('Full House')) { valid = true; }
            break;
    }


    if (!valid) {
        markTicketBuggy(`Wrong claim: ${prizeName}`);
        alert('Invalid claim for this prize type. Ticket marked buggy. Please review your numbers and the prize rules.');
        await db.ref('claims').push({ userId: uid, userName: name, prize: prizeName, time: firebase.database.ServerValue.TIMESTAMP, valid: false, gameId });
        return;
    }

    // 6. Finalize Claim (valid=true)

    if (!isFriendsRoom) {
        // Global Game: Update central claimed prizes list
        claimedPrizes.push(prizeName);
        await gamePrizesRef.child(gameId).set(claimedPrizes);
    } else if (prizeName === 'Full House') {
        // Friends Room: Mark Full House as claimed
        await db.ref(`rooms/${gameId}`).update({ fullHouseClaimed: true, winner: uid, winnerName: name, prizeAmount: amount });
    }

    // Update claim button UI
    updateClaimButtons(isFriendsRoom ? [prizeName] : claimedPrizes, isFriendsRoom);

    const claimRef = claimsRef.push();
    await claimRef.set({ userId: uid, userName: name, prize: prizeName, time: firebase.database.ServerValue.TIMESTAMP, valid: true, gameId, amount });
    const wref = winnersRef.push();
    await wref.set({ userId: uid, name, prize: prizeName, amount, claimed: true, time: firebase.database.ServerValue.TIMESTAMP, gameId });
    const userRef = db.ref('users/' + uid);
    const snap = await userRef.once('value');
    const existing = snap.val() || {};
    const newBal = (existing.balance || 0) + amount;
    await userRef.update({ balance: newBal, name: name, phone: localStorage.getItem(LS_CONTACT) || myContact || '', email: localStorage.getItem(LS_EMAIL) || myEmail || '' });
    document.getElementById('myWinnings').textContent = newBal;
    speakTambolaSentence(`Congratulations ${name}! You have claimed ${prizeName} for ₹${amount}.`);
    alert(`Claim submitted for ${prizeName}. ₹${amount} added to your balance.`);

    // Update user's personal ticket status
    const userTicketRef = db.ref(`userTickets/${uid}/${currentTicketGameId}`);
    await userTicketRef.update({ status: 'claimed - ' + prizeName });

    userHistoryRef.child(uid).push({
        type: 'claim',
        prize: prizeName,
        amount,
        gameId,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}

/**
 * Checks for valid, unclaimed prizes and attempts to claim them automatically.
 * It uses the DRAWN numbers for validation, then updates the local ticks before calling claimPrize.
 */
async function checkAndAttemptAutoClaim() {
    if (!autoClaimToggle.checked || !currentGrid || !currentTicketGameId || !userId) {
        return;
    }

    const gameId = currentTicketGameId;
    const isFriendsRoom = gameId.startsWith('room_');

    // Check if the ticket already has a Full House claim (only 2nd Full House is possible after that)
    const ticketDataSnap = await userGamesRef.child(userId).child(currentTicketGameId).once('value');
    const ticketInfo = ticketDataSnap.val();
    if (!ticketInfo) return; // Must have a ticket booked

    // 1. Get Draw History
    const historyRef = activeRoom ? db.ref(`rooms/${activeRoom}/draw/history`) : currentGameRef.child('history');
    const historyArr = (await historyRef.once('value')).val() || [];
    const H = Array.isArray(historyArr) ? historyArr : Object.values(historyArr || {});

    // 2. Get the list of unclaimed prizes
    let claimedPrizes = [];
    if (!isFriendsRoom) {
        const gameClaimedPrizesSnap = await gamePrizesRef.child(gameId).once('value');
        claimedPrizes = gameClaimedPrizesSnap.val() || [];
    } else {
        const roomSnap = await db.ref(`rooms/${gameId}`).once('value');
        const roomData = roomSnap.val();
        if (roomData && roomData.fullHouseClaimed) {
            claimedPrizes.push('Full House');
        }
    }

    const tnums = ticketNumbersFlat(currentGrid);
    const drawnTicketNumbers = tnums.filter(n => H.includes(n));

    // Define the full set of prizes to check
    const ALL_PRIZES = ['Early Five', 'Top Line', 'Middle Line', 'Bottom Line', 'Ticket Corner', 'Full House', '2nd Full House'];
    const prizesToCheck = isFriendsRoom ? ['Full House'] : ALL_PRIZES;

    const corners = [currentGrid[0][0], currentGrid[0][8], currentGrid[2][0], currentGrid[2][8]].filter(Boolean);

    const claimConditions = {
        'Early Five': () => drawnTicketNumbers.length >= 5,
        'Top Line': () => currentGrid[0].filter(Boolean).every(n => drawnTicketNumbers.includes(n)),
        'Middle Line': () => currentGrid[1].filter(Boolean).every(n => drawnTicketNumbers.includes(n)),
        'Bottom Line': () => currentGrid[2].filter(Boolean).every(n => drawnTicketNumbers.includes(n)),
        'Ticket Corner': () => corners.length === 4 && corners.every(n => drawnTicketNumbers.includes(n)),
        'Full House': () => tnums.length === 15 && tnums.every(n => drawnTicketNumbers.includes(n)),
        '2nd Full House': () => tnums.length === 15 && tnums.every(n => drawnTicketNumbers.includes(n)) && claimedPrizes.includes('Full House')
    };

    for (const prize of prizesToCheck) {
        if (!claimedPrizes.includes(prize)) {
            if (claimConditions[prize] && claimConditions[prize]()) {
                // AUTO-TICK: Update the local storage ticks to reflect the full drawn state
                localStorage.setItem(LS_TICKET_TICKS_PREFIX + currentTicketGameId, JSON.stringify(drawnTicketNumbers));
                renderTicket(currentGrid, `#${currentTicketSerial}`, currentTicketGameId); // Re-render to show all ticks

                // CLAIM: Attempt to claim the prize
                await claimPrize(prize);
                // After a successful claim, stop and wait for the next draw/loop, or break the loop for efficiency
                if (prize === 'Full House' || prize === '2nd Full House') break;
            }
        }
    }
}


/* ================= Menu/Profile (Hamburger) ================= */
(function setupHamburger() {
    const menuToggleEl = document.getElementById('menuToggle');
    const menuPanelEl = document.getElementById('menuPanel');
    menuToggleEl.addEventListener('click', () => menuPanelEl.classList.toggle('show'));
    document.addEventListener('click', (e) => {
        if (!menuPanelEl.contains(e.target) && e.target !== menuToggleEl && e.target.closest('.hamburger') !== menuToggleEl) {
            menuPanelEl.classList.remove('show');
        }
    });
})();

if (viewProfileBtn) {
    viewProfileBtn.addEventListener('click', async () => {
        await loadAndShowProfile();
    });
}

function showProfileModal() {
    profileModal.style.display = 'flex';
    profileForm.style.display = 'block';
    profileView.style.display = 'none';
}

async function loadAndShowProfile() {
    const uid = localStorage.getItem(LS_UID);
    if (!uid) {
        showProfileModal();
        return;
    }

    const snap = await db.ref('users/' + uid).once('value');
    const data = snap.val() || {};

    if (data.name) {
        profileModal.style.display = 'flex';
        profileForm.style.display = 'none';
        profileView.style.display = 'block';
        viewNameEl.textContent = data.name;
        viewPhoneEl.textContent = data.phone || '';
        viewEmailEl.textContent = data.email || '';
        profileImagePreview.src = data.imageUrl || "https://via.placeholder.com/100";
    } else {
        profileModal.style.display = 'flex';
        profileForm.style.display = 'block';
        profileView.style.display = 'none';
        profileNameInput.value = myName || '';
        profileContactInput.value = myContact || '';
        profileEmailInput.value = myEmail || '';
    }
}

if (closeProfileBtn) {
    closeProfileBtn.addEventListener('click', () => profileModal.style.display = 'none');
}
if (closeViewProfileBtn) {
    closeViewProfileBtn.addEventListener('click', () => profileModal.style.display = 'none');
}
if (editProfileBtn) {
    editProfileBtn.addEventListener('click', async () => {
        const uid = localStorage.getItem(LS_UID);
        const snap = await db.ref('users/' + uid).once('value');
        const data = snap.val() || {};
        profileNameInput.value = data.name || myName || '';
        profileContactInput.value = data.phone || myContact || '';
        profileEmailInput.value = data.email || myEmail || '';
        profileForm.style.display = 'block';
        profileView.style.display = 'none';
    });
}

profileImageUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            profileImagePreview.src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

if (saveProfileBtn) {
    saveProfileBtn.addEventListener('click', async () => {
        const name = profileNameInput.value.trim();
        const phone = profileContactInput.value.trim();
        const email = profileEmailInput.value.trim();
        const imageFile = profileImageUpload.files[0];

        if (!name || !phone || !email) {
            alert('Please fill in Name, Phone, and Email.');
            return;
        }

        let uid = localStorage.getItem(LS_UID) || ('u_' + Date.now());
        let uploadedImageUrl = myImageUrl;

        if (imageFile) {
            try {
                if (imageFile.size > 2 * 1024 * 1024) {
                    alert('Image size should be less than 2MB.');
                    return;
                }
                const profileRef = storageRef.child('profile_images/' + uid + '/' + imageFile.name);
                const uploadTask = profileRef.put(imageFile);
                const snapshot = await uploadTask;
                uploadedImageUrl = await snapshot.ref.getDownloadURL();
                alert('Image uploaded successfully!');

            } catch (error) {
                console.error('Image upload failed:', error);
                alert('Image upload failed. Saving profile without new image. Error: ' + error.message);
            }
        }

        await saveProfileData(uid, name, phone, email, uploadedImageUrl);
    });
}

async function saveProfileData(uid, name, phone, email, imageUrl) {
    try {
        if (!localStorage.getItem(LS_UID)) {
            localStorage.setItem(LS_UID, uid);
            userId = uid;
        }

        await db.ref('users/' + uid).update({
            name: name,
            phone: phone,
            email: email,
            imageUrl: imageUrl
        });

        setLocalProfile(uid, name, phone, email, imageUrl);
        myName = name;
        myContact = phone;
        myEmail = email;
        myImageUrl = imageUrl;
        userId = uid;

        alert('Profile saved successfully!');
        await loadAndShowProfile();

    } catch (error) {
        console.error('Error saving profile data:', error);
        alert('Failed to save profile data. Please try again. Check if your Firebase Security Rules allow writing to /users.');
    }
}


if (viewHistoryBtn) {
    viewHistoryBtn.addEventListener('click', async () => {
        if (!userId) {
            alert('Please create a profile to view history.');
            showProfileModal();
            return;
        }

        const gameHistorySnap = await userHistoryRef.child(userId).once('value');
        const withdrawalHistorySnap = await withdrawalHistoryRef.child(userId).once('value');
        const gameHistory = gameHistorySnap.val() || {};
        const withdrawalHistory = withdrawalHistorySnap.val() || {};

        let gameHtml = '<h4>Game History</h4><div style="max-height: 200px; overflow-y: auto;">';
        if (Object.keys(gameHistory).length === 0) {
            gameHtml += '<p>No game history found.</p>';
        } else {
            Object.values(gameHistory).reverse().forEach(h => {
                const time = new Date(h.timestamp).toLocaleString();
                gameHtml += `<p>• <b>${h.type.toUpperCase()}</b> of ${h.prize || 'Ticket'} for ₹${h.amount || 'N/A'} in game <i>${h.gameId}</i> at ${time}</p>`;
            });
        }
        gameHtml += '</div>';

        let withdrawalHtml = '<h4>Payment History</h4><div style="max-height: 150px; overflow-y: auto;">';
        if (Object.keys(withdrawalHistory).length === 0) {
            withdrawalHtml += '<p>No payment history found.</p>';
        } else {
            Object.values(withdrawalHistory).reverse().forEach(h => {
                const time = new Date(h.timestamp).toLocaleString();
                withdrawalHtml += `<p>• <b>${h.type.toUpperCase()}</b> of ₹${h.amount} to ${h.dest} on ${time} (<span style="color: ${h.status === 'pending' ? 'orange' : 'green'};">${h.status.toUpperCase()}</span>)</p>`;
            });
        }
        withdrawalHtml += '</div>';

        const modal = document.createElement('div');
        modal.className = 'modal-backdrop';
        modal.innerHTML = `<div class="modal" style="text-align:left; max-width: 500px;">
            <div class="row" style="justify-content:space-between; align-items:center;">
                <h3>History</h3>
                <button class="btn secondary" onclick="document.body.removeChild(this.closest('.modal-backdrop'));">Close</button>
            </div>
            ${gameHtml}
            ${withdrawalHtml}
        </div>`;
        document.body.appendChild(modal);
        modal.style.display = 'flex';
    });
}

function showStaticPage(page) {
    const modal = document.getElementById('staticPageModal');
    const titleEl = document.getElementById('staticPageTitle');
    const contentEl = document.getElementById('staticPageContent');
    let title = '';
    let content = '';

    switch (page) {
        case 'about':
            title = 'About Us';
            content = `<p>Welcome to Tambola 69, your ultimate destination for playing Tambola/Housie online with friends and family! We are dedicated to providing a fun, engaging, and fair gaming experience for everyone.</p><p>Our platform allows you to join public games or create your own private rooms, ensuring a seamless and interactive experience. With features like live number announcements and automatic ticket marking, we bring the classic game of Tambola to your fingertips.</p><p>Happy playing! 🎉</p>`;
            break;
        case 'terms':
            title = 'Terms and Conditions';
            content = `<p>Welcome to Tambola 69. These terms and conditions outline the rules and regulations for the use of Tambola 69's Website and App.</p><p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Tambola 69 if you do not agree to all of the terms and conditions stated on this page.</p><p><b>License:</b> Unless otherwise stated, Tambola 69 and/or its licensors own the intellectual property rights for all material on Tambola 69. All intellectual property rights are reserved. You may access this from Tambola 69 for your own personal use subjected to restrictions set in these terms and conditions.</p><p><b>User Obligations:</b> You must be of legal age to play this game in your region. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.</p><p><b>Disputes:</b> Any dispute related to these terms and conditions will be governed by the laws of India. All disputes will be resolved in the courts of [Your City].</p><p>We reserve the right to amend these terms at any time. Your continued use of the app signifies your acceptance of any new terms.</p>`;
            break;
        case 'privacy':
            title = 'Privacy Policy';
            content = `<p>Your privacy is important to us. It is Tambola 69's policy to respect your privacy regarding any information we may collect from you.</p><p><b>Information We Collect:</b> We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p><p><b>How We Use Information:</b> The information we collect is used to process your game tickets, manage your winnings, and communicate with you about your account. We do not share your personally identifying information publicly or with third-parties, except when required by law.</p><p><b>Data Security:</b> We take reasonable precautions to protect the data you provide to us. However, please be aware that no method of electronic storage is 100% secure.</p><p><b>Changes to This Policy:</b> We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>`;
            break;
        default:
            title = 'Page Not Found';
            content = '<p>The requested page could not be found.</p>';
            break;
    }

    titleEl.textContent = title;
    contentEl.innerHTML = content;
    modal.style.display = 'flex';
}

window.showStaticPage = showStaticPage;


/* ================= Presence ================= */
function attachPresence() {
    try {
        if (myPresence) { myPresence.remove(); myPresence = null; }
    } catch (e) { }
    const id = localStorage.getItem(LS_UID) || userId || ('guest_' + Math.random().toString(36).slice(2, 8));
    myPresence = presenceRef.push({ id, time: firebase.database.ServerValue.TIMESTAMP });
    myPresence.onDisconnect().remove();
}
presenceRef.on('value', snap => {
    const n = snap.numChildren() || 0;
    if (!activeRoom) {
        waitingLiveText.textContent = 'Live Users: ' + n;
        liveDot.style.background = (n > 0) ? '#00e676' : '#bdbdbd';
    }
});

/* ================= Auth lifecycle & OTP ================= */
firebase.auth().onAuthStateChanged(async (u) => {
    if (u) {
        applyAuthUser(u); attachPresence();
        try {
            const snap = await db.ref('users/' + u.uid).once('value');
            const data = snap.val();
            if (data) {
                myName = data.name || myName; myEmail = data.email || myEmail; myContact = u.phoneNumber || data.phone || myContact;
                myImageUrl = data.imageUrl || myImageUrl;
                setLocalProfile(u.uid, myName, myContact, myEmail, myImageUrl);
            }
            getUserBalance(u.uid).then(bal => document.getElementById('myWinnings').textContent = bal);
        } catch (e) { }
    } else {
        ensureGuest(); attachPresence();
    }
});

/* ================= Share / Withdraw UI ================= */
if (document.getElementById('withdrawBtn')) {
    withdrawBtn.addEventListener('click', () => {
        if (!(localStorage.getItem(LS_UID) || firebase.auth().currentUser)) { showLoginModal(); return; }
        withdrawModal.style.display = 'flex';
    });
    cancelWithdrawBtn.addEventListener('click', () => withdrawModal.style.display = 'none');
    submitWithdrawBtn.addEventListener('click', async () => {
        const amt = Number(withdrawAmount.value || 0);
        const dest = (withdrawDest.value || '').trim();
        if (!amt || !dest) return alert('Enter amount and UPI/Phone');
        const uid = localStorage.getItem(LS_UID) || userId || 'guest';
        const name = localStorage.getItem(LS_NAME) || myName || 'Guest';

        await ensureUserRecord(uid);
        const bal = await getUserBalance(uid);
        if (bal < amt) return alert('Insufficient balance for withdrawal.');
        const newBal = bal - amt;
        await setUserBalance(uid, newBal);

        const wref = db.ref('withdrawals').push();
        await wref.set({
            userId: uid, name, amount: amt, dest, time: firebase.database.ServerValue.TIMESTAMP, status: 'pending'
        });
        withdrawModal.style.display = 'none';
        document.getElementById('myWinnings').textContent = newBal;
        alert('Withdrawal request recorded. Admin will be notified.');

        withdrawalHistoryRef.child(uid).push({
            type: 'withdrawal',
            amount: amt,
            dest,
            status: 'pending',
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });
    });
}

/* ========================== ROOM SYSTEM ========================== */
let roomListeners = [];

function uiSetRoomStatus(text) { roomStatusPill.textContent = text; }
function refreshPlayers(players) {
    const arr = Object.entries(players || {}).map(([uid, p]) => `${p.name || 'Player'} ${p.paid ? '✅' : '❌'}`);
    playersListEl.innerHTML = arr.length ? ('Players: ' + arr.join(' | ')) : 'Players: (none)';
    
    // Check if current user is the host to enable/disable start button
    if(isHost) {
        const uids = Object.keys(players);
        const allPaid = uids.length > 0 && uids.every(uid => players[uid].paid === true);
        startRoomGameBtn.disabled = !allPaid;
    }
}

async function createRoom(partyAmount) {
    if (!userId) { alert("Please create a profile first!"); showProfileModal(); return; }
    isHost = true;
    activeRoom = 'room_' + Math.random().toString(36).slice(2, 8);
    await db.ref('rooms/' + activeRoom).set({
        host: userId,
        hostName: myName,
        status: ROOM_STATUS.WAIT,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        partyAmount: partyAmount, // New: Price Selection
        prizePercentage: 90 // New: Fixed Prize Percentage
    });
    await db.ref(`rooms/${activeRoom}/players/${userId}`).set({ name: myName, paid: false, price: partyAmount });
    roomInfoEl.textContent = 'Room Created: ' + activeRoom + ' | Share this ID with friends.';
    friendsPartyAmount.textContent = `Party Amount: ₹${partyAmount}`;
    document.getElementById('friendsPrizePercentage').textContent = `Prize %: 90 (Full House Only)`;
    joinRoomIdInput.style.display = 'none';
    roomBuyTicketBtn.style.display = 'block';
    roomBuyTicketBtn.textContent = `Buy Ticket ₹ ${partyAmount} 💳`;
    startRoomGameBtn.style.display = 'block';
    startRoomGameBtn.disabled = true;
    uiSetRoomStatus('Waiting');
    attachRoomListeners(activeRoom);
    createRoomModal.style.display = 'none';
}

async function joinRoomById(rid) {
    if (!rid) return alert('Enter Room ID');
    if (!userId) { alert("Please create a profile first!"); showProfileModal(); return; }
    const snap = await db.ref('rooms/' + rid).once('value');
    if (!snap.exists()) return alert('Room not found');
    const data = snap.val();
    if (data.status !== ROOM_STATUS.WAIT) return alert('Room already started/closed');
    
    activeRoom = rid;
    isHost = (data.host === userId);

    await db.ref(`rooms/${rid}/players/${userId}`).update({ name: myName, paid: false, price: data.partyAmount || 0 });
    roomInfoEl.textContent = `Joined Room: ${rid} | Host: ${data.hostName || data.host} `;
    friendsPartyAmount.textContent = `Party Amount: ₹${data.partyAmount || 0}`;
    document.getElementById('friendsPrizePercentage').textContent = `Prize %: ${data.prizePercentage || 90} (Full House Only)`;
    joinRoomIdInput.style.display = 'none';
    roomBuyTicketBtn.style.display = 'inline-block';
    roomBuyTicketBtn.textContent = `Buy Ticket ₹ ${data.partyAmount || 100} 💳`;
    if (isHost) {
        startRoomGameBtn.style.display = 'inline-block';
        startRoomGameBtn.disabled = true;
    } else {
        startRoomGameBtn.style.display = 'none';
    }
    uiSetRoomStatus('Waiting');
    attachRoomListeners(rid);
}

function attachRoomListeners(rid) {
    roomListeners.forEach(ref => ref.off());
    roomListeners = [];
    const roomRef = db.ref(`rooms/${rid}`);
    const playersRef = db.ref(`rooms/${rid}/players`);
    const statusRef = db.ref(`rooms/${rid}/status`);
    const drawRef = db.ref(`rooms/${rid}/draw`);

    playersRef.on('value', s => {
        const players = s.val() || {};
        refreshPlayers(players);
        const amInRoom = !!players[userId];
        const partyAmount = (players[userId] && players[userId].price) || 100;
        
        if (amInRoom) {
            roomBuyTicketBtn.style.display = players[userId].paid ? 'none' : 'inline-block';
            roomBuyTicketBtn.textContent = `Buy Ticket ₹ ${partyAmount} 💳`;
            if (isHost) {
                startRoomGameBtn.style.display = 'inline-block';
            }
        } else {
            roomBuyTicketBtn.style.display = 'none';
            startRoomGameBtn.style.display = 'none';
        }
        
        if (players[userId] && players[userId].ticket) {
            currentGrid = players[userId].ticket;
            currentTicketGameId = rid;
            renderTicket(currentGrid, '#ROOM-' + (players[userId].serial || 'ROOM'), rid);
            updateClaimButtons(roomRef.fullHouseClaimed ? ['Full House'] : [], true);
        }
    });
    roomListeners.push(playersRef);

    statusRef.on('value', s => {
        const st = s.val();
        if (st === ROOM_STATUS.WAIT) uiSetRoomStatus('Waiting');
        else if (st === ROOM_STATUS.START) {
            uiSetRoomStatus('Started');
            hideGameOverMessage();
        }
        else if (st === ROOM_STATUS.END) {
            uiSetRoomStatus('Ended');
            showGameOverMessage();
        }
    });
    roomListeners.push(statusRef);

    drawRef.on('value', s => {
        const d = s.val() || {};
        const cur = d.current;
        const hist = d.history || [];
        if (cur) { latestNumber.textContent = 'Number: ' + cur; highlightBoard(cur, hist); }
        historyEl.textContent = hist.length ? hist.join(', ') : 'None';
        waitingTitle.textContent = (d && d.startedAt) ? 'Room Draw Live' : 'Waiting for Draw...';
        waitingDesc.textContent = (d && d.startedAt) ? `Room ${rid} playing` : 'Room waiting';
    });
    roomListeners.push(drawRef);
}

async function roomBuyTicket() {
    if (!activeRoom) return alert('Create or Join a room first');
    alert('Payment Successful!');
    const grid = generateTicketMatrix();
    const serial = Math.floor(Math.random() * 100000);
    const uid = userId;
    
    // Get the price to store it with the ticket
    const playerSnap = await db.ref(`rooms/${activeRoom}/players/${uid}`).once('value');
    const playerPrice = playerSnap.val()?.price || 100;

    await db.ref(`rooms/${activeRoom}/players/${uid}`).update({ paid: true, ticket: grid, serial });
    currentGrid = grid;
    currentTicketGameId = activeRoom;
    localStorage.removeItem(LS_TICKET_TICKS_PREFIX + currentTicketGameId);
    renderTicket(currentGrid, '#ROOM-' + serial, activeRoom);
    // Also save a record in userTickets (for viewing history/all tickets)
    saveTicketToDB({ ticket: grid, serial, gameId: activeRoom, gameName: `Room ${activeRoom} (Price: ${playerPrice})` }, activeRoom);
}

async function startRoomGame() {
    if (!isHost) return alert('Only host can start.');
    const plySnap = await db.ref(`rooms/${activeRoom}/players`).once('value');
    const players = plySnap.val() || {};
    const uids = Object.keys(players);
    const allPaid = uids.length > 0 && uids.every(uid => players[uid].paid === true);
    if (!allPaid) return alert('All players must buy ticket first.');
    const nums = shuffle(Array.from({ length: 90 }, (_, i) => i + 1));
    await db.ref(`rooms/${activeRoom}`).update({ status: ROOM_STATUS.START, fullHouseClaimed: false });
    await db.ref(`rooms/${activeRoom}/draw`).set({ current: null, history: [], startedAt: Date.now(), intervalMs: DRAW_INTERVAL_MS, host: userId });
    let idx = 0;
    clearInterval(drawTimer);
    drawTimer = setInterval(async () => {
        const roomRef = db.ref(`rooms/${activeRoom}`);
        const roomSnap = await roomRef.once('value');
        const roomData = roomSnap.val();
        
        // Stop if game ended or Full House claimed
        if (idx >= nums.length || roomData.fullHouseClaimed) { 
            clearInterval(drawTimer);
            await roomRef.update({ status: ROOM_STATUS.END });
            return;
        }
        const n = nums[idx++];
        const ref = db.ref(`rooms/${activeRoom}/draw`);
        const snap = await ref.once('value');
        const d = snap.val() || { history: [] };
        const hist = d.history || [];
        hist.push(n);
        await ref.update({ current: n, history: hist });
        applyAutoTickForNumber(n);
        await checkAndAttemptAutoClaim(); 
    }, DRAW_INTERVAL_MS);
}

function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]] } return arr; }

function applyAutoTickForNumber(n) {
    const doAuto = autoTickToggle.checked;
    if (!doAuto || !currentGrid || !currentTicketGameId) return;
    
    // Get the ticks for the *currently displayed* ticket's game
    const ticksNow = JSON.parse(localStorage.getItem(LS_TICKET_TICKS_PREFIX + currentTicketGameId) || '[]');
    const cells = ticketEl.querySelectorAll('.ticket-cell');
    
    let wasTicked = false;

    cells.forEach(c => {
        const val = Number(c.textContent);
        if (!isNaN(val) && val === n) {
            if (!c.classList.contains('ticked')) {
                c.classList.add('ticked');
                wasTicked = true;
            }
            if (!ticksNow.includes(n)) { ticksNow.push(n); }
        }
    });

    if (wasTicked) {
        // Save the updated ticks back to local storage
        localStorage.setItem(LS_TICKET_TICKS_PREFIX + currentTicketGameId, JSON.stringify(ticksNow));
    }
}

if (createRoomBtn) createRoomBtn.addEventListener('click', () => {
    if (!userId) { alert("Please create a profile first!"); showProfileModal(); return; }
    createRoomModal.style.display = 'flex';
    selectedPartyAmount = null;
    confirmRoomCreationBtn.disabled = true;
    document.querySelectorAll('.price-option').forEach(btn => btn.classList.remove('selected'));
});

// Room Creation Modal Logic
priceSelectOptions.querySelectorAll('.price-option').forEach(btn => {
    btn.addEventListener('click', function () {
        selectedPartyAmount = Number(this.getAttribute('data-price'));
        priceSelectOptions.querySelectorAll('.price-option').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        confirmRoomCreationBtn.disabled = false;
    });
});
cancelRoomCreationBtn.addEventListener('click', () => createRoomModal.style.display = 'none');
confirmRoomCreationBtn.addEventListener('click', () => {
    if (selectedPartyAmount) {
        createRoom(selectedPartyAmount);
    } else {
        alert('Please select a party amount.');
    }
});


if (joinRoomBtn) joinRoomBtn.addEventListener('click', () => {
    joinRoomIdInput.style.display = 'block';
    joinRoomBtn.textContent = 'Join Room';
    joinRoomBtn.onclick = () => joinRoomById(joinRoomIdInput.value.trim());
});
if (roomBuyTicketBtn) roomBuyTicketBtn.addEventListener('click', roomBuyTicket);
if (startRoomGameBtn) startRoomGameBtn.addEventListener('click', startRoomGame);

/* ================= Initial setup ================= */
ensureGuest();
attachPresence();
uiSetRoomStatus('No Room');
userTicketContainer.style.display = 'none';
latestNumber.textContent = '—';
historyEl.textContent = 'None';

/* cleanup listeners on unload */
window.addEventListener('beforeunload', () => {
    try {
        if (myPresence) myPresence.remove();
        if (activeRoom) db.ref(`rooms/${activeRoom}/players/${(localStorage.getItem(LS_UID) || 'guest')}`).remove();
    } catch (e) { }
});

/* ============ AI VOICE ANNOUNCER ============ */
(function () {
    let VOICE_ENABLED = true;
    let lastSpoken = null;
    let _primed = false;

    function primeVoice() {
        if (_primed) return;
        try {
            const dummy = new SpeechSynthesisUtterance('');
            window.speechSynthesis.speak(dummy);
            _primed = true;
        } catch (e) { }
    }
    window.addEventListener('click', primeVoice, { once: true, passive: true });
    window.addEventListener('touchstart', primeVoice, { once: true, passive: true });

    const tambolaDialog = {
        1: "single number, one, top of the house", 3: "single number, three, सब गोलमाल है", 4: "single number, four, मुर्गी चोर",
        5: "single number, five, ये नंबर मुझे दे दे ठाकुर", 7: "single number seven, lucky for all, सात फेरे", 10: "Badmash",
        19: "one nine, nineteen, Last of the teen", 21: "two one, twenty one, marriageable age", 24: "दिल का चोर, two and four, twenty four",
        25: "silver jubilee", 26: "republic day", 28: "pull the gate", 29: "rise and shine", 36: "flirty wife", 41: "Alli Baba, चालीस चोर",
        46: "choke chhke", 47: "four and seven, forty seven, Aajadi", 48: "door and gate, forty eight", 50: "Golden Jubilee",
        53: "smile is free, five and three, fifty three", 65: "लाखों में एक है मेरी wife", 66: "all the sixes, six and six, all the six",
        69: "six and nine, sixty nine, Maje Maro yaro", 74: "open the door", 75: "shuru karo deive", 79: "old wine", 82: "down with flu",
        85: "I still live", 90: "last number of the house"
    };

    window.speakTambolaNumber = function (number) {
        if (!VOICE_ENABLED || !window.speechSynthesis) return;
        if (lastSpoken === number) return; // Prevent double-speak on rapid change
        lastSpoken = number;
        const msg = new SpeechSynthesisUtterance();
        msg.text = tambolaDialog[number] || `Number ${number}`;
        msg.lang = 'en-IN';
        msg.rate = 1 + Math.random() * 0.2;
        msg.pitch = 1 + Math.random() * 0.3;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
    };

    window.speakTambolaSentence = function (sentence) {
        if (!VOICE_ENABLED || !window.speechSynthesis) return;
        const msg = new SpeechSynthesisUtterance(sentence);
        msg.lang = 'en-IN';
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
    };

    const target = document.getElementById('latestNumber');
    if (target) {
        const obs = new MutationObserver(async () => {
            const text = target.textContent || '';
            const match = text.match(/(\d+)/);
            if (!match) return;
            const num = parseInt(match[1], 10);
            if (!num || lastSpoken === num) return; // Prevent double speak on the same number
            
            speakTambolaNumber(num);
            applyAutoTickForNumber(num);
            await checkAndAttemptAutoClaim(); 
        });
        obs.observe(target, { childList: true, characterData: true, subtree: true });
    }
})();

/* Watch Live handler (keeps simple embed) */
(function () {
    watchLiveBtn.addEventListener('click', function () {
        const VIDEO_ID = "YOUR_YOUTUBE_LIVE_VIDEO_ID"; // ⚠️ REPLACE with your live video ID
        if (!VIDEO_ID || VIDEO_ID === "YOUR_YOUTUBE_LIVE_VIDEO_ID") {
            alert("Please set your YouTube Live Video ID in the code (replace YOUR_YOUTUBE_LIVE_VIDEO_ID).");
            return;
        }
        liveFrame.src = "https://www.youtube.com/embed/" + VIDEO_ID + "?autoplay=1&rel=0";
        liveVideoBox.style.display = "block";
        watchLiveBtn.style.display = "none";
    });
})();

/* 🎵 Music Control */
let isUserMuted = false;

musicRef.on("value", snap => {
    const data = snap.val() || {};
    if (!data.url) return;
    if (player.src !== data.url) player.src = data.url;

    if (data.isPlaying && !isUserMuted) {
        player.play().catch(e => {
            console.log("Autoplay failed, user interaction required.", e);
        });
        musicBtn.style.opacity = "1";
    } else {
        player.pause();
        if (isUserMuted) musicBtn.style.opacity = "0.5";
        else musicBtn.style.opacity = "1";
    }
});

musicBtn.addEventListener("click", () => {
    if (player.paused) {
        isUserMuted = false;
        if (player.src) player.play().catch(() => { });
        musicBtn.style.opacity = "1";
    } else {
        isUserMuted = true;
        player.pause();
        musicBtn.style.opacity = "0.5";
    }
});


/* ============================================= */
/* 🔥🔥 ANIMATION AND LOGIN FLOW LOGIC 🔥🔥 */
/* ============================================= */
const animationContainer = document.getElementById('animationContainer');
const mainGameContainer = document.getElementById('mainGameContainer');
const animationTicket = document.getElementById('animationTicket');
const animationLoginBox = document.getElementById('animationLoginBox');
const spinnerNumber = document.querySelector('.spinner-number');
const finalNumber = document.querySelector('.final-number');
const spinnerContainer = document.querySelector('.spinner-container');

function showGameUI() {
    gsap.to(animationContainer, {
        autoAlpha: 0, duration: 1, onComplete: () => {
            animationContainer.style.display = 'none';
            mainGameContainer.style.display = 'block';
            gsap.fromTo(mainGameContainer, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
        }
    });
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        animationContainer.style.display = 'none';
        mainGameContainer.style.display = 'block';
    } else if (animationContainer.style.display !== 'none') {
        startAnimationSequence();
    }
});

function startAnimationSequence() {
    gsap.set(animationTicket, { scale: 0, opacity: 0 });
    gsap.set(finalNumber, { scale: 0, opacity: 0 });
    gsap.set(animationLoginBox, { scale: 0, autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

    tl.to(animationTicket, { scale: 1, opacity: 1, duration: 1.5, ease: "back.out(1.7)" })
        .to(spinnerContainer, { autoAlpha: 1, scale: 1, duration: 0.8 }, "-=0.5");

    tl.to({}, {
        duration: 4, onUpdate: () => {
            spinnerNumber.textContent = Math.floor(Math.random() * 90) + 1;
        }
    });

    tl.to({}, {
        duration: 0.5, onComplete: () => {
            spinnerNumber.textContent = "69";
        }
    })
        .to(finalNumber, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" })
        .to(finalNumber, { scale: 1, duration: 0.3, ease: "elastic.out(1,0.3)", onComplete: confetti })
        .to(spinnerContainer, { autoAlpha: 0, scale: 0.5, duration: 1 }, "-=1.5");

    tl.add(function () {
        gsap.to(animationTicket, {
            autoAlpha: 0, scale: 0.9, duration: 1, onComplete: () => {
                animationTicket.style.display = 'none';
                animationLoginBox.style.display = 'block';
                gsap.to(animationLoginBox, { autoAlpha: 1, scale: 1, duration: 1.5, ease: "power2.out" });
            }
        });
    }, "+=1");
}

document.querySelectorAll('.animation-login-button').forEach(button => {
    button.addEventListener('click', () => {
        alert("Simulating successful login! Redirecting to game.");
        showGameUI();
    });
});

function confetti() {
    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div');
        div.classList.add('confetti');
        div.style.background = `hsl(${Math.random() * 360},100%,50%)`;
        div.style.left = '50%';
        div.style.top = '50%';
        document.body.appendChild(div);
        gsap.to(div, { x: (Math.random() - 0.5) * 500, y: (Math.random() - 0.5) * 500, duration: 2, opacity: 0, ease: "power1.out", onComplete: () => div.remove() });
    }
}

function ensureRecaptcha() {
    if (typeof firebase.auth.RecaptchaVerifier !== 'undefined' && !recaptchaVerifier) {
        recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
            },
            'expired-callback': () => {
            }
        });
        recaptchaVerifier.render().then(widgetId => {
        });
    }
}

sendOtpBtn.addEventListener('click', async () => {
    const phoneNumber = phoneInput.value.trim();
    if (!phoneNumber) {
        alert("Please enter a phone number.");
        return;
    }

    if (!recaptchaVerifier) {
        alert("Please wait for reCAPTCHA to load or ensure it's loaded in a secure context (HTTPS/localhost).");
        ensureRecaptcha();
        return;
    }

    try {
        confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
        alert('OTP sent to your phone!');
    } catch (error) {
        console.error("Error during signInWithPhoneNumber:", error);
        alert('Error sending OTP: ' + error.message);
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset(recaptchaVerifier.widgetId);
    }
});

verifyOtpBtn.addEventListener('click', async () => {
    const otp = otpInput.value.trim();
    if (!otp) {
        alert("Please enter the OTP.");
        return;
    }

    try {
        const result = await confirmationResult.confirm(otp);
        const user = result.user;
        applyAuthUser(user);
        hideLoginModal();

        const userSnap = await db.ref('users/' + user.uid).once('value');
        if (!userSnap.exists() || !userSnap.val().name) {
            document.getElementById('loginModal').style.display = 'flex';
            detailsStep.style.display = 'block';
            phoneInput.disabled = true;
            otpInput.disabled = true;
            sendOtpBtn.disabled = true;
            verifyOtpBtn.disabled = true;
            nameInput.value = user.displayName || '';
            emailInput.value = user.email || '';
        } else {
            detailsStep.style.display = 'none';
        }
    } catch (error) {
        console.error("Error during OTP confirmation:", error);
        alert('Error verifying OTP: ' + error.message);
    }
});

saveDetailsBtn.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const user = firebase.auth().currentUser;

    if (!name || !email) {
        alert("Please fill in your Name and Email.");
        return;
    }

    try {
        await saveProfileData(user.uid, name, user.phoneNumber, email, myImageUrl);
        hideLoginModal();
    } catch (error) {
        console.error("Error saving user details:", error);
        alert('Failed to save details: ' + error.message);
    }
});
