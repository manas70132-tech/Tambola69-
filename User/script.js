db.ref("game/current").on("value", snap => {
  if(snap.exists()){
    const data = snap.val();
    let html = "";
    if(data.started){
      html += "<p>Game Started ✅</p>";
      if(data.numbers){
        html += "<h3>Numbers:</h3><p>" + Object.values(data.numbers).join(", ") + "</p>";
      }
    } else {
      html += "<p>Waiting for admin to start...</p>";
    }
    document.getElementById("game").innerHTML = html;
  }
});
