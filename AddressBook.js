console.log("------------------------------Welcome to the Address book program-----------------------------");
const NAME_REGEX_PATTERN = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX_PATTERN = RegExp('^[a-zA-z]{3,}$');
const PINCODE_REGEX_PATTERN = RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
const PHONE_NUMBER_PATTERN = RegExp('^(0/91)?[6-9][0-9]{9}$');
const EMAIL_REGEX_PATTERN = RegExp('^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,4})?$');

class Contact {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!NAME_REGEX_PATTERN.test(firstName)) {
            console.log('Please enter valid firstname.');
        } else {
            this.firstName = firstName;
        }
        if (!NAME_REGEX_PATTERN.test(lastName)) {
            console.log('Please enter valid lastname.');
        } else {
            this.lastName = lastName;
        }
        if (!ADDRESS_REGEX_PATTERN.test(address)) {
            console.log('Please enter valid address.');
        } else {
            this.address = address;
        }
        if (!ADDRESS_REGEX_PATTERN.test(city)) {
            console.log('Please enter valid city.');
        } else {
            this.city = city;
        }
        if (!ADDRESS_REGEX_PATTERN.test(state)) {
            console.log('Please enter valid state.');
        } else {
            this.state = state;
        }
        if (!PINCODE_REGEX_PATTERN.test(zip)) {
            console.log('Please enter valid pincode.');
        } else {
            this.zip = zip;
        }
        if (!PHONE_NUMBER_PATTERN.test(phoneNumber)) {
            console.log('Please enter valid phone number.');
        } else {
            this.phoneNumber = phoneNumber;
        }
        if (!EMAIL_REGEX_PATTERN.test(email)) {
            console.log('Please enter valid email ID.');
        } else {
            this.email = email;
        }
    }

    //method
    toString() {
        return "Firstname: " + this.firstName + " Lastname: " + this.lastName + " Address: " + this.address + " City: " + this.city +
            " State: " + this.state + " Zip: " + this.zip + " Phone Number: " + this.phoneNumber + " Email: " + this.email;
    }
}
try {
    let person = new Contact("Usha", "Ahirwar", "Rohini", "NewDelhi", "Delhi", 110035, 56779005675, "usha@gmail.com");
    console.log(person.toString());
} catch (e) {
    console.log(e);
}

/*Ability to ensure Valid
Contacts are added... - First Name and Last Name should start with
Capital and Minimum 3 Characters
- Address, City and State should also have
minimum 4 characters
- Zip, Phone and Email should be valid as done in
the Pattern Exercise
- Throw Error if the RegEx test fails*/