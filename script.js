/**************timer css starts**************/
// Set the date we're counting down to
var countDownDate = new Date("July 15, 2023 16:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  var clockLabel = document.getElementById("demo");
  clockLabel.innerHTML = `
    <span class="clock-time">${days}</span>d
    <span class="clock-time">${hours}</span>h
    <span class="clock-time">${minutes}</span>m
    <span class="clock-time">${seconds}</span>s
  `;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    clockLabel.innerHTML = "<span class='clock-expired'>EXPIRED</span>";
  }
}, 1000);
/**************timer css ends**************/
