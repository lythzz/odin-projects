const display = document.querySelector('#display')
let firstNum = ''
let secNum = ''
let operator = ''
let total = ''


const updtDisplay = () =>{
    if(total===''){
    display.textContent = `${firstNum} ${operator} ${secNum}`
}else{
    if(typeof total == 'string'|| typeof total == 'NaN'){
        total = 'Syntax Error'
        display.textContent = total
    }else{
    display.textContent = Math.round(total * (10**(12-parseInt(total).toString().length))) / 10**(12-parseInt(total).toString().length)
}}
}

const calculate = ()=>{
    switch(operator){
        case '+':
            total = Number(firstNum) + Number(secNum)
            updtDisplay()
            break
        case '-':
            total = Number(firstNum) - Number(secNum)
            updtDisplay()
            break
        case 'x':
            total = Number(firstNum) * Number(secNum)
            updtDisplay()
            break
        case '/':
            if(secNum==0){
                total = 'SYNTAX ERROR'
                updtDisplay()
                break
            }
            total = Number(firstNum) / Number(secNum)
            updtDisplay()
            break
        case '^':
            total = Number(firstNum) ** Number(secNum)
            updtDisplay()
            break
    }
}

const setOp = (op) => {
    if(secNum===''){
    operator = op
    updtDisplay()
    }else{
        calculate()
        firstNum = total
        total = ''
        operator = op
        secNum = ''
        updtDisplay()
    }
}

const num = (num) => {
    if(total!==''){
        total = ''
        firstNum = ''
        secNum = ''
        operator = ''
        updtDisplay()
    }
    if(operator===''){
        if(firstNum.length<12){
        firstNum += num}
    }else{
        if(secNum.length<12){
        secNum += num}
    }
    updtDisplay()
}

const AC = () => {
    firstNum = ''
    secNum = ''
    operator = ''
    total = ''
    updtDisplay()
}
const C = () => {
    if(total!==''){
    
    }else {
        if(secNum===''){
            if(operator===''){
            firstNum = firstNum.slice(0,-1)
            updtDisplay()}

            else{
                operator = ''
                updtDisplay()
            }

        }else{
            secNum = secNum.slice(0,-1)
            updtDisplay()
        }
    }
}

const plusMinus = () =>{
    if(operator===''){
        firstNum = -firstNum}
    else{
        secNum = -secNum}

    updtDisplay()
}