console.log("connected");

// !COME UP WITH LOGIC!!

// * quick way to provide compatibility based on name
// ?maybe based on the letters in your name...
// !will be same all the time

function calc() {
    // will change input to uppercase
    first = document.loveform.name1.value.toUpperCase();
    firstLength = document.loveform.name1.value.length;
    second = document.loveform.name2.value.toUpperCase();
    secondLength = document.loveform.name2.value.length;

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
}