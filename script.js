const wrapButton = document.querySelector('.wrap_button');

wrapButton.addEventListener('click', sum);

function sum() {
    event.preventDefault();
    const wrapFirstNumber = document.querySelector('.wrap_first_number');
    const wrapSecondNumber = document.querySelector('.wrap_second_number');

    const div = document.createElement('div');
    div.className = "result";
    div.innerHTML = `Результат: ${summury()} `;
    const wrap = document.querySelector('.wrap');
    const elem = wrap.appendChild(div);

    wrapButton.disabled = true;

    const button = document.createElement('button');
    button.className = "result_button";
    button.innerHTML = 'ok';
    const elemButton = div.appendChild(button);

    elemButton.addEventListener('click', close);
    function close() {
        elem.remove();
        wrapButton.disabled = false;
    }

    function summury() {
        const a = +wrapFirstNumber.value;
        const b = +wrapSecondNumber.value;
        const c = (a + b).toFixed(1);
        return c;
    }
    return elem;
}




