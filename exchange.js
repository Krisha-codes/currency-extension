document.addEventListener('DOMContentLoaded', function (){
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const apiKey = 'RkOJgJObqSyEv3OgQDmcEGtO10vU14QiZRK2DX7P';
    const apiUrl = 'https://api.api-ninjas.com/v1/exchangerate?pair=';

    convert.addEventListener('click', function(){
        const amountValue = amount.value;
        const currencyValue = currency.value;

        fetch(apiUrl + currencyValue + '_USD', {
            headers: { 'X-Api-Key': apiKey}
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const rate = data.exchange_rate;
            const resultPrice = (amountValue*rate).toFixed(2);
            result.textContent = `${amountValue} ${currencyValue} = ${resultPrice} USD`;
        })
        .catch(error => {
            result.textContent = 'Error fetching exchange rate';
            console.error(error);
        });
    });
});