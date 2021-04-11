function compute() {
    let principal = document.querySelector('#principal').value
    let interest = document.querySelector('#rate').value
    let term = document.querySelector('#years').value
    let interestDue = +principal * (+interest/100) * +term;
    let payYear = +2021 + Number(term)
    
    let text = `If you deposit $${principal},\n at an interest rate of ${interest}%,\nfor ${term} years you will get interest of $${interestDue},\nin the year ${payYear}.`
    
    let result = document.querySelector('#result')

    if (principal && term) {
        result.innerHTML = ""
        result.textContent = text;
    } else {
        result.innerHTML = ""
        result.textContent = "Please ensure an amount and term have been given."
    }
    
}

const formButton = document.querySelector('#form-button')
formButton.addEventListener('click', (e) => {
    e.preventDefault()
    compute()
})

const rateValueInput = document.querySelector('#rate')
rateValueInput.addEventListener('change', () => {
    updateIntRate();
})


function updateIntRate() {
    const rateValue = document.querySelector('#rate');
    const rateText = document.querySelector('#rate-value'); 
    rateText.innerHTML = `${rateValue.value}%`;
}

updateIntRate();
