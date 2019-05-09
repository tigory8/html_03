


const clockContainer = document.querySelector('.clock');
setInterval( () => clockContainer.innerText = clock(), 1000);

function clock() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let tempTime = "" + ((hour > 12) ? hour - 12 : hour);
  if (hour == 0)
    tempTime = "12";
  tempTime += ((minute < 10) ? ":0" : ":") + minute;
  tempTime += ((second < 10) ? ":0" : ":") + second;
  tempTime += (hour >= 12) ? " P.M." : " A.M.";
  return tempTime;
}


const clockToggleButton = document.querySelector('.clockToggle');
clockToggleButton.addEventListener('click', clockToggle);

function clockToggle(e) {
    e.preventDefault();
    clockContainer.hidden = !clockContainer.hidden;  
    clockToggleButton.innerText = clockContainer.hidden ? 'Show Clock' : 'Hide Clock';
}


document.querySelector('.exchange-rate').addEventListener('click', exchangeCourse);

function exchangeCourse(e) {
    e.preventDefault();
    const fromCurrency = 'USD';
    const toCurrency = 'UAH';
    const currKey = fromCurrency + '_' + toCurrency;   
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=bc96fbecdf0ae1153061`)
        .then( response => response.json() )
        .then( currency => {
           const rate = currency[currKey];
           document.querySelector('.converter output[name=curr-converted]')
            .innerText = rate.toFixed(2);
        });
}