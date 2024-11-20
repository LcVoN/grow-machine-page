const error = document.getElementsByClassName("error")[0];
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const { user, password } = e.target.children;
  const res = await fetch("https://grow-machine.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: user.value,
      password: password.value,
    }),
  });
  if (!res.ok) return error.classList.toggle("display-none", false);
  const resJson = await res.json();
  if (resJson.redirect) {
    window.location.href = resJson.redirect;
  }
});
