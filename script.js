function changeColor(btn) {

if (btn.innerText === 'On') {
    btn.innerText = 'Off';
    btn.style.backgroundColor = 'red';
    } else {
        btn.innerText = 'On';
        btn.style.backgroundColor = 'green';
    }
}