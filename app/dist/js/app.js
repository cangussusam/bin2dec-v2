import { BinToDecController } from "./controller/binToDecController.js";
const controller = new BinToDecController;
const binInput = document.querySelector('#bin');
if (binInput) {
    binInput.addEventListener('input', function () {
        controller.binValue();
    });
}
const decInput = document.querySelector('#dec');
if (decInput) {
    decInput.addEventListener('input', function () {
        controller.decValue();
    });
}
