function clicked() {
  console.log("Hello");
  window.location.href = "../index.html";
}

document.querySelector("form").addEventListener("submit", signUp);
function signUp() {
  event.preventDefault();
  const email = document.getElementById("email");
  const username = document.getElementById("name");
  const address = document.getElementById("address");
  const mob = document.getElementById("mob");
  const password = document.getElementById("password");

  const dataobj = {
    email: email.value,
    name: username.value,
    address: address.value,
    mob: mob.value,
    password: password.value,
  };
  console.log(dataobj);
  fetch("http://localhost:7070/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataobj),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Account created successfully!!...");
      window.location.replace(`../signin/signin.html`);
    });
}

// const email = document.getElementById("email");
// const username = document.getElementById("name");
// const address = document.getElementById("address");
// const mob = document.getElementById("mob");
// const password = document.getElementById("password");
// const button = document.getElementById("signup");
// const home = document.getElementById("home");

// home.addEventListener("click", () => {
//   window.location.href = "../index.html";
// });

// button.addEventListener("click", () => {
//   const dataobj = {
//     email: email.value,
//     name: username.value,
//     address: address.value,
//     mob: mob.value,
//     password: password.value,
//   };
//   console.log(dataobj);
//   fetch("http://localhost:7070/user", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(dataobj),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       alert("Account created successfully!!...");
//       window.location.replace(`../signin/signin.html`);
//     });
// });
