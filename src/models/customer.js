import User from "./user.js";

export default class Customer extends User {
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        super(id, firstName, lastName, city, age) // User'ı "extend" ettiğimiz için super() kullanarak Customer içerisinde ayrı ayrı alanları doldurmak zorunda kalmayız.
        this.creditCardNumber = creditCardNumber;
    }
}