/*
1. Add the event handler to the withdraw button

step-1
*/ 
document.getElementById('withdraw-button').addEventListener('click', function(){
    //Get the input field by the use of Dom id method() and convert it into number (data type) 
    const withDrawField = document.getElementById('withdraw');
    const withDrawValue = withDrawField.value;
    const withDrawString = parseFloat(withDrawValue);

    //Get the html withdraw element with the use of DOM method()
    const withDrawElement = document.getElementById('withdraw-element');
    const withDrawElementText = withDrawElement.innerText;
    const withDrawElementString = parseFloat(withDrawElementText);

    
    //Add the balance element to the withdraw element 
    const balance = document.getElementById('balance-element');
    const balanceText = balance.innerText;
    const balanceConversion = parseFloat(balanceText);
    
    //Clear the withdraw input field
    withDrawField.value = '';

    if(withDrawString > balanceConversion){
        alert('Bhag sala');
        return;
    }
    
    //Add the total to the html withdraw element 
    const currentWithdrawTotal = withDrawString + withDrawElementString;
    withDrawElement.innerText = currentWithdrawTotal;
    
    //Subtracting the balance element from withdraw inputfield & element
    const lastBalance =   balanceConversion - withDrawString;
    balance.innerText = lastBalance;



})