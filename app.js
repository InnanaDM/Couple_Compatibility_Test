console.log("connected");

// !COME UP WITH LOGIC!!

// * quick way to provide compatibility based on name
// ?maybe based on the letters in your name...
// !will be same all the time

function calc() {
    
    // will change input to uppercase
  
    var first = document.loveForm.name1.value.toUpperCase();
   var firstLength = document.loveForm.name1.value.length;
    var second = document.loveForm.name2.value.toUpperCase();
    var secondLength = document.loveForm.name2.value.length;

    var loveCount = 0;

    // ?for loop?
    var count;
    for (count=0; count < firstLength; count++) {
        letter1 = first.substring(count, count + 1);

        if (letter1=='L') loveCount += 2;
        if (letter1=='O') loveCount+=2;
        if (letter1=='V') loveCount+=2;
        if (letter1=='E') loveCount+=2;
        if (letter1=='Y') loveCount+=3;
        if (letter1=='O') loveCount+=1;
        if (letter1=='U') loveCount+=3;
    }

    // ?another loop?
    for (count=0; count < secondLength; count++) {
        letter2 = second.substring(count, count+1);

        if (letter2 == 'L') loveCount += 2;
        if (letter2=='O') loveCount+=2;
        if (letter2=='V') loveCount+=2;
        if (letter2=='E') loveCount+=2;
        if (letter2=='Y') loveCount+=3;
        if (letter2=='O') loveCount+=1;
        if (letter2=='U') loveCount+=3;
    }

    var amount = 0;
    // !if statement... determine score, score should stay the same if same names entered

    if (loveCount> 0) amount=  5-((firstLength+secondLength)/2)
if (loveCount> 2) amount= 10-((firstLength+secondLength)/2)
if (loveCount> 4) amount= 20-((firstLength+secondLength)/2)
if (loveCount> 6) amount= 30-((firstLength+secondLength)/2)
if (loveCount> 8) amount= 40-((firstLength+secondLength)/2)
if (loveCount>10) amount= 50-((firstLength+secondLength)/2)
if (loveCount>12) amount= 60-((firstLength+secondLength)/2)
if (loveCount>14) amount= 70-((firstLength+secondLength)/2)
if (loveCount>16) amount= 80-((firstLength+secondLength)/2)
if (loveCount>18) amount= 90-((firstLength+secondLength)/2)
if (loveCount>20) amount=100-((firstLength+secondLength)/2)
if (loveCount>22) amount=110-((firstLength+secondLength)/2)


    // if (loveCount > 0) amount = 2 - ((firstLength + secondLength)/2)
    // if (loveCount > 5) amount = 10 - ((firstLength + secondLength)/2)
    // if (loveCount > 10) amount = 20 - ((firstLength + secondLength)/2)
    // if (loveCount > 15) amount = 30 - ((firstLength + secondLength)/2)
    // if (loveCount > 20) amount = 40 - ((firstLength + secondLength)/2)
    // if (loveCount > 25) amount = 50 - ((firstLength + secondLength)/2)
    // if (loveCount > 30) amount = 60 - ((firstLength + secondLength)/2)
    // if (loveCount > 35) amount = 70 - ((firstLength + secondLength)/2)
    // if (loveCount > 40) amount = 80 - ((firstLength + secondLength)/2)
    // if (loveCount > 45) amount = 90 - ((firstLength + secondLength)/2)
    // if (loveCount > 50) amount = 100 - ((firstLength + secondLength)/2)
    // if (loveCount > 55) amount = 110 - ((firstLength + secondLength)/2)

    // *if no names are entered give err
    if (firstLength == 0 || secondLength == 0) amount = "No Names Given";
    // round answers
    if (amount < 0) amount = 0;
    if (amount > 99) amount = 99;

    if (firstLength == secondLength) amount = "100";

    // !out of 100 percent!

    document.loveForm.output.value = amount + "%";
    console.log("calculating");
}