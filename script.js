<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Tambola 69 - User</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="style.css">

  <script src="https://www.gstatic.com/firebasejs/9.1.1/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.1.1/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.1.1/firebase-database-compat.js"></script>
</head>
<body>
  <button id="musicBtn">🎵</button>
  <audio id="liveMusic" autoplay loop></audio>

  <header>Tambola 69</header>
  <h2>Step Into The Excitement!</h2>
  <h4>“We hope luck is always on your side!” 🎉</h4>

  <div class="menu">
    <div class="hamburger" id="menuToggle" aria-label="Options"><span></span><span></span><span></span></div>
  </div>
  <div class="menu-panel" id="menuPanel">
    <h4>Options</h4>

    <div class="menu-row">
      <strong>🏆 Your Winnings: ₹<span id="myWinnings">0</span></strong>
      <div class="menu-note">If you haven't won yet, this shows ₹0.</div>
    </div>

    <div class="menu-row">
      <strong>💸 Cash Withdrawal</strong>
      <div class="menu-actions">
        <button class="menu-btn" id="withdrawBtn">Withdraw Now</button>
      </div>
      <div class="menu-note">Enter amount and your UPI or phone. We’ll receive your request instantly.</div>
    </div>

    <div class="menu-row">
      <strong>📣 Share App</strong>
      <div class="menu-actions">
        <button class="menu-btn" id="shareNative">Share</button>
        <button class="menu-btn secondary" id="shareWhatsApp">WhatsApp</button>
      </div>
      <div class="menu-note">Invite friends via your favourite app.</div>
    </div>

    <div class="menu-row">
      <strong>👤 User Profile</strong>
      <div class="menu-actions">
        <button class="menu-btn" id="viewProfileBtn">View Profile</button>
      </div>
      <div class="menu-note">See your User ID, Name, Contact & Email.</div>
    </div>

    <div class="menu-row">
      <strong>⚙️ Auto Options</strong>
      <div class="menu-actions">
        <label style="display:flex;align-items:center;gap:8px;">
          <input type="checkbox" id="autoTickToggle" /> Auto-Tick
        </label>
        <label style="display:flex;align-items:center;gap:8px;">
          <input type="checkbox" id="autoClaimToggle" /> Auto-Claim
        </label>
      </div>
      <div class="menu-note">Auto-Tick marks numbers on your ticket as they are drawn. Auto-Claim will submit valid claims automatically.</div>
    </div>

  </div>

  <div class="prize-box">
    <h2>Mega contest</h2>
    <span>Prize list :-</span>
    <span>* Early Five Prize: ₹ 500</span>
    <span>* Ticket Corner Prize: ₹ 500</span>
    <span>* Each Line Prize: ₹ 500</span>
    <span>* Full House Prize: ₹ 3000</span>
    <span># 2nd Full House Prize ₹ 1000” 🎉</span>
    <span># Try Your Luck !</span>
  </div>

  <div class="waiting-wrapper">
    <div class="waiting-box" id="waitingBox">
      <div class="waiting-title" id="waitingTitle">Waiting for Draw...</div>
      <div class="waiting-desc" id="waitingDesc">No active room • Global draw idle</div>
      <div class="waiting-latest" id="latestNumber">—</div>
      <div class="waiting-live-pill" id="waitingLive">
        <div class="dot" id="liveDot"></div>
        <div id="waitingLiveText">Live Users: 0</div>
      </div>
    </div>
  </div>

  <div class="next-game-box" id="nextGameBoxTop">
    <h3>Game Starts In ⏳</h3>
    <div class="next-game-info">
      <span id="nextCountdownTop">00:00</span>
      <span id="ticketsLeftTop">Tickets Left: 0</span>
      <span id="prizePercentageTop">Prize %: 0%</span>
      <span id="TotalSpotTop">Total Spot: 100</span>
    </div>
    <button class="book-ticket" id="buyTicketBtnTop">Buy ₹ 100 💳</button>
  </div>

  <div class="user-ticket" id="userTicketContainer">
    <div class="ticket-shell" id="ticketShell">
      <div id="ticketSerial" class="ticket-serial">#000</div>
      <div id="ticket" class="ticket"></div>
    </div>
  </div>

  <div class="claimed-box" id="claimBox">
    <h3>Claim Your Prize 🎁</h3>
    <div class="claim-buttons">
      <button class="claim-button" onclick="claimPrize('Early Five')">Early Five ₹500</button>
      <button class="claim-button" onclick="claimPrize('Top Line')">Top Line ₹500</button>
      <button class="claim-button" onclick="claimPrize('Middle Line')">Middle Line ₹500</button>
      <button class="claim-button" onclick="claimPrize('Bottom Line')">Bottom Line ₹500</button>
      <button class="claim-button" onclick="claimPrize('Ticket Corner')">Ticket Corner ₹500</button>
      <button class="claim-button" onclick="claimPrize('Full House')">Full House ₹3000</button>
      <button class="claim-button" onclick="claimPrize('2nd Full House')">2nd Full House ₹1000</button>
    </div>
  </div>

  <div class="board" id="board"></div>
  <div class="history-box" id="historyBox">
    <h3>Drawn Numbers History</h3>
    <div id="history">None</div>
  </div>

  <div class="claimed-box" id="claimedPrizesBox">
    <h3>Claimed Prizes</h3>
    <div id="claimsList">No claims yet...</div>
  </div>

  <div class="winners-box" id="winnersBox">
    <h3>Top Winners 🏆</h3>
    <div id="winnerList">Loading winners...</div>
  </div>

  <div class="next-game-box" id="nextGameBoxBottom">
    <h3>Next Game Starts In ⏳</h3>
    <div class="next-game-info">
      <span id="nextCountdownBottom">00:00</span>
      <span id="ticketsLeftBottom">Tickets Left: 0</span>
      <span id="prizePercentageBottom">Prize %: 0%</span>
      <span id="TotalSpotBottum">Total Spots : 100</span>
    </div>
    <button class="book-ticket" id="buyTicketBtnBottom">Buy ₹ 100 💳</button>
  </div>

  <div class="play-friends-box" id="playFriendsBox">
    <h3>Play With Friends 🎮 <span class="pill" id="roomStatusPill">No Room</span></h3>
    <div class="friends-info">
      <span id="friendsPrizePercentage">Prize %: 0</span>
    </div>
    <div class="row" style="margin-top:8px;">
      <button class="book-ticket" id="createRoomBtn">Create Room</button>
      <input type="text" id="joinRoomIdInput" placeholder="Enter Room ID" />
      <button class="join-game-button" id="joinRoomBtn">Join Room</button>
    </div>
    <div id="roomInfo" style="margin-top:10px;color:#fff;"></div>
    <div class="row" style="margin-top:10px;">
      <button class="book-ticket" id="roomBuyTicketBtn" style="display:none;">Buy Ticket ₹ 100</button>
      <button class="join-game-button" id="startRoomGameBtn" style="display:none;" disabled>Start Game</button>
    </div>
    <div id="playersList" class="muted" style="margin-top:10px;"></div>
  </div>

  <div class="claimed-box" id="watchLiveBox">
    <h3 style="margin-bottom:8px;">🎥 Watch Live</h3>
    <div style="text-align:center;">
      <button id="watchLiveBtn">▶️ Watch Live</button>
      <div id="liveVideoBox" style="margin-top:15px; display:none;">
        <iframe id="liveFrame" width="100%" height="300" src="" title="Tambola 69 Live" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <div style="margin-top:8px; font-size:12px; opacity:0.9;">Tip: Tap "Watch Live" to start the stream inside the app.</div>
  </div>

  <div class="modal-backdrop" id="withdrawModal">
    <div class="modal">
      <h3>Request Withdrawal</h3>
      <label>Amount (₹)</label>
      <input id="withdrawAmount" type="number" placeholder="Enter amount" />
      <label>UPI ID or Phone</label>
      <input id="withdrawDest" type="text" placeholder="example@upi or +91XXXXXXXXXX" />
      <div class="row" style="justify-content:flex-end;">
        <button class="btn secondary" id="cancelWithdrawBtn">Cancel</button>
        <button class="btn" id="submitWithdrawBtn">Submit Request</button>
      </div>
      <div class="note">Withdrawal requests will be recorded and admin will be notified (email/SMS) via your server/cloud-function.</div>
    </div>
  </div>

  <div class="modal-backdrop" id="loginModal">
    <div class="modal">
      <h3>Login with Phone OTP</h3>
      <label>Phone Number (include +91)</label>
      <input id="phoneInput" type="tel" placeholder="+91XXXXXXXXXX" />
      <div id="recaptcha-container" style="margin-top:10px;"></div>
      <div class="row">
        <button class="btn" id="sendOtpBtn">Send OTP</button>
        <button class="btn secondary" id="closeLoginBtn" type="button">Close</button>
      </div>
      <label>Enter OTP</label>
      <input id="otpInput" type="text" placeholder="6-digit code" />
      <button class="btn" id="verifyOtpBtn" style="margin-top:8px;">Verify OTP</button>
      <div id="detailsStep" style="display:none; margin-top:10px;">
        <h3 style="margin-top:12px;">Your Details</h3>
        <label>Name</label>
        <input id="nameInput" type="text" placeholder="Your name" />
        <label>Email</label>
        <input id="emailInput" type="email" placeholder="you@example.com" />
        <button class="btn" id="saveDetailsBtn" style="margin-top:8px;">Save</button>
      </div>
      <div class="note">Note: OTP works on HTTPS or localhost.</div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
