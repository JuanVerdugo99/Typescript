// console.log('Hello My Main');
// Number
// Explicito
var phone;
phone = 1;
phone = 54234567;
// phone = ''; // Error
//Inferido
var phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error tipo de dato
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo: Boolean
// Explicito
var isPro;
isPro = true;
// isPro = 1;
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10;
// Strings
var userName = 'Juan Verdugo';
userName = "Carlos";
// userName = true; // Error tipo de dato
// Template String
// Uso de back-tick
var userInfo;
userInfo = "\n    User Info:\n    username: " + userName + "\n    firstname: " + (userName + 'Salazar') + "\n    phone: " + phoneNumber + "\n    isPro: " + isUserPro + "\n";
console.log('User Info', userInfo);
