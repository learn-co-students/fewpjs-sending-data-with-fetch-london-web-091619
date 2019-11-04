// Add your code here
// function submitData(name, email) {
//     fetch("http://localhost:3000/users", configurationObject);
//     configurationObject = {
//         method : "POST",
//         headers : {
//             "Content-Type" : "application/json",
//             "Accept" : "application/json"
//         };
//         body : JSON.stringify({
//             name : "name",
//             email : "email"
//         })
//     };
//     return fetch()
// }
function submitData(name,email){
    return fetch("http://localhost:3000/users",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(res => res.json())
    .then(function(data){
      console.log(data)
      document.body.innerHTML = data["id"]
  
    })
    .catch(function(error){
      document.body.innerHTML = "Unauthorized Access"
    })
  }
  