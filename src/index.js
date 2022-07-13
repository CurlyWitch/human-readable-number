module.exports = function toReadable (number) {
    const before20 = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    const decimalForm = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    if (number in before20) {
        return before20[number];
    }

    const numberString = number.toString();
    const length = number.toString().length;

    const decimal = function(numberStr) {
        return decimalForm[numberStr[0]] + (numberStr[1] == 0 ? '' : ' ' +  before20[numberStr[1]]);
    }

    if(length == 2) {
        return decimal(numberString);
    }

    if(length == 3) {
        const decimalNumber = numberString.substr(1);
        if(+decimalNumber == 0) {
            return before20[numberString[0]] + ' hundred';
        }

        return before20[numberString[0]] + ' hundred ' + (+decimalNumber in before20 ? before20[+decimalNumber] : decimal(decimalNumber));
    }
}