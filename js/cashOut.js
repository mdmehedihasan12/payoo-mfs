document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOUtInput = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOUtInput)
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(cashOUtInput, pinNumber)

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const balanceNumber = parseFloat(balance)
        const newBalance = balanceNumber - cashOutNumber;
        console.log(newBalance)
        document.getElementById('account-balance').innerText = newBalance;

    }else{
        alert('Fail to cash out. please try agin')
    }
})