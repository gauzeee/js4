export function form() {
    // Form

    let message = {
        loading: '<img src="img/ajax-loader.gif"></img>',
        success: '<img src="img/handshake.png"></img>',
        failure: '<img style="width: 50px;" src="img/error.png"></img>'
    };

    let tel1 = document.querySelector('#tel1'),
        tel = document.querySelector('#tel');

    tel1.addEventListener('input', function() {
        this.value = `+${this.value.replace(/\D/g, "")}`;
    });
    tel.addEventListener('input', function() {
        this.value = `+${this.value.replace(/\D/g, "")}`;
    });
    
    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('.contact-form'),
        input = document.querySelectorAll('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');


    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();

                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function() {
                            if (request.readyState < 4) {
                                resolve();
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 300) {
                                    resolve();
                                }
                            } else {
                                reject();
                            }
                        }
                        request.send(data);
                    });
                }
                function clearInput() {
                    for(let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => statusMessage.innerHTML = message.success)
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput)
        });
        }

    sendForm(form);
    sendForm(contactForm);
}