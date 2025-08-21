var cl = console.log;
//alert("hello js");
//1   How many characters are in the string "JavaScript"?
let str1 = "JavaScript";
var result = `How many characters are in the string "JavaScript" =` + str1.length;
info1 = document.getElementById("info1").innerHTML = result;
cl(result);

///2    What letter is at position 4 in "OpenAI"?
let str2 = "OpenAI";
var result = `What letter is at position 4 in "OpenAI" = `+ (str2.charAt(3));
info2 = document.getElementById("info2").innerHTML = result;
cl(result);

//3   Convert the string "hello" entirely to uppercase letters. What is the result?
let str3 = "hello";
var result = `Convert the string "hello" entirely to uppercase letters = `+ (str3.toUpperCase("hello"));
info3 = document.getElementById("info3").innerHTML = result;
cl(result);


//4 Does "Hello world" begin with "Hello"?
let str4 = "Hello";
var result = `Hello world" begin with "Hello"= `+ (str4. startsWith("Hello"));
info4 = document.getElementById("info4").innerHTML = result;
cl(result);

//5 Remove any spaces before or after " Hello ". What remains?
let str5 = " Hello ";
var result = `Remove any spaces before or after " Hello " = `+ (str5. trim(" Hello "));
info5 = document.getElementById("info5").innerHTML = result;
cl(result);


//6 Find the position of the first "a" in "banana". What is the index?
let str6 = "banana";
var result = `Find the position of the first "a" in "banana" = `+(str6.lastIndexOf("a"));
info6 = document.getElementById("info6").innerHTML = result;
cl(result);

//7 Check if "JavaScript" contains the word "Script". Is it true or false?
let str7 = "JavaScript"
var result = `  Check if "JavaScript" contains the word "Script" = `+ (str7.includes("Script"));
info7 = document.getElementById("info7").innerHTML = result;
cl(result);

//8 Repeat the word "repeat" three times in a row without spaces. What do you get?
let str8 = "repeat";
var result = `Repeat the word "repeat" three times in a row without spaces = `+ (str8.repeat(3));
info8 = document.getElementById("info8").innerHTML = result;
cl(result);

// 9 What letter is at the third position in "apple"?
let str9 = "apple";
var result = `What letter is at the third position in "apple" = `+ (str9.charAt(2));
info9 = document.getElementById("info9").innerHTML = result;
cl(result);


//10  Change all letters in "Bat" to lowercase. What is the output?
let str10 = "Bat";
var result = `Change all letters in "Bat" to lowercase = `+ (str10. toLowerCase("Bat"));
info10 = document.getElementById("info10").innerHTML = result;
cl(result);


//11 Break "apple,banana,grape" into parts wherever there is a comma. What array do you get?
let str11 = "apple,banana,grape";
var result = `Break "apple,banana,grape" into parts wherever there is a comma = `+ (str11.split(","));
info11 = document.getElementById("info11").innerHTML = result;
cl(result);

//12   Remove spaces from either end of " JavaScript " and then change all letters to lowercase.
let str12 = " JavaScript ";
var result =`Remove spaces from either end of " JavaScript " and then change all letters to lowercase = `
			+(str12.trim(" JavaScript ").toLowerCase("JavaScript"));
info12 = document.getElementById("info12").innerHTML = result;
cl(result);


//13 Find where "ss" first appears in "Mississippi". What is the position?
let str13 = "Mississippi";
var result = ` Find where "ss" first appears in "Mississippi" = `+ (str13.indexOf("ss"));
info13 = document.getElementById("info13").innerHTML = result;
cl(result);


//14 Extract letters from position 3 up to but not including position 6 in "Programming". Which letters?
let str14 = "Programming";
var result = `Extract letters from position 3 up to but not including position 6 in "Programming" = `
			+ (str14.slice(3,6));
info14 = document.getElementById("info14").innerHTML = result;
cl(result);


//15    Does "hello world" begin with "wor"? Answer true or false.

str15 = "hello";
var result = `Does "hello world" begin with "wor" = `+(str15.startsWith("wor"));
info15 = document.getElementById("info15").innerHTML = result;
cl(result);


//16 What is the last letter in "ChatGPT"?
str16= "ChatGPT";
var result = `What is the last letter in "ChatGPT" = `+ (str16.charAt(6));
info16 = document.getElementById("info16").innerHTML = result;
cl(result);

//17 Replace "World" with "JavaScript" in "Hello World". What does the sentence become?
str17 = "Hello World";
var result = `Replace "World" with "JavaScript" in "Hello World"  = `+ (str17.replace("World", "JavaScript"));
info17 = document.getElementById("info17").innerHTML = result;
cl(result);

// 18   Add zeroes to the start of "12345" until the string is 8 characters long. What is the resulting string?
str18 = "12345";
var result = `Add zeroes to the start of "12345" until the string is 8 characters long = `
			+(str18.padStart(8, 0));
			cl(result);
info18 = document.getElementById("info18").innerHTML = result;


///19 What is the numerical character code of the first letter in "javaScript is fun"?
str19 = "javaScript is fun";
var result = `What is the numerical character code of the first letter in "javaScript is fun" = `
			+ (str19.charCodeAt(0));
info19 = document.getElementById("info19").innerHTML = result;
cl(result)

//Extract the letters starting from position 1 up to position 3 in "OpenAI". Which letters?
str20 = "OpenAI";
var result = `Extract the letters starting from position 1 up to position 3 in "OpenAI" = `
			+ (str20.slice(1, 3));
info20 = document.getElementById("info20").innerHTML = result;		
cl(result);
			
///21 Split "Sun-Mon-Tue" at the dashes, then choose the second item in the list. What is it?
str21 = "Sun-Mon-Tue";
var result = `Split "Sun-Mon-Tue" at the dashes, then choose the second item in the list = `
			+ (str21.split("-")[1]);
info21 = document.getElementById("info21").innerHTML = result;	
cl(result);


//22  Count how many words there are in "Hello from the other side" when splitting by spaces.
//How many?
str22 = "Hello from the other side";
var result = `Count how many words there are in "Hello from the other side" when splitting by spaces = `
			+(str22.split(" ").length);
info22 = document.getElementById("info22").innerHTML = result;	
cl(result);


//23  Remove spaces before and after " test string " and measure how long the result is. What length?
str23 = " test string " 
var result = `Remove spaces before and after " test string " and measure how long the result is = `
			+ (str23.trim(" test string " ));
info23 = document.getElementById("info23").innerHTML = result;	
cl(result)


///24  Find the last position of the letter "a" in "banana". What is it?
str24 = "banana";
var result = `Find the last position of the letter "a" in "banana" = `+ (str24.lastIndexOf("a"));
info24 = document.getElementById("info24").innerHTML = result;	
cl(result)

//25    Does "abc123" include the exact substring "ABC"? Yes or no?
str25 = "abc123";
var result = `Does "abc123" include the exact substring "ABC" = `+(str25.includes("ABC"));
info25 = document.getElementById("info25").innerHTML = result;	
cl(result);

//26    Extract the letters between position 2 and 4 in the string "abcdef". Which letters?
str26 = "abcdef" 
var reuslt =`   Extract the letters between position 2 and 4 in the string "abcdef" = `
			+(str26.slice(2, 4));
info26 = document.getElementById("info26").innerHTML = result;	
cl(reuslt)


//27    Change all spaces in "a b c" to underscores. What does the string become?
str27 = "a b c";
var result27 = str27.split(' ').join('_');
info27 = document.getElementById("info27").innerHTML = result27;
cl(result27);

//28 Change all letters in "Amazing!" to lowercase. What is the output?
str28 = "Amazing!";
var result28 = str28.toLowerCase("Amazing!");
info28 = document.getElementById("info28").innerHTML = result28;
cl(result28);

///29    Break "foo|bar|baz" apart at the vertical bars. How many parts do you get?
str29 = "foo|bar|baz";
var result29 = str29.split('|').length;
info29 = document.getElementById("info29").innerHTML = result29;
cl(result29);


///30  Join "Hello", " " and "World" together into one string. What is it?
str30 = "";
var result30 = str30.concat("Hello",  " ",  "World");
info30 = document.getElementById("info30").innerHTML = result30;
cl(result30);

//31 Change "quick" to "slow" within the string "quick brown fox". What is the new string?
str31 = "quick brown fox";
var result31 = str31.replace("quick", "slow");
info31 = document.getElementById("info31").innerHTML = result31;
cl(result31);


///32    Find how many times the letter "a" occurs in "abracadabra". How many times?
str32 = "abracadabra";
var result32 = str32.split('a').length-1;
info32 = document.getElementById("info32").innerHTML = result32;
cl(result32);


//33    Add stars to "Cat" to increase its length to 5 characters total. What does it look like?
str32 = "Cat";
var result33 = str32.padStart(5, "*");
info33 = document.getElementById("info33").innerHTML = result33;
cl(result33);


//34 Count the total number of letters in "supercalifragilisticexpialidocious". What number?
str34 ="supercalifragilisticexpialidocious";
var result34 = str34.length;
info34 = document.getElementById("info34").innerHTML = result34;
cl(result34); 


///35    Find the middle letter in "abcde". Which one?
str35 = "abcde";
let middleIndex = Math.floor(str35.length/2);
let result35 = str35[middleIndex];
info35 = document.getElementById("info35").innerHTML = result35;
cl(result35);


///36    Does "Mocha" end with "cha"? Answer true or false.
str36 = "Mocha";
var result36 = str36.includes("cha");
info36 = document.getElementById("info36").innerHTML = result36;
cl(result36);

/// 37  Take the last two characters from "2021 12 31". What are these?
str37 = "2021 12 31";
var result37 = str37.split(' ').pop();
info37 = document.getElementById("info37").innerHTML = result37;
//let lastcharacters = split('');
cl(result37);

///38     What is the length of an empty string ""?
str38 ="";
var result38 = str38.length;
info38 = document.getElementById("info38").innerHTML = result38;
cl(result38);

///39    Remove spaces only from the start of the string " spaced ". What remains?
str39 = " spaced ";
var result39 = str39.trimStart(" spaced ");
info39 = document.getElementById("info39").innerHTML = result39;
cl(result39);


//  40 In the string "appleapple", what letter is at position 3?
let str40 = "appleapple";
let result40 = str40.split("")[2];
info40 = document.getElementById("info40").innerHTML = result40;
cl(result40);

//41    Find how many "a" characters are in "abracadabra". Number?
let str41 ="abracadabra";
let result41 = str40.split("a").length-1;
info41 = document.getElementById("info41").innerHTML = result41;
cl(result41);


//42 Convert "Lörem Ïpsum" to a form that separates letters and accents. How might it look?
let str42 = "Lörem Ïpsum";
let result42 = str42.split("");
info42 = document.getElementById("info42").innerHTML = result42;
cl(result42);


//43    Replace number sequences in "hello123bye" with a "#". What is the result?
// let str43 = "hello123bye";
// let result43 = str43)


//44    What is the code number for the emoji at the start of "😀face"?
let str44 = "😀face";
let result44 = str44.charCodeAt("😀");
info44 = document.getElementById("info44").innerHTML = result44;
cl(result44);

//45    Simplify "one two two three three three" by removing consecutive duplicate words. Result?
let str45 = "one two two three three three";
let result45 = str45.split(" ");
// let result1=[words[0]];
// for (let i= 1; i<words.length; i++){
	// if(words[i]) !==words [i-1]){
		// result1.push(words[i]);
	// }
// }
// let strjoin = result1.join(" ");
info45 = document.getElementById("info45").innerHTML = result45;
cl(result45);


//45 What is the length after trimming spaces and non-breaking spaces in " \u00A0Hi\u00A0 "?
let str46 = " \u00A0Hi\u00A0 "
let result46 = str46.trimEnd(" \u00A0Hi\u00A0 ").length;
info46 = document.getElementById("info46").innerHTML = result46;
cl(result46);

///46  Replace all forms of "the" with "a" in "The cat sat on the mat". Result?
let str47 = "The cat sat on the mat";
let result47 = str47.replace("the","a");
info47 = document.getElementById("info47").innerHTML = result47;
cl(result47); 


//48 Separate "foo,bar,baz" at commas. What list results?
let str48 = "foo,bar,baz" ;
let result48 = str48.split(",");
info48 = document.getElementById("info48").innerHTML = result48;
cl(result48); 

//49    Take the last 3 letters of "OpenAI". What are they?

let str49 = "OpenAI" ;
let result49 = str49.slice(3, 6);
info49 = document.getElementById("info49").innerHTML = result49;
cl(result49); 

//50  Reverse the letters of "abba". What is the result?
let str50 = "abba";
let result50 = str50.split("").reverse().join("");
info50 = document.getElementById("info50").innerHTML = result50;
cl(result50);