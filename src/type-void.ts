// Void 

// Tipo explicito
function showInfo(user:any): any {
    console.log('User Info', user.id, user.username, user.firstname )
    // return 'Hola'
}

showInfo({id:1, username: 'VERDUGO', firstname: 'JUAN'});

// Tipo Inferido
function showFormattedInfo(user: any) {
    console.log('User Info', `
        id: ${user.id}
        firstname: ${user.firstname}
        lastname: ${user.lastname}
    `);
}

showFormattedInfo({id:1, firstname: 'VERDUGO', lastname: 'JUAN'})

// tipo void, como tipo de dato en variable
let unusable: void;
// unusable = null;  --> colocar "strict": false en tsconfig.json para poder hacer uso
unusable = undefined;

// Tipo: Never
function handleError(code: number, message: string):never{
    // Process your code here
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, 'Not Found')
} catch (error) {
}

function sumNumbers(limit: number):never {
    let sum = 0;
    while(true) {
        sum++;
    }
    // return sum;
}

sumNumbers(10);
// ciclo infinito, programa nunca termina

