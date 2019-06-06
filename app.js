console.log("connected");

// !COME UP WITH LOGIC!!

// * quick way to provide compatibility based on name
// ?maybe based on the letters in your name...
// !will be same all the time

function calc() {
    
    // will change input to uppercase
    first = document.loveForm.name1.value.toUpperCase();
    firstLength = document.loveForm.name1.value.length;
    second = document.loveForm.name2.value.toUpperCase();
    secondLength = document.loveForm.name2.value.length;

    const loveCount = 0;

    // ?for loop?
    for (count=0; count < firstLength; count++) {
        letter1 = first.substring(count, count + 1);

        if (letter1 == 'L') loveCount += 1;
        if (letter1=='O') loveCount+=3;
        if (letter1=='V') loveCount+=2;
        if (letter1=='I') loveCount+=4;
        if (letter1=='N') loveCount+=5;
        if (letter1=='G') loveCount+=7;
        if (letter1=='M') loveCount+=6;
        if (letter1=='E') loveCount+=8;
    }

    // ?another loop?
    for (count=0; count < secondLength; count++) {
        letter2 = second.substring(count, count+1);

        if (letter2 == 'L') loveCount += 1;
        if (letter2=='O') loveCount+=3;
        if (letter2=='V') loveCount+=2;
        if (letter2=='I') loveCount+=4;
        if (letter2=='N') loveCount+=5;
        if (letter2=='G') loveCount+=7;
        if (letter2=='M') loveCount+=6;
        if (letter2=='E') loveCount+=8;
    }

    var amount = 0;
    // !if statement... determine score, score should stay the same if same names entered

    if (loveCount > 0) amount = 2 - ((firstLength + secondLength)/2)
    if (loveCount > 5) amount = 10 - ((firstLength + secondLength)/2)
    if (loveCount > 10) amount = 20 - ((firstLength + secondLength)/2)
    if (loveCount > 15) amount = 30 - ((firstLength + secondLength)/2)
    if (loveCount > 20) amount = 40 - ((firstLength + secondLength)/2)
    if (loveCount > 25) amount = 50 - ((firstLength + secondLength)/2)
    if (loveCount > 30) amount = 60 - ((firstLength + secondLength)/2)
    if (loveCount > 35) amount = 70 - ((firstLength + secondLength)/2)
    if (loveCount > 40) amount = 80 - ((firstLength + secondLength)/2)
    if (loveCount > 45) amount = 90 - ((firstLength + secondLength)/2)
    if (loveCount > 50) amount = 100 - ((firstLength + secondLength)/2)
    if (loveCount > 55) amount = 110 - ((firstLength + secondLength)/2)

    // *if no names are entered give err
    if (firstLength == 0 || secondLength == 0) amount = "No Names Given";
    // round answers
    if (amount < 0) amount = 0;
    if (amount > 99) amount = 99;

    // !out of 100 percent!

    document.loveForm.output.value = amount + "%";
    console.log("calculating");
}