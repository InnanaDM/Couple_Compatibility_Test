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

        if (letter1 == 'U') loveCount += 1;
        if (letter1=='S') loveCount+=3;
        if (letter1=='E') loveCount+=2;
        if (letter1=='L') loveCount+=4;
        if (letter1=='O') loveCount+=5;
        if (letter1=='V') loveCount+=7;
        if (letter1=='E') loveCount+=6;
    }

    // ?another loop?
}