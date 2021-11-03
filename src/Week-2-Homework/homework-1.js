// Soru-1
function findPrime(...numbers) { // Birden fazla sayı alıp işleme sokacağımız için "rest" operatörünü kullandık.
    for (let i = 0; i < numbers.length; i++) {
        let controlValue = true;
        for (let j = 2; j <= numbers[i] / 2; j++) {
            if (numbers[i] % j == 0) {
                console.log(numbers[i] + " :asal sayı değildir.");
                controlValue = false;
            }
        }
        if (controlValue == true) {
            console.log(numbers[i] + " :asal sayıdır.");
        }
    }
}
findPrime(301, 5, 12, 50, 71, 90);

// Soru-2
function friendNumbers(number1, number2) {
    let sumOfnumber1Divisor = 0;
    let sumOfnumber2Divisor = 0;

    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            sumOfnumber1Divisor = sumOfnumber1Divisor + i;
        }
    }

    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            sumOfnumber2Divisor = sumOfnumber2Divisor + i;
        }
    }

    if (sumOfnumber2Divisor == number1 && sumOfnumber1Divisor == number2) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
    }
    else {
        console.log(number1 + " ve " + number2 + " : arkadaş sayı değillerdir.")
    }
}
friendNumbers(220, 284);

// Soru-3
console.log("Mükemmel sayılar listesi:");
for (let i = 1; i <= 1000; i++) {
    let divisorOfNumber = 0;
    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            divisorOfNumber = divisorOfNumber + j;
        }
    }

    if (divisorOfNumber == i) {
        console.log(i);
    }
}

// Soru-4
console.log("Asal sayılar listesi: ");
for (let i = 2; i <= 1000; i++) {
    let controlValue = true;
    for (let j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            controlValue = false;
            break;
        }
    }
    if (controlValue == true) {
        console.log(i);
    }
}
