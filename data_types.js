/*
JavaScript has several built-in data types, which can be broadly categorized into two main groups: 
1.Primitive data types:
2.Oject (Non-primitive) data types:


Lets discuss them one by one
1.Primitive Data Types:

i) Number:
Represents numeric values they can be either integers(positive negative) or floating (decimal)numbers.
eg: var num1 = 42;
eg: var num2 = -25;
eg: var num3 = 36.215;
eg: var num4 = -2.6635;

ii) String:
Represents sequences of characters (text).
eg: var text = "Hell World!";
eg: var appo = "Sorry,Hello World!😂";


iii) Boolean:
Represents a logical value of either true or false.
eg: var isTrue = true;

iv) Undefined:
Represents a variable that has been declared but not assigned a value.

eg: var undefinedVar;


v) Null:

Represents the intentional absence of any object value.
javascript
Copy code
eg: var nullVar = null;


vi) Symbol:

Introduced in ECMAScript 6 (ES6), symbols are unique and immutable primitive values, often used as identifiers for object properties.
javascript
Copy code
var symbol = Symbol("unique");

vii) Bigint:
BigInt is another data type introduced in ECMAScript 2020 (ES11) to represent arbitrarily large integers. It allows you to work with integers beyond the range that can be accurately represented using the Number type.
eg:
const bigInteger = BigInt("900719925474099112345n");
console.log(bigInteger); // Output: 900719925474099112345n

You can also use the n suffix to denote a BigInt literal:
eg:
const anotherBigInteger = 1234567890123456789012345678901234567890n;
console.log(anotherBigInteger); // Output: 1234567890123456789012345678901234567890n

One important thing to note is that BigInts and Numbers are not the same, and you cannot perform arithmetic operations directly between them. You need to explicitly convert one of them to the other if needed:
eg:
const bigIntValue = 10n;
const numberValue = 5;

const result = bigIntValue + BigInt(numberValue);
console.log(result); // Output: 15n

BigInts are particularly useful when dealing with very large integers, such as those found in cryptographic operations, mathematical calculations, or situations where precision matters beyond the limits of the regular Number type.







*/