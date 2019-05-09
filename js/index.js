const clockContainer = document.querySelector('.clock');
setInterval(() => clockContainer.innerText = clock(), 1000);

function clock() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let temporaryTime = "" + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
        temporaryTime = "12";
    temporaryTime += ((minute < 10) ? ":0" : ":") + minute;
    temporaryTime += ((second < 10) ? ":0" : ":") + second;
    temporaryTime += (hour >= 12) ? " P.M." : " A.M.";
    return temporaryTime;
}


const clockToggleButton = document.querySelector('.clockToggle');
clockToggleButton.addEventListener('click', clockToggle);

function clockToggle(e) {
    e.preventDefault();
    clockContainer.hidden = !clockContainer.hidden;
    clockToggleButton.innerText = clockContainer.hidden ? 'Show Clock' : 'Hide Clock';
}


const alertSignal = () => alert('enter the correct value in digits and in the the given renge!');
const widthCondition = () => 'Specify the width of the door in the range from 50 to 250 cm';
const heightCondition = () => 'Specify the width of the door in the range from 150 to 350 cm';


const display = document.querySelector('.display');
const calculation = document.querySelector('.calculation');
calculation.addEventListener('click', calculationPressed);

function calculationPressed(e) {
    e.preventDefault();

    alert('enter the initial data for the calculation!');
    let widthOfDoor = prompt(widthCondition());
    if (isNaN(widthOfDoor)) {
        alertSignal();
        widthOfDoor = prompt(widthCondition());
    }
    if (widthOfDoor < 50 || widthOfDoor > 250) {
        alertSignal();
        widthOfDoor = prompt(widthCondition());
    }

    let heightOfDoor = prompt(heightCondition());
    if (isNaN(heightOfDoor)) {
        alertSignal();
        heightOfDoor = prompt(heightCondition());
    }
    if (heightOfDoor < 150 || heightOfDoor > 350) {
        alertSignal();
        heightOfDoor = prompt(heightCondition());
    }
    const valueSteel = 200;
    display.value = widthOfDoor * heightOfDoor / 1000 * valueSteel;

}

document.querySelector('.exchange-rate').addEventListener('click', exchangeCourse);

function exchangeCourse(e) {
    e.preventDefault();
    const fromCurrency = 'USD';
    const toCurrency = 'UAH';
    const currKey = fromCurrency + '_' + toCurrency;
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=bc96fbecdf0ae1153061`)
        .then(response => response.json())
        .then(currency => {
            const rate = currency[currKey];
            document.querySelector('.converter output[name=curr-converted]')
                .innerText = rate.toFixed(2);
        });
}
