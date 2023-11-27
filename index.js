let display = document.getElementById('result');
    let array = [1, 6, 5, 6];
    let btnAdd = document.querySelector('[data-add]');

    btnAdd.addEventListener('click', sumOfNum);

    function sumOfNum(arr) {
        let sum = 0;
        let hasNumbers = false;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'number') {
                sum += arr[i];
                hasNumbers = true;
            }
        }
        if (hasNumbers) {
            display.innerText = `Sum of numbers: ${sum}`;
        } else {
            display.innerText = 'Provide only numbers';
        }
    }
