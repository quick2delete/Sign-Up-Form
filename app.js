const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const submit = document.querySelector(".submit");

function confirmPassword() {
  if (password1.value !== password2.value) {
    alert('The password doesn"t match');
  } else {
  }
}

confirmPassword();

// submit.addEventListener("submit", (e) => {
//   console.log(e);
// });
