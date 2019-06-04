console.log("connected");

// !COME UP WITH LOGIC!!

// * quick way to provide compatibility based on name
// ?maybe based on the letters in your name...
// !will be same all the time

function calc() {
    // will change input to uppercase
    first = document.loveform.name1.value.toUpperCase();
    firstlength = document.loveform.name1.value.length;
    second = document.loveform.name2.value.toUpperCase();
    secondlength = document.loveform.name2.value.length;

    const loveCount = 0;

    // ?for loop?
    for (count=0; count < firstlength; count++) {
        letter1 = first.substring(count, count + 1);

        if (letter1 == 'L') loveCount += 2;
        if (letter1=='O') loveCount+=2;
        if (letter1=='V') loveCount+=2;



    }
}