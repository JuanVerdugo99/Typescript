// Void 
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstname);
    // return 'Hola'
}
showInfo({ id: 1, username: 'VERDUGO', firstname: 'JUAN' });
// Tipo Inferido
function showFormattedInfo(user) {
    console.log('User Info', "\n        id: " + user.id + "\n        firstname: " + user.firstname + "\n        lastname: " + user.lastname + "\n    ");
}
showFormattedInfo({ id: 1, firstname: 'VERDUGO', lastname: 'JUAN' });
// tipo void, como tipo de dato en variable
var unusable;
// unusable = null;  --> colocar "strict": false en tsconfig.json para poder hacer uso
unusable = undefined;
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) {
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
// ciclo infinito, programa nunca termina
