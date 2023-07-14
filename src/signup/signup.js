document.querySelector("#form").addEventListener("submit", signUp);
function signUp(event) {
  event.preventDefault();
  const email = document.getElementById("email");
  const username = document.getElementById("name");
  const address = document.getElementById("address");
  const mob = document.getElementById("mob");
  const password = document.getElementById("password");
  const password1 = document.getElementById("password1");

  if (password.value !== password1.value) {
    swal({
  title: "Incorrect Password",
  text: "Password and Confirm Password are not Same",
  icon: "error",
});
    return;
  }

  fetch('http://localhost:7070/user',{
    method:"GET"
  }).then((res)=>res.json())
  .then((data)=>{
    const comp = data.find((ele) => ele.email === email.value);
    if(comp)
  {
     swal({
  title: "Error!!",
  text: "User Already Exist !",
  icon: "error",
});
  }
  else{
 const dataobj = {
    email: email.value,
    name: username.value,
    address: address.value,
    mob: mob.value,
    password: password.value,
  };
  fetch("http://localhost:7070/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) =>{
      res.json();
      swal("Signin Successfull !!")
    })
    .then((data) => {
        window.location.href = "../signin/signin.html";        
      
    });
  }
  })

  

 
}