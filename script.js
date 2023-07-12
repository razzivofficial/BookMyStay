const id= JSON.parse(localStorage.getItem("id"));
const pDiv=document.getElementById("parentDiv");


document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:7070/bookedUsers',{
        method:"GET"
    }).then((res)=>res.json())
    .then((data)=>{
        const bData = data.filter((ele)=>ele.id===id)
        console.log(bData);
        bData.map((el)=>{
            const div = document.createElement("div")
            const details = document.createElement("h1")
            details.innerText="Your Booking Status"
            const uname = document.createElement("h3")
            const adhaar = document.createElement("h4")
            const checkin =document.createElement("h4")
            const checkout =document.createElement("h4")
            const noOfRooms =document.createElement("h4")
            const noOfAdults=document.createElement("h4")
            const noOfChilds=document.createElement("h4")
            const roomType=document.createElement("h4")
             const email=document.createElement("h4")
            const phone=document.createElement("h4")

            uname.innerText="Name : "+el.uname
            adhaar.innerText="Adhaar Number : "+el.adhaar
            checkin.innerText="Check In Date : "+el.checkin
            checkout.innerText="Check Out Date : "+el.checkout
            noOfRooms.innerText="Number of Room(s) Booked : "+el.noOfRooms
            noOfAdults.innerText="Adults : "+el.noOfAdults
            noOfChilds.innerText="Minors : "+el.noOfChilds
            roomType.innerText="Room Type : "+el.roomType
            email.innerText="Email : "+el.email
            phone.innerText="Contact No.: "+el.phone

            const cancelBooking = document.createElement("button")
                cancelBooking.innerText="cancel Booking"
                cancelBooking.addEventListener("click",()=>{
                    fetch(`http://localhost:7070/bookedUsers${el.id}`,{
                        method:"DELETE"
                    }).then((res)=>{
                        alert("Booking Cancelled Successfully !")
                    })

                     window.location.href="index.html"
                })

                div.append(details,uname,adhaar,phone,email,noOfAdults,noOfChilds,noOfRooms,checkin,checkout,roomType)
                pDiv.append(div)

        })
    })
})