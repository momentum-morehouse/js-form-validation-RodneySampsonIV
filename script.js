console.log('Add validation!');



function emptyFields() {
    let customer = document.getElementById('#name');
    let caryear = document.getElementById('#car-year');
    let carmake = document.getElementById('#car-make');
    let carmodel = document.getElementById('#car-model');
    let startdate = document.getElementById('#start-date');
    let amtdays = document.getElementById('#days');
    let cc = document.getElementById('#credit-card-field');
    let cCVV = document.getElementById('#cvv-field');
    let ccDate = document.getElementById('#expiration-field')
    return true;
}
emptyFields();


function validatior() {
    if (customer.value.length == 0) {
        document.body.style.backgroundColor = "red";
    }

    else {
        alert("message");
        return false;

    }
    return true;
}
validatior(customer)