// 1.2 condition (>, <, >=, <=, ==, !=, ===, !==) &&, || , if-else....

// if else conditionals:
var teaPrice = 15;
if(teaPrice < 10){
    console.log("Hmm mama cha dan taratari.");
}
else{
    console.log("atoo dam diya ami cha kabo na.");
} // atoo dam diya ami cha kabo na.

var teaPrice = 8;
if(teaPrice < 10){
    console.log("Hmm mama cha dan taratari.");
}
else{
    console.log("atoo dam diya ami cha kabo na.");
} // Hmm mama cha dan taratari.

var piziaPrice = 150 ;
if(piziaPrice > 140){
    console.log("Hmm mama amr pizia ta dan.");
}
else{
    console.log("atoo dam diya amar pizia lagbo na.");
} // Hmm mama amr pizia ta dan.

var otherLove = 5000000;
if(otherLove > 550000){
    console.log("taka thakla ami oo asi no problem.");
}
else{
    console.log("taka nai too amio nai it's simple.");
} // taka thakla ami oo asi no problem.


var otherLove = 5000000;
if(otherLove < 550000){
    console.log("taka thakla ami oo asi no probleme.");
}
else{
    console.log("taka nai too amio nai it's simple.");
} // taka nai too amio nai it's simple.


//  == related condition.

var picnicChada = 1000 ;
if(picnicChada == 1000){
    console.log("Ami thola oboshi picnic a jabo.");
}
else{
    console.log("Vai ami thola picnic a jabo na.");
} // Ami thola oboshi picnic a jabo.

// // !=(Not yeakul) relatade condition.

var picnicChada = 2500 ;
if(picnicChada != 2000){
    console.log("ai amount  hoila khala hoba r kono koth nai.");
}
else{
    console.log("ai amount na hoila khala hoba na desition final.");
} // ai amount  hoila khala hoba r kono koth nai.

// condition related true/false.

var jobPaiso = true;
var savingAmount = 500000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else{
    console.log("tor kopala biya nai");
} // Aso tomer jonno partri khuji


var jobPaiso = true;
var savingAmount = 50000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else{
    console.log("tor biya nai");
} // tor biya nai

var jobPaiso = false;
var savingAmount = 50000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else{
    console.log("kopala biya nai");
} //kopala biya nai


var jobPaiso = true;
var savingAmount = 500000;
if(jobPaiso == true || savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else{
    console.log("tor kopala biya nai");
} // Aso tomer jonno partri khuji


var jobPaiso = true;
var savingAmount = 50000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else if(jobPaiso == true){
    console.log("assa dackba koydin por ok");
}
else{
    console.log("tor kopala biya nai");
} // assa dackba koydin por ok


var jobPaiso = true;
var savingAmount = 500000;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else if(jobPaiso == true){
    console.log("assa dackba koydin por ok");
}
else{
    console.log("tor kopala biya nai");
} // Aso tomer jonno partri khuji


var jobPaiso = false;
var savingAmount = 500;
if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tomer jonno partri khuji");
}
else if(jobPaiso == true){
    console.log("assa dackba koydin por ok");
}
else{
    console.log("tor kopala biya nai");
} // tor kopala biya nai


// lotari..
var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);

// 1 real password related.

var pass = 12345;
if(pass == 12345){
    console.log("unlock");
}
else{
    console.log("please Try again");
} // unlock
// 2 vul password related.
var pass = 12345;
if(pass == 1234){
    console.log("unlock");
}
else{
    console.log("please Try again");
} // please Try againplease Try again