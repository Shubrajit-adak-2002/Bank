document.getElementById('button').addEventListener('click', function(){
    const email = document.getElementById('email');
    const userEmail = email.value;
    

    const pass = document.getElementById('password');
    const userPass = pass.value;

    if(userEmail === 'shubra562@gmail.com' && userPass === 'umaaadak'){
        location.href = 'bank.html'
    }else{
        console.log('Invalid User');
    }
})