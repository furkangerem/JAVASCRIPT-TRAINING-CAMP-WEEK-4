function addToCart(productName = "defaultValue", quantity) {
    console.log("Sepete Eklendi: " + productName + " Adet: " + quantity);
} //productName = "defaultValue" diye tanımlarsak eğer, hiçbir parametre göndermediğimizde başta tanımladığımız değeri default olarak kabul eder.

// JS tip güvenli bir dil olmadığı için her halükarda alttaki üç kod satırı da çalışacaktır.
addToCart();
addToCart("Elma", 10);
// Default veri tanımlanmış fonksiyona, eksik parametre yolladığımızda ne olur sorusunun cevabı aşağıdaki kod bloğundadır.
addToCart("15");

// Bir değişkeni fonksiyon olarak tanımlayabilir ve çağırabiliriz.
let sayHello = () => {
    console.log("Hello World");
}

sayHello();

let product1 = { productName: "Kivi", quantity: 5, unitPrice: 10 };

function addToCart2(product) {
    console.log("Ürün: " + product.productName);
    console.log("Adet: " + product.quantity);
    console.log("Fiyat: " + product.unitPrice);
}

addToCart2(product1);

// Değişkenler verinin türüne göre ikiye ayrılır: Değer ve Referans 
// Veri eğer sayısal ise: "Değer", Veri eğer obje ise: "Referans" tiptir.

// Referans tipi olan bir örnek.
let product2 = { productName: "Kivi", quantity: 5, unitPrice: 10 };
let product3 = { productName: "Kivi", quantity: 5, unitPrice: 10 };
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);

// Değer tipi olan bir örnek
let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2 = 100;
console.log(sayi1);

function addToCart4(products) {
    console.log(products);
}

let products = [
    { productName: "Kivi", quantity: 5, unitPrice: 10 },
    { productName: "Karpuz", quantity: 5, unitPrice: 10 },
    { productName: "Ananas", quantity: 5, unitPrice: 10 }
]

addToCart4(products); // "..." operatörüne "rest" operatörü deniyor. 

function add(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    console.log(total);
}
// NOT: Rest operatörünün yanında başka değişkenler kullanılacaksa MUTLAKA ama MUTLAKA rest operatörü EN SONA yazılmalıdır.
add(20, 30);
add(20, 30, 40);
add(20, 30, 40, 50);

let numbers = [30, 10, 500, 600, 120]
console.log(Math.max(...numbers));

// React'e başlangıç

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "35M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Yozgat"],
        ["İstanbul", "Çanakkale"],
        ["Sinop", "Trabzon"]
    ]
]

//console.log(icAnadolu);
//console.log(marmara.name);
console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity = ({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 })
console.log(newProductName);