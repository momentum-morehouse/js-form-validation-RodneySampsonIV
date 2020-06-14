console.log('Add validation!');

let parkingForm = document.getElementById("parking-form");

parkingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

function validate() {
    let customerInput = document.getElementById('name');
    let customerField = document.getElementById('name-field');

    let carYearInput = document.getElementById('car-year');
    let carMakeInput = document.getElementById('car-make');
    let carModelInput = document.getElementById('car-model');
    let carField = document.getElementById('car-field');

    let startDateInput = document.getElementById('start-date');
    let startDateField = document.getElementById('start-date-field');

    let amountOfDaysInput = document.getElementById('days');
    let amountOfDaysField = document.getElementById('days-field');
    
    let creditCardInput = document.getElementById('credit-card');
    let creditCardField = document.getElementById('credit-card-field');

    let creditCardCVVInput = document.getElementById('cvv');
    let creditCardCVVField = document.getElementById('cvv-field');
	
    let creditCardDateInput = document.getElementById('expiration');
    let creditCardDateField = document.getElementById('expiration-field'); 

    let inputs = [customerInput, carYearInput, carMakeInput, carModelInput, startDateInput, amountOfDaysInput, creditCardInput, creditCardCVVInput, creditCardDateInput];

    let fields = [customerField, carField, carField, carField, startDateField, amountOfDaysField, creditCardField, creditCardCVVField, creditCardDateField, creditCardDateInput];

    for (var index = 0; index < inputs.length; index++) {
        if (inputs[index].value.length === 0) {
            fields[index].className = "input-field input-invalid";
        } else {
        	fields[index].className = "input-field input-valid";
		}
    }
	
}