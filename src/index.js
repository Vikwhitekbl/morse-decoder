const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****':  ' ',
};

function decode(expr) {
    // write your solution here
    const letter = expr.match(/.{1,10}/g);
    const symb = letter.map(letter => letter.match(/.{1,2}/g));
    const objKey = {'00': '', '10': '.', '11': '-', '**': '*'};

    const masKey = symb.map(subArray => [subArray.map(key => objKey[key]).join('')]);

    for (let i = 0; i < masKey.length; i += 1) {
        for (let j = 0; j < masKey[i].length; j += 1) {
            if (MORSE_TABLE.hasOwnProperty(masKey[i][j])) {
                masKey[i][j] = MORSE_TABLE[masKey[i][j]];
            }
        }
    }
    const subResult = masKey.flat();
    const result = subResult.join('');
    return result
}

module.exports = {
    decode
}