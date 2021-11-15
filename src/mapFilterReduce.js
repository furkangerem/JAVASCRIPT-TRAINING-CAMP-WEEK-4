let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
    { id: 3, productName: "Kalem", quantity: 1, unitPrice: 200 },
    { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
    { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
    { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 },
]

// Map fonksiyonu for gibi dolaşmasını sağlar. 
// Sepeti dolaş, her bir "product" için productName'i ekrana yaz demektir.
cart.map(product => {
    console.log(product.productName + " " + product.unitPrice * product.quantity);
})

// Tüm değerleri topluyor. Buradaki "0" "acc"nin başlangıç değeridir.
// "acc" toplam fiyatı hesaplıyor.
let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)

console.log(total)

// Filtreleme komutudur. Yeni bir array oluşturmak için genellikle kullanılır.
let quantitiyOver2 = cart.filter(product => product.quantity > 2)
console.log(quantitiyOver2);

function addToCart(cart) {
    cart.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 })
}

addToCart(cart)
console.log(cart)

// Yukarıdaki örnekte, "Array" bir "REFERANS" tipi olduğu için sonradan fonksiyon ile bir parametre eklediğimizde toplam halini gösterir.
// Lakin aşağıdaki örnekte "INT" bir "DEĞER" tipi olduğu için sonradan fonksiyon ile bir parametre eklediğimizde ilk halini gösterir.

let sayi = 10;
function sayiTopla(number) {
    number += 1;
}

sayiTopla(sayi);
console.log(sayi);