function compute() {
    let principal = document.querySelector('#principal').value
    let interest = document.querySelector('#rate').value
    let term = document.querySelector('#years').value
    let interestDue = +principal * (+interest/100) * +term;
    let payYear = +2021 + Number(term)
    
    let text = `<p>If you deposit $<mark>${principal}</mark.,\n at an interest rate of <mark>${interest}</mark>%,\nfor <mark>${term}</mark> years you will get interest of $<mark>${interestDue}</mark>,\nin the year <mark>${payYear}</mark>.</p>`
    
    let result = document.querySelector('#result')

    if (principal > 1 && term > 1) {
        result.innerHTML = ""
        result.innerHTML = text;
    } else {
        result.innerHTML = ""
        result.innerHTML = "<p>Please ensure an amount and term have been given\n and that they are positive numbers.</p>"
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
