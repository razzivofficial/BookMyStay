 
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

  const bookedStatus = "Pending";



document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

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
    bookingStatus : bookedStatus
    
  };
  console.log(dataobj);
 fetch("http://localhost:7070/bookedUsers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  }).then(res=>{
    if(res.ok){
      localStorage.setItem("obj",JSON.stringify(dataobj));
    setTimeout(()=>{
        
        window.location.href = "../../index.html";

      },4000)
      alert("!");

      // window.location.replace("../../index.html");
    }

    
     
  })
  
    
});