document.querySelector("form").addEventListener("submit", signIn);
function signIn() {
  event.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  fetch("http://localhost:7070/user", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const comparision = data.find((ele) => ele.email === email.value);
      if (
        comparision.email === email.value &&
        comparision.password === password.value
      ) {
        alert("Logged in Successfully!");
        localStorage.setItem("token", JSON.stringify(Date.now()));
        window.location.href = "../index.html";
      } else {
        alert("You are not registered in!");
      }
    });
}

// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const button = document.getElementById("signin");

// button.addEventListener("click", () => {
//   fetch("http://localhost:7070/user", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       const comparision = data.find((ele) => ele.email === email.value);
//       if (
//         comparision.email === email.value &&
//         comparision.password === password.value
//       ) {
//         alert("Logged in Successfully!");
//         localStorage.setItem("token", JSON.stringify(Date.now()));
//         window.location.href = "../index.html";
//       } else {
//         alert("You are not registered in!");
//       }
//     });
// });
