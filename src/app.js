console.log("Hello World!");

// Degisken tanimlarken "var" yerine bundan sonra hep "let" kullanacagiz!
// "var" degiskeni global bir degiskendir. Disaridan kod blogu cagirdigimizda ayni isme sahip iki degisken varsa degelerini degistirir. Bu da hata almamiza neden olur.

/* "var" ile "let" farki bu ornektedir.

    var dolarDun = 9.20
    {
        var dolarDun = 9.10
    }
    console.log("dolarDun");

    // 9.20 olarak tanimlanmis olan degiskenimiz, 9.10 olarak degistirilecektir. Parantez icerisinde belirtilen kisim disaridan gelen bir kod blogu olabilir.
    // "let" ile yapmis olsaydik eger,

    let dolarDun = 9.20
    {
        let dolarDun = 9.10
    }
    console.log("dolarDun");

    // dolarDun degerimiz degismeyecek ve gene ekrana 9.20 olarak yazdirilacakti. Bu nedenden dolayi "var" yerine hep "let" kullanmaliyiz.
*/

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"];

for(let i=0; i<konutKredileri.length; i++){
    console.log(konutKredileri[i]);
}