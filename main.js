
function validateEmail() {
    var email = document.getElementById('email');
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (re.test(email) === true) {
        alert('Please enter a valid email')
    }else {
        continue;
    }
}

  
