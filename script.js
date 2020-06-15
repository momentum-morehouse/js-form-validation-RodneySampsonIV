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

    let invalidFieldMessages = ["Name is required.",  
    "Make is required. ",
    "Model is required. ",
    "Year is required.", 
    "Date is required.",
    "Number of days is required.",
    "Credit card number is required.",
    "CVV is required.",
    "Expiration date is required",];


    for (var index = 0; index < inputs.length; index++) {
        let field = fields[index]
        if (inputs[index].value.length <= 0) {
            field.className = "input-field input-invalid";
            let message = invalidFieldMessages[index];
            let text = document.createTextNode(message);
            field.appendChild(text);
        } else {
        	field.className = "input-field input-valid";
            field.removeChild(text);
		}
    }
	
}