import { Converter } from "../logic/converter.js";
import { error, pattern } from "../view/error-mensage.js";
export class BinToDecController extends Converter {
    constructor() {
        super(...arguments);
        this.binInput = document.querySelector('#bin');
        this.decInput = document.querySelector('#dec');
    }
    binValue() {
        this.binVerifier(this.binInput);
        if (!this.temp) {
            error();
            return;
        }
        pattern();
        const value = this.binToDec(this.binInput.value.toString());
        this.decInput.value = `${value}`;
    }
    decValue() {
        this.decVerifier(this.decInput);
        if (!this.temp) {
            error();
            return;
        }
        pattern();
        const value = this.decToBin(parseInt(this.decInput.value));
        this.binInput.value = `${value}`;
    }
    binVerifier(input) {
        this.temp = true;
        const arrNumber = input.value.split("");
        arrNumber.forEach(num => {
            if (!(num === '1' || num === '0'))
                return this.temp = false;
        });
        return this.temp;
    }
    decVerifier(input) {
        this.temp = true;
        const isNumber = parseInt(input.value);
        if (!isNumber)
            return this.temp = false;
        return this.temp;
    }
}
