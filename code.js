function adjust(ware,change){
    var elem_amount = document.getElementsByClassName(ware)[0];
    
    var amount = parseInt(elem_amount.innerHTML);
    
    if(amount+change < 0)
        return;
    
    elem_amount.innerHTML = amount+change;
    checkIfOver();
}

function checkIfOver(){

    var wares = document.getElementsByClassName('amount ware');
    var numWares=0;
    for(var i =0; i < wares.length;i++)
        numWares += parseInt(wares[i].innerHTML);
    
    var status = document.getElementsByClassName('status')[0];
    statusStrWares = '';
    if(numWares>10){
        for(var i =0; i < wares.length;i++){
            if(parseInt(wares[i].innerHTML)>0)
               wares[i].classList.add('warning');
            else
                wares[i].classList.remove('warning');
        }
        var s = (numWares-10) !== 1 ? 's':'';
        statusStrWares = `-${numWares-10} ware${s}`;  
    }
    else{
        for(var i =0; i < wares.length;i++)
            wares[i].classList.remove('warning');
        var s = numWares !== 1 ? 's':'';
        statusStrWares = `${numWares} ware${s}`;
    }
    
    var coins = document.getElementsByClassName('coins')[0];
    var numCoins = parseInt(coins.innerHTML);
    statusStrCoins = '';
    if(numCoins >3){
        var s = numCoins !== 1 ? 's':'';
        coins.classList.add('warning');
        statusStrCoins += `-${numCoins-3} coin${s}`;
    }
    else{
        statusStrCoins += `${numCoins} coins`;
        coins.classList.remove('warning');
    }
    
    var statusWares = document.querySelector('.status > .w');
    statusWares.innerHTML = statusStrWares;
    if(numWares>10)
        statusWares.classList.add('warning');
    else
        statusWares.classList.remove('warning');
        
        
    var statusCoins = document.querySelector('.status > .c');
    statusCoins.innerHTML = statusStrCoins;
    if(numCoins>3)
        statusCoins.classList.add('warning');
    else
        statusCoins.classList.remove('warning');
}

