let zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; //numbers from 0 to 9
let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'] ; //numbers from 10 to 19
let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'] // numbers for tens

module.exports = function toReadable(number) {
    let num = number.toString();
    let length = num.length;
    let str = '';

// if the value contains 3 digits
    if (num[2]) {
        str += `${zeroToNine[num[0]]} hundred `
        if (num[1] == '1') { // if the second number is 1
            str += `${teens[num[length - 1]]} `
            return str.trim()
        }
    }

//if the number is two-digit and starts with 1
    if (length == 2 && num[0] == '1') { //
        str += `${teens[num[length - 1]]} `
        return str.trim()
    }

    let indexTens = num[2] ? 1 : 0

    if (num.length > 1 && num[indexTens] != '0') {
        str += `${tens[num[indexTens]]} `
    }


    if (num[length - 1] != '0') {
        str += `${zeroToNine[num[length - 1]]}`
    }


    if (length == 1 && num[0] == '0'){
        str += 'zero'
    }
    return str.trim()

}
