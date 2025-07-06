function checkCode() {
  const correctCode = "6969";
  const input = document.getElementById("accessCode").value;

  if (input === correctCode) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").textContent = "Wrong code. Try again.";
  }
}
