let button = document.querySelectorAll('button');
let inputScreen = document.querySelector('#screen');


button.forEach(btn => {

    btn.addEventListener('click', function () {

        switch (btn.value) {
            case 'del':
                let inputLength = inputScreen.value.length;
                inputScreen.value = inputScreen.value.slice(0, inputLength - 1);
                break;
            case 'reset':
                inputScreen.value = "";
                break;
            case '=':
                let result = eval(inputScreen.value);
                inputScreen.value = result.toLocaleString();
                break;
            default:
                inputScreen.value += btn.value;

        }

    })

});






