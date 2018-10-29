export function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.querySelector('#select'),
        totalValue = document.querySelector('#total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || this.value == '' || restDays.value == '0' || this.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            sumWithOptions();
        }
    });

    persons.addEventListener('input', function(event) {
        this.value = `${this.value.replace(/\D/g, "")}`;
    });

    restDays.addEventListener('input', function() {
        this.value = `${this.value.replace(/\D/g, "")}`;
    });

    restDays.addEventListener('change', function(event) {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || this.value == '' || this.value == '0' || persons.value == '0') {
            totalValue.innerHTML = 0;
        } else {
            sumWithOptions();
        }
    });

    place.addEventListener('change', function(event) {
        sumWithOptions();
    });

    function sumWithOptions() {
        let target = document.querySelector('#select');
        if (restDays.value == '' || persons.value == '' || restDays.value == '0' || persons.value == '0') {
            totalValue.innerHTML = 0;
            total = 0;
        } else {
            let a = (+persons.value + +restDays.value) * 4000;
            totalValue.innerHTML = a * (target.options[target.selectedIndex].value);
        }
    }
}