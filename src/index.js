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
};

function decode(expr) {
    let arr = [];
    let res = "";
    expr.split('').forEach((i,index,a) => {
      if(index !=0 && index % 10 == 0){
          arr.push(res);
          res = "";
      }
      i == '*'? res = res = " ":
      index % 2 != 0 && a[index - 1] == 1 && i == 0 ? res = res + ".":
      index % 2 != 0 && a[index - 1] == 1 && i == 1 ? res = res + "-": "";
    })
    arr.push(res);
    res = ""; 
    for(item of arr){
        item == " " ? res = res + " " : res = res + MORSE_TABLE[item];
    }
    return res;
}

module.exports = {
    decode
}