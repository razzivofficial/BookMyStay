const email = document.getElementById("email");
const username = document.getElementById("name");
const address = document.getElementById("address");
const mob = document.getElementById("mob");
const password = document.getElementById("password");
const button = document.getElementById("signup");
const cancel = document.getElementById("cancel");
const form = document.getElementById("#form");

cancel.addEventListener("click", () => {
  window.location.href = "../index.html";
});

form.addEventListener("submit", () => {
  event.preventDefault();
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
      alert(
        "Account created successfully! Please go to login to create a todo"
      );
      window.location.replace(`../signin/signin.html`);
    });
});

