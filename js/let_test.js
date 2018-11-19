console.log('#### global ####')
console.log('globalVar: ' + globalVar);
try {
    console.log('globalLet: ' + globalLet);
} catch (exception) {
    console.log('globalLet: ' + exception);
}


console.log('set variables');
var globalVar = 'globalVar';
let globalLet = 'globalLet';
console.log('globalVar: ' + globalVar);
console.log('globalLet: ' + globalLet);


function functionScoped() {
    console.log('function scoped');
    console.log('functionVar: ' + functionVar);
    try {
        console.log('functionLet: ' + functionLet);
    } catch (exception) {
        console.log('functionLet: ' + exception);
    }

    console.log('set variables');
    var functionVar = 'functionVar';
    let functionLet = 'functionLet';

    console.log('functionVar: ' + functionVar);
    console.log('functionLet: ' + functionLet);
}


function blockScoped() {
    console.log('block scoped');
    console.log('blockVar: ' + blockVar);
    try {
        console.log('blockLet: ' + blockLet);
    } catch (exception) {
        console.log('blockLet: ' + exception);
    }

    for (var blockVar = 'blockVar', blockIndex = 0; blockIndex < 1; blockIndex++) {
        console.log('blockVar: ' + blockVar);
    }

    for (let blockLet = 'blockLet', blockIndex = 0; blockIndex < 1; blockIndex++) {
        console.log('blockLet: ' + blockLet);
    }

    console.log('blockVar: ' + blockVar);
    try {
        console.log('blockLet: ' + blockLet);
    } catch (exception) {
        console.log('blockLet: ' + exception);
    }

}

functionScoped();
blockScoped();
// console.log('functionVar: ' + functionVar);