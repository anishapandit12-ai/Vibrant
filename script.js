document.getElementById("bookBtn").addEventListener("click", function() {
  document.getElementById("output").innerHTML = `
    <h2 style='color:green;'>✅ Ambulance Booked!</h2>
    <p>Driver: <b>Rajesh Kumar</b><br>
    Vehicle: <b>Force Traveller</b><br>
    ETA: <b>7 minutes</b></p>
  `;
});

document.getElementById("sosBtn").addEventListener("click", function() {
  let countdown = 10;
  document.getElementById("output").innerHTML = `<h3>🚨 Activating SOS in ${countdown} seconds...</h3>`;

  let timer = setInterval(() => {
    countdown--;
    document.getElementById("output").innerHTML = `<h3>🚨 Activating SOS in ${countdown} seconds...</h3>`;

    if (countdown === 0) {
      clearInterval(timer);
      document.getElementById("output").innerHTML = `
        <h2 style='color:red;'>🆘 Help is on the way!</h2>
        <p>Your location has been shared with the nearest emergency team.</p>
      `;
    }
  }, 1000);
});
