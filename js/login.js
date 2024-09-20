// document.getElementById('button-login').addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('login button click')

//     const phoneNumber = document.getElementById('phone-number').value;

//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('you are logged in')
//     }
//     else{
//         alert('Wrong phone number or pin')
//     }
// })

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;

    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);

    if (phoneNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = '/home.html';
    } else {
      alert("Wrong phone number or pin");
    }
  });
