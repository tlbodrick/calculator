// calculator functionality

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






let radio = document.querySelectorAll('.radio');

for (let btn of radio) {
    btn.addEventListener('change', function () {
        if (btn.checked) {

            if (btn.id === 'radio2') {


                // add v2 classlist
                document.body.classList.add('v2');
                document.querySelector('#screen').classList.add('v2');
                document.querySelector('#keypad').classList.add('v2');
                document.querySelector('.equal').classList.add('v2');
                document.querySelector('.toggle').classList.add('v2');
                document.querySelector('.ball').classList.add('v2');

                let allBalls = document.querySelectorAll('.ball');

                for (let i = 0; i < allBalls.length; i++) {
                    allBalls[i].classList.add('v2');
                }


                let allKeys = document.querySelectorAll('.key');

                for (let i = 0; i < allKeys.length; i++) {
                    allKeys[i].classList.add('v2');
                }

                let allAccKeys = document.querySelectorAll('.acc-key');

                for (let i = 0; i < allAccKeys.length; i++) {
                    allAccKeys[i].classList.add('v2');
                }

                //remove additional classlists
                let v3 = document.querySelectorAll('.v3');
                for (let i = 0; i < v3.length; i++) {
                    v3[i].classList.remove('v3');
                }


            } else if (btn.id === 'radio3') {

                //add v3 classlist
                document.body.classList.add('v3');
                document.querySelector('#screen').classList.add('v3');
                document.querySelector('#keypad').classList.add('v3');
                document.querySelector('.equal').classList.add('v3');
                document.querySelector('.toggle').classList.add('v3');


                let allBalls = document.querySelectorAll('.ball');
                for (let i = 0; i < allBalls.length; i++) {
                    allBalls[i].classList.add('v3');
                }

                let allKeys = document.querySelectorAll('.key');

                for (let i = 0; i < allKeys.length; i++) {
                    allKeys[i].classList.add('v3');
                }

                let allAccKeys = document.querySelectorAll('.acc-key');

                for (let i = 0; i < allAccKeys.length; i++) {
                    allAccKeys[i].classList.add('v3');
                }

                //remove additional classlists
                let v2 = document.querySelectorAll('.v2');
                for (let i = 0; i < v2.length; i++) {
                    v2[i].classList.remove('v2');
                }

            } else {
                //remove additional classlists
                let v2 = document.querySelectorAll('.v2');
                for (let i = 0; i < v2.length; i++) {
                    v2[i].classList.remove('v2');
                }

                let v3 = document.querySelectorAll('.v3');
                for (let i = 0; i < v3.length; i++) {
                    v3[i].classList.remove('v3');
                }

            }
        }
    })
}

