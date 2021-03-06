const clockContainer = document.querySelector('.clock');
setInterval(() => clockContainer.innerText = clock(), 1000);

function clock() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let temporaryTime = "" + ((hour > 12) ? hour - 12 : hour);
    if (hour === 0)
        temporaryTime = "12";
    temporaryTime += ((minute < 10) ? ":0" : ":") + minute;
    temporaryTime += ((second < 10) ? ":0" : ":") + second;
    temporaryTime += (hour >= 12) ? " P.M." : " A.M.";
    return temporaryTime;
}

const alertSignal = () => alert('enter the correct value in digits and in the given renge!');
const widthCondition = () => 'Specify the width of the door in the range from 70 to 250 cm';
const heightCondition = () => 'Specify the height of the door in the range from 180 to 350 cm';


const display = document.querySelector('.display');
const calculation = document.querySelector('.calculation');
calculation.addEventListener('click', calculationPressed);

const valueSteel = 400;
const valueMDF = 270;

function calculationPressed(e) {
    e.preventDefault();

    alert('enter the initial data for the calculation!');
    let widthOfDoor = prompt(widthCondition());
    if (isNaN(widthOfDoor) || widthOfDoor === '') {
        alertSignal();
        widthOfDoor = prompt(widthCondition());
    }
    if (widthOfDoor < 70 || widthOfDoor > 250) {
        alertSignal();
        widthOfDoor = prompt(widthCondition());
    }

    let heightOfDoor = prompt(heightCondition());
    if (isNaN(heightOfDoor) || heightOfDoor === '') {
        alertSignal();
        heightOfDoor = prompt(heightCondition());
    }
    if (heightOfDoor < 180 || heightOfDoor > 350) {
        alertSignal();
        heightOfDoor = prompt(heightCondition());
    }

    let valueofDoor;
    let typeOfDoor;
    typeOfDoor = prompt('Please specify the type of door: MDF or Steell').toLowerCase();
    if (typeOfDoor === 'steell') {
        valueofDoor = valueSteel;
    }
    else {
        valueofDoor = valueMDF;
    }

    let currency = prompt('Please specify the currency of settlement, example: USD and push dutton Cource').toLocaleUpperCase();

    let square = widthOfDoor * heightOfDoor;


    let costOfDoor = square / 1000 * valueofDoor;

    display.value = costOfDoor + ' ' + 'UAH';


    document.querySelector('.exchange-rate').addEventListener('click', exchangeCourse);

    function exchangeCourse(e) {
        e.preventDefault();
        let fromCurrency = currency;
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

}
