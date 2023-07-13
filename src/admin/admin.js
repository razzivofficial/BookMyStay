const parent = document.getElementById("pDiv")

const app = "Booking Confirmed"
const canc = "Booking Cancelled"

document.addEventListener('DOMContentLoaded',()=>{
    fetch('http://localhost:7070/bookedUsers',{
        method:"GET"
    }).then((res)=>res.json())
    .then((data)=>{
        console.log(data)
            data.forEach((el)=>{
            const div = document.createElement("div")
            div.id="div"
            const details = document.createElement("h1")
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
            const promoCode = document.createElement("h4")
            const bookingStatus = document.createElement("h4")

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
            promoCode.innerText="Promo Code Applied : "+el.promoCode
            bookingStatus.innerText="Booking Status : "+el.bookingStatus

            const removeUser = document.createElement("button")
            removeUser.innerText="Remove User"
            removeUser.addEventListener("click",()=>{
                fetch(`http://localhost:7070/bookedUsers/${el.id}`,{
                    method:"DELETE"
                }).then((res)=>{
                    alert("User Removed Successfully !")
                })
            })

            const approve = document.createElement("button")
            approve.innerText="Approve Booking"
            approve.addEventListener("click",()=>{
                fetch(`http://localhost:7070/bookedUsers/${el.id}`,{
                    method:"PATCH",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({bookingStatus:app})
                }).then((res)=>{
                    alert("Booking Approved Successfully !")
                })
            })

            const cancel = document.createElement("button")
            cancel.innerText="Cancel Booking"
            cancel.addEventListener("click",()=>{
                fetch(`http://localhost:7070/bookedUsers/${el.id}`,{
                    method:"PATCH",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({bookingStatus:canc})
                }).then((res)=>{
                    alert("Booking Cancelled Successfully !")
                })
            })

    
         
                   div.append(details,uname,adhaar,phone,email,noOfAdults,noOfChilds,noOfRooms,checkin,checkout,roomType,bookingStatus,promoCode,removeUser,approve,cancel)
                parent.append(div)

    })
})
})