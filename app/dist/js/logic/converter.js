export class Converter {
    binToDec(num) {
        return num.split('').reverse().reduce(function (x, y, i) {
            return (y === '1') ? x + Math.pow(2, i) : x;
        }, 0);
    }
    decToBin(num) {
        return num.toString(2);
    }
}
