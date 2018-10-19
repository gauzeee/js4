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

function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) { 
        elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}
 
function mask(event) {
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
    
    if (def.length >= val.length) { 
        val = def;
    }
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) {
            this.value = "";
        }
    } else { 
        setCursorPosition(this.value.length, this);
    }
}

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
