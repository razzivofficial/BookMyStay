document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const uname = document.getElementById("name");
  const adhaar = document.getElementById("adhaar");
  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");
  const noOfRooms = document.getElementById("roomNo");
  const noOfAdults = document.getElementById("adult");
  const noOfChilds = document.getElementById("child");
  const roomType = document.getElementById("mode");
  const promoCode = document.getElementById("code");
  const email = document.getElementById("email");
  const phone = document.getElementById("mob");

  const dataobj = {
    uname: uname.value,
    adhaar: adhaar.value,
    checkin: checkin.value,
    checkout: checkout.value,
    noOfRooms: noOfRooms.value,
    noOfAdults: noOfAdults.value,
    noOfChilds: noOfChilds.value,
    roomType: roomType.value,
    promoCode: promoCode.value,
    email: email.value,
    phone: phone.value,
  };
  console.log(dataobj);
  fetch("http://localhost:7070/bookedUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Booking Succesfull!!");
      console.log(data.id)
      localStorage.setItem("id",data.id) 
      
    });

   
  window.location.href = "../../index.html";
  
});