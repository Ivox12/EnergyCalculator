

// captura botoes
const buttons = document.querySelectorAll(".contador_partida > div > button, .contador_partida > div > div > button")

// pecorre os botes
buttons.length > 0 && buttons.forEach(function(button) {
    // add event de click no botoes
   button.addEventListener("click", handleclick)
})
 
// captura o input2
const input = document.querySelector("#input2")

function handleclick(event){
    const button = event.currentTarget
    const value = button.getAttribute('data-value')    

    const inputValue = input.value || 0

   

    switch(value){
        case '+1':
            input.value = Number(inputValue) + 1
            break 
        case '+2':
            input.value =  Number(inputValue) + 2
            break
        case '+3':
            input.value =  Number(inputValue) + 3
            break
         case '+4':
            input.value =  Number(inputValue) + 4
            break
        case '-1':
            input.value = Number(inputValue) - 1
            break 
        case '-2':
            input.value = Number(inputValue) - 2
            break
        case '-3':
            input.value = Number(inputValue) - 3
            break
        case '-4':
            input.value = Number(inputValue) - 4
            break
        case 'new_game':
            input.value = '3'
            break
        case 'end':
            input.value = Number(inputValue) + 2
            break
    }
    // validando minimo 0 energia
    if( inputValue < 0) {
        //alert('minimo de 0 energia')
        input.value = 0
        return
    }
    //validando maximo 10 energia
    else if (inputValue >10){
        //alert ('maximo de 10 energias')
        input.value = 10
        return
    }
}