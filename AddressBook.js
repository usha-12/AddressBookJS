console.log("------------------------------Welcome to the Address book program-----------------------------");
const regName = /^[A-Z][a-z]{2,}$/;
const regAddress = /^[A-Z]{1}[a-z]{3,}/;
const regZip = /^[0-9]{6}$/;
const regPhoneNo = /^[9][1][6-9]{1}[0-9]{9}$/;
const regEmail = /^[A-Za-z0-9]+([-\\\\.\\\\+\\\\_][0-9A-Za-z]+)*[@][A-Za-z0-9]+.[a-zA-Z]{2,4}([\\\\.\\\\,][a-z]{2,3})?$/;
let personArray = new Array();

class Person {

    set firstName(firstName) {
        if (regName.test(firstName))
            this.perFirstName = firstName;
        else throw "Invalid first name ";
    }
    get firstName() {
        return this.perFirstName;
    }
    set lastName(lastName) {
        if (regName.test(lastName))
            this.perLastName = lastName;
        else throw "Invalid last name";
    }
    get lastName() {
        return this.perLastName;
    }
    set address(address) {
        if (regAddress.test(address))
            this.perAddress = address;
        else throw "Invalid address";
    }
    get address() {
        return this.perAddress;
    }
    set city(city) {
        if (regAddress.test(city))
            this.perCity = city;
        else throw "Invalid city name";
    }
    get city() {
        return this.perCity;
    }
    set state(state) {
        if (regAddress.test(state))
            this.perState = state;
        else throw "Invalid state";
    }
    get state() {
        return this.perState;
    }
    set zip(zip) {
        if (regZip.test(zip))
            this.perZip = zip;
        else throw "Invalid zip code";
    }
    get zip() {
        return this.perZip;
    }
    set phoneNumber(phoneNumber) {
        if (regPhoneNo.test(phoneNumber))
            this.perPhoneNumber = phoneNumber;
        else throw "Invalid phone number";
    }
    get phoneNumber() {
        return this.perPhoneNumber;
    }
    set email(email) {
        if (regEmail.test(email))
            this.perEmail = email;
        else throw "Invalid email";
    }
    get email() {
        return this.perEmail;
    }

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " + this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    }
}

function editContact(firstName, choice, updatedValue) {
    let person = firstName;
    switch (choice) {
        case "address": let address = updatedValue;
            person.address = address;
            break;
        case "city": let city = updatedValue;
            person.city = city;
            break;
        case "state": let state = updatedValue;
            person.state = state;
            break;
        case "zip": let zip = updatedValue;
            person.zip = zip;
            break;
        case "phone number": let phoneNumber = updatedValue;
            person.phoneNumber = phoneNumber;
            break;
        case "email": let email = updatedValue;
            person.email = email;
            break;
        default:
            throw "Invalid choice";
    }
}

function deleteContact(firstName) {
    personArray.forEach(person => {
        if (person.firstName == firstName)
            personArray.pop();
    });
    console.log("Existing Contact : " + personArray);
}

let personExist;
function findPerson(firstName) {
    personArray.forEach(person => {
        if (person.firstName == firstName)
            personExist = person;
    });
    if (personExist != null)
        console.log("Contact match: ");
    else
        throw "Contact haven't match";
}

function addPerson(person) {
    if (personArray == null) {
        personArray.push(person);
    }
    personArray.forEach(person => {
        if (person.firstName == person.firstName)
            personExist = person;
    });
    if (personExist == null)
        personArray.push(person);
    else
        throw "Person exists";
}

try {
    let personObj1 = new Person("usha", "ahirwar", "Rohini", "NewDelhi", "newDelhi", 110035, 7864323321, "usha@gmail.com");
    let personObj2 = new Person("Jiya", "Srivastava", "Ecovillage", "Varanasi", "Noida", 560063, 917398031234, "jiya@gmail.com");

    personArray.push(personObj1);
    personArray.push(personObj2);
    console.log(personArray);

    editContact("Jiya", "state", "Delhi");
    deleteContact("Jiya");
    console.log("Number of Contacts : " + personArray.reduce(count => count + 1, 0));
    findPerson("Pallavi");
    addPerson(personObj1);

} catch (Exception) {
    console.log(Exception);
}
/*Ability to ensure there is no
Duplicate Entry of the same
Person in the Address Book - Duplicate Check is done on Person Name
before adding person to Address Book.
- Use Array Functions of filter, map, reduce,*/