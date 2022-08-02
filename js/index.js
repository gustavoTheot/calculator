/**
 * pegar a classe dos atributos do html (display, buttonNumber, buttonOperator, buttonResult, allCelar)
 * criar uma variavel para parar o calculo
 * criar uma variavel para o operador
 * 
*/
const display = document.querySelector('#displayInput')

const buttonResult = document.querySelector('.result')
const buttonNumber = document.querySelectorAll('.number')
const buttonOperator = document.querySelectorAll('.operator')

const allClear = document.querySelector('.allClear')

let operator = ''
let stoped = false

let calcValues = 0


/**
 * criar o botão de apagar tudo
 */
allClear.addEventListener('click', ()=>{
    display.value = ''
})


/*
 * 
 * percorrer todos os botões de número e pegar os seu valores
 *  aidiconar a função de click nesses botões
 *      verificar se o calculo está parado
 *          se não tiver:
 *              adicionar o valor no display
 *          se tiver: 
 * 
 */

buttonNumber.forEach((num) => {
    num.addEventListener('click', () => {
        if(!stoped){
            display.value += num.value
            console.log('stoped if number', stoped)
        }else{
            display.value = ''
            stoped = false
            operator = ''

            display.value += num.value
            console.log('stoped else number', stoped)
        }
    })
})




/*
 * 
 * percorrer todos os botões de operador e pegar seus valores
 *  aidiconar a função de click nesses botões
 *      comparar os valores dos operadores e atribuir o real valor do operador
 *      verificar se o calculo está parado
 *          se não tiver:
 *          se tiver:
 */

buttonOperator.forEach((op) => {
    op.addEventListener('click', ()=> {
        if(display.value == ''){
            display.value = 0
        }

        if(operator == ''){
            operator = op.value
            display.value += op.value
            console.log('stoped if vazio op', stoped)
        }else{
            myResult()
            display.value += op.value
            operator = op.value
            stoped = false
            console.log('stoped else op',stoped)
        }
    })
})



/*
 * adicionar função botão de resultado
 *  verificar se o calculo está parado
 *      se não:
 *          separar o operador dos valores
 *          
 *          criar um switch pegando o operador
 *              fazer um case verificando cada operador e fazendo sua operação
 * 
 *          manda para o calculo 
 * 
 * 
*/

function myResult(){
    if(!stoped){

        number = display.value.split(operator)

        if (number[1] == "") {
            display.value += 0;
            number[1] = 0;
        }

        switch (operator){
            case '+':
                display.value = Number(number[0]) + Number(number[1])
                break
            case '-':
                display.value = Number(number[0]) - Number(number[1])
                break
            case 'x':
                display.value = Number(number[0]) * Number(number[1])
                break
            case '/':
                display.value = Number(number[0]) / Number(number[1])
                break
            case '%':
                display.value = Number(number[0]) /100
                break
            case 'x²':
                display.value = Number(number[0])**2
                break
        }

        console.log(number)
    }
}

buttonResult.addEventListener('click', myResult)







/*
1 - adicionar o primeiro número
2 - adicionar o operar
3 - adicionar o segundo numero
4 - caso eu venho adicionar mais um operador, o valores anteriores é resolvido conforme seu operador
5 - resoltado anterior 
6 - adicionar o operador
7 - adicionar o segundo numero
 */

/* para ta igual a false adiciona um número -> para igual a falso adiciona um operador -> para igual a falso adiciona outro número -> se display tiver diferente de vazio ->            */

/**
 * se parar for falso adicione um nummero
 * se parar for falso adicione um operador
 * se parar for falso adicione outro numero
 * se parar for falso adicione um operador e parar para verdadeiro
 * 
 */












































/*
const display = document.querySelector('#displayInput')

const buttonNumber = document.querySelectorAll('.number')
const buttonOperator = document.querySelectorAll('.operator')
const buttonResult = document.querySelector('.result')

const allClear = document.querySelector('.allClear')

let stoped = false

let valueKey = 0
let operator = 0

let calcValues = 0
let historic = 0


// limpar o display
allClear.addEventListener('click', () => {
    display.value = ''
})


// botões dos números
buttonNumber.forEach((key) => {
    key.addEventListener('click', () => {
        if(!stoped){
            valueKey = Number(key.value)
            display.value += valueKey
            console.log('stoped == true')
        }else{
            display.value += Number(key.value)
            console.log('stoped == false')
        }
    })
})


// botões dos operadores
buttonOperator.forEach((key) => {
    key.addEventListener('click', () => {
        if(display.value == ""){
            display.value = 0
        }else{
            operator = key.value
            display.value += operator
            stoped = false
            console.log(operator)
        }
    })
})


// botão do resultado
buttonResult.addEventListener('click', () => {
    if(!stoped){
        valueCalcString = display.value.split(operator)

        let valueCalcNumber = []

        valueCalcString.forEach((value) => {
            valueCalcNumber.push(Number(value))
        })

        console.log(valueCalcNumber)


        valueCalcNumber.reduce((op, i)=>{
            switch (operator) {
                case "+":
                    viewDisplay = display.value = op+i
                    calcValues = viewDisplay
                    break;

                case "-":
                    viewDisplay = display.value = op-i
                    calcValues = viewDisplay

                    break;
        
                case "x":
                    viewDisplay = display.value = op*i
                    calcValues = viewDisplay
                    break;
        
                case "/":
                    viewDisplay = display.value = op/i
                    calcValues = viewDisplay
                    break;

                case "%":
                    viewDisplay = display.value = op/100
                    calcValues = viewDisplay
                    break;

                case "x²":
                    viewDisplay = display.value = op**2
                    calcValues = viewDisplay
                    break;
            } 
    
            stoped = true
            return calcValues
        })
    }

})
*/













