if (JSON.parse(localStorage.getItem("obj"))) {
  const el = JSON.parse(localStorage.getItem("obj"));
  const pDiv = document.getElementById("parentDiv");
  console.log(el);

  const cDiv = document.createElement("div");
  cDiv.id = "cDiv";
  const details = document.createElement("h1");
  details.innerText = "Your Booking Status";
  const uname = document.createElement("h3");
  const adhaar = document.createElement("h4");
  const checkin = document.createElement("h4");
  const checkout = document.createElement("h4");
  const noOfRooms = document.createElement("h4");
  const noOfAdults = document.createElement("h4");
  const noOfChilds = document.createElement("h4");
  const roomType = document.createElement("h4");
  const email = document.createElement("h4");
  const phone = document.createElement("h4");

  uname.innerText = "Name : " + el.uname;
  adhaar.innerText = "Adhaar Number : " + el.adhaar;
  checkin.innerText = "Check In Date : " + el.checkin;
  checkout.innerText = "Check Out Date : " + el.checkout;
  noOfRooms.innerText = "Number of Room(s) Booked : " + el.noOfRooms;
  noOfAdults.innerText = "Adults : " + el.noOfAdults;
  noOfChilds.innerText = "Minors : " + el.noOfChilds;
  roomType.innerText = "Room Type : " + el.roomType;
  email.innerText = "Email : " + el.email;
  phone.innerText = "Contact No.: " + el.phone;

  const cancelBooking = document.createElement("button");
  cancelBooking.id = "cancelBtn";
  cancelBooking.innerText = "CANCEL BOOKING!";
  cancelBooking.addEventListener("click", () => {
    fetch(`http://localhost:7070/bookedUsers${el.id}`, {
      method: "DELETE",
    }).then((res) => {
      alert("Booking Cancelled Successfully !");
      localStorage.removeItem("obj");
      window.location.reload("http://127.0.0.1:5500/index.html");
    });
  });

  cDiv.append(
    details,
    uname,
    adhaar,
    phone,
    email,
    noOfAdults,
    noOfChilds,
    noOfRooms,
    checkin,
    checkout,
    roomType,
    cancelBooking
  );
  pDiv.append(cDiv);
}

/*****timer css starts*****/
// Set the date we're counting down to
var countDownDate = new Date("July 17, 2023 16:30:00").getTime();

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
/*****timer css ends*****/
