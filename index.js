function submitData(name, email) {
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({name: name, email: email})
  }

  return fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(user => document.querySelector("body").textContent = user.id)
    .catch(error => document.querySelector("body").textContent = error.message)
}
