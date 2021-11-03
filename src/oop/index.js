class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

// Customer customer = new Customer() Java'daki bu yapı artık,
let customer = new Customer(1, "12345");

// Prototyping
customer.name = "Deneme" // Bunu ekranda yazar, bir nesneye bambaşka özellik eklemeye "prototyping" denir.
console.log(customer.name);

// Class'a yapılan Prototyping
Customer.surname = "Deneme"
console.log(Customer.surname);

// Artık, constructorda da prototyping'i "this" sayesinde yaptığımız için oradaki verileri okuyabiliriz.
console.log(customer.customerNumber);

// Inheritance Kavramı
class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber) // super demek burada "Customer" demektir.
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber) // super demek burada "Customer" demektir.
        this.companyName = companyName;
  
    }
}