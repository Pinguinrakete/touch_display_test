const switchContainer = document.getElementById('switchContainer');
const SWITCH_COUNT = 8;
const ESP32_IP = "192.168.1.50";

for (let i = 1; i <= SWITCH_COUNT; i++) {
    const card = document.createElement('div');
    card.className = 'card';

    const btn = document.createElement('div');
    btn.className = 'div-green-btn off';
    btn.innerText = 'Off';
    btn.dataset.led = i;

    btn.addEventListener('pointerdown', e => {
        e.preventDefault();
        toggleLed(btn);
    });

    const txt = document.createElement('div');
    txt.className = 'div-green-txt';
    txt.innerText = `Schalter ${i}`;

    card.appendChild(btn);
    card.appendChild(txt);
    switchContainer.appendChild(card);
}


function toggleLed(btn) {
    const isOff = btn.innerText === 'Off';
    const newState = isOff ? 1 : 0;

    // ESP32 Request kommt später
    // fetch(`http://${ESP32_IP}/led?nr=${ledNr}&state=${newState}`);

    if (newState === 1) {
        btn.innerText = 'On';
        btn.style.backgroundColor = 'green';
    } else {
        btn.innerText = 'Off';
        btn.style.backgroundColor = 'red';
    }
}