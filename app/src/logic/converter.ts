
export class Converter {

    protected binToDec(num: string){
        
        return num.split('').reverse().reduce(function (x, y, i) {
            return (y === '1') ? x + Math.pow(2, i) : x;
        }, 0);
    }

    protected decToBin(num: number){

        return num.toString(2)
    }

}