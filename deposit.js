document.getElementById('deposit-button').addEventListener('click', function(){
    //Take the input from Input field by using DOM id method() and store it into a variable and convert it into a number(data type)
    const depositField = document.getElementById('deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //Add to the deposit html element and convert it into number(data type) 
    const depositTotal = document.getElementById('deposit-element');
    const previousDepositTextString = depositTotal.innerText;
    const previousDepositText = parseFloat(previousDepositTextString);

    // Add the previous amount and current amount 
    const currentTotal = previousDepositText + newDepositAmount;
    depositTotal.innerText = currentTotal;

    //Add the balance element to the deposit amount
    const balance = document.getElementById('balance-element');
    const balanceTotal = balance.innerText;
    const balanceString = parseFloat(balanceTotal);

    //Adding balance element amount and deposit amount from input field
    const lastTotal = balanceString + newDepositAmount;
    balance.innerText = lastTotal;

    



    // Clear the input field of deposit after taking input
    depositField.value = '';
})