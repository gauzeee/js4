class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(text) {
        let div = document.createElement('div');
        div.textContent = `${text}`;
        div.style.cssText = `height: ${this.height}; width: ${this.width}; 
                            background-color: ${this.bg}; font-size: ${this.fontSize}; 
                            text-align: ${this.textAlign};`;
        document.body.appendChild(div);
    }
}

let hello = new Options('100px', '100px', '#afafaf', '25px', 'center'),
    hi = new Options('200px', '500px', 'yellow', '30px', 'center');
hello.createDiv('Hello World!');
hi.createDiv('Oh, Hi!');


let input = document.querySelector(".tel"),
    matrix = "+7 (___) ___-__-__";
input.value = matrix;

function mask(event) {
    let i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

     if (def.length >= val.length) { 
        val = def;
    } 
    this.value = matrix.replace(/./g, function(a) {
        if (/[_\d]/.test(a) && i < val.length) {
           return val.charAt(i++);
        } else {
            if (i >= val.length) {
               return '';
            } else {
                return a;
            }
        }
    });
    if (event.type == "blur") {
        if (this.value.length <= 2) {
            this.value = matrix;
        }
    }
}

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
