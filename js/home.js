// add money to the account

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // console.log('money add button clicked');
    const addMoneyInput = document.getElementById('input-add-money').value;

    const pinNumber = document.getElementById('input-add-pin').value;

  
    console.log(addMoneyInput, pinNumber)

    if(pinNumber === '1234'){
        console.log('adding money to your amount')
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;

    }else {
      alert("filed to add money. please try agin");
    }



})

