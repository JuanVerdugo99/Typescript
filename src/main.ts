// console.log('Hello My Main');

// Number
// Explicito

let phone: number;
phone = 1;
phone = 54234567;
// phone = ''; // Error

//Inferido

let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error tipo de dato

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
// Explicito

let isPro: boolean;
isPro = true;
// isPro = 1;

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10;

// Strings
let userName: string = 'Juan Verdugo';
userName = "Carlos";
// userName = true; // Error tipo de dato
 
// Template String
// Uso de back-tick
let userInfo: string;
userInfo = `
    User Info:
    username: ${userName}
    firstname: ${userName + 'Salazar'}
    phone: ${phoneNumber}
    isPro: ${isUserPro}
`;

console.log('User Info', userInfo)

 