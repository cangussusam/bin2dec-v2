import { Converter } from "../logic/converter.js"
import { error, pattern } from "../view/error-mensage.js"

export class BinToDecController extends Converter {

    private binInput = document.querySelector('#bin') as HTMLInputElement
    private decInput = document.querySelector('#dec') as HTMLInputElement

    temp: boolean

    public binValue() {

        this.binVerifier(this.binInput)
        if (!this.temp) {
            error()
            return
        }
        pattern()

        const value = this.binToDec(this.binInput.value.toString())
        this.decInput.value = `${value}`
    }

    public decValue() {

        this.decVerifier(this.decInput)
        if (!this.temp) {
            error()
            return
        }
        pattern()

        const value = this.decToBin(parseInt(this.decInput.value))
        this.binInput.value = `${value}`
    }

    private binVerifier(input: HTMLInputElement) {

        this.temp = true
        const arrNumber = input.value.split("")

        arrNumber.forEach(num => {
            if (!(num === '1' || num === '0')) return this.temp = false
        })

        return this.temp
    }

    private decVerifier(input: HTMLInputElement) {

        this.temp = true
        const isNumber = parseInt(input.value)

        if (!isNumber) return this.temp = false

        return this.temp
    }

}

