
document.getElementById('balance-input').addEventListener('keyup',function(confirmInput){
    const deleteBtn = document.getElementById('balance-add');
    const inputValue = confirmInput.target.value;
    

    if(inputValue > 50){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled', true)
    }
})

document.getElementById('balance-add').addEventListener('click', function() {
    const inputValus = document.getElementById('balance-input')
    const recentTreanjectionArea = document.getElementById('tran-list');
    const inputValu = inputValus.value 

    
    const p = document.createElement('p')
    p.innerText = inputValu
    p.classList.add('recent-texts')
    recentTreanjectionArea.appendChild(p)
    inputValus.value = ''
    const oldBalance = document.getElementById('restBalance');
    let oldBalanceValue = oldBalance.innerText
    let sumBalance = parseInt(inputValu) + parseInt(oldBalanceValue);
    oldBalance.innerText = sumBalance   

})

document.getElementById('refund-btn').addEventListener('click', function () {
    const oldBalance = document.getElementById('restBalance');
    let oldBalanceValue = oldBalance.innerText
    const lastRtra = document.getElementById('tran-list').lastChild
    lastRtra.style.display = 'none'
    let restOldbalance = parseInt(oldBalanceValue);
    let lastBalance = parseInt(lastRtra.innerText);
    let sum = restOldbalance - lastBalance;
    const sumOldBalance = document.getElementById('restBalance');
    sumOldBalance.innerText = sum


})

