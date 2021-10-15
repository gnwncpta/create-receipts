const alphabet = [ 
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
    "W", "X", "Y", "Z"
];

const partial = {
    first: "TLW",
    secondPart: 1,
    thirdPart: {
        char: { index: 0 },
        number: 1
    },
}

// TLW0001A001

function createSecondID(){
    let number = "";

    if(partial.secondPart.toString().length === 1) number = `000${partial.secondPart}`;
    else if(partial.secondPart.toString().length === 2) number = `00${partial.secondPart}`;
    else if(partial.secondPart.toString().length === 3) number = `0${partial.secondPart}`;
    else number = partial.secondPart;

    // Update the number
    partial.secondPart += 1;

    return number;
}

function createThirdID(){
    const alph = alphabet[partial.thirdPart.char.index];
    let number = "";

    if(partial.thirdPart.number.toString().length === 1) number = `000${partial.thirdPart.number}`; 
    else if(partial.thirdPart.number.toString().length === 2) number = `00${partial.thirdPart.number}`;
    else if(partial.thirdPart.number.toString().length === 3) number = `0${partial.thirdPart.number}`;
    else number = partial.thirdPart.number;
    
    // Update the number
    partial.thirdPart.number += 1;

    // Update the index
    partial.thirdPart.char.index += 1;

    // If index reached the maximum, reset to zero
    if(partial.thirdPart.char.index === 26) partial.thirdPart.char.index = 0;

    return `${alph}${number}`;
}

function randomAlphabet(){
    const a = Math.floor(Math.random() * 25);
    const b = Math.floor(Math.random() * 25);
    const c = Math.floor(Math.random() * 25);

    return `${alphabet[a]}${alphabet[b]}${alphabet[c]}`;
}

function ID({ identity, secondStart, thirdStart }){

    partial.secondPart = secondStart > 0 ? secondStart : 1;
    partial.thirdPart.number = thirdStart > 0 ? thirdStart : 1;
    
    const secondID = createSecondID();
    const thirdID = createThirdID();
    const randomAlpha = randomAlphabet();
    const result = `${identity}-${secondID}-${randomAlpha}-${thirdID}`;

    return result;

}

function Timestamp(){
    const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    const date = new Date().getDate();
    const Month = new Date().getMonth() + 1;
    const Year = new Date().getFullYear();

    const Hours = new Date().getHours();
    const Minutes = new Date().getMinutes();

    return `${date} ${months[Month]} ${Year} ${Hours}:${Minutes}`;
}

function Total(items){
    const prices = [];
    items.forEach(item => prices.push(item.price));

    return prices.reduce((total, num) => total + num);
}

module.exports = { ID, Timestamp, Total };