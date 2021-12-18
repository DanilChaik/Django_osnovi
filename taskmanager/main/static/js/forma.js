let form = document.forms[0];
let inputs = form.querySelectorAll("div.validate-input .input");
form.noValidate = true; 
form.onsubmit = form_submit;

for (let input of inputs) {
    input.onfocus = input_focus;
    input.onblur = input_blur;
}

function input_focus() {
    let div = this.parentElement;
    div.classList.remove("alert-validate");
}

function input_blur() {
    let div = this.parentElement;
    if (this.validity.valid)
        div.classList.remove("alert-validate");
    else
        div.classList.add("alert-validate");
}

function form_submit(event) {
    if (form.checkValidity())
        return;
    for (let input of inputs)
        input.dispatchEvent(new FocusEvent("blur"));
    return false;
}