const container = document.querySelector('#container')
const colorPicker = document.querySelector('#colorpicker')
const sizeRange = document.querySelector('#size')


let color = 'black'
colorPicker.addEventListener('input', ()=>{
    color = colorPicker.value
})

let boardSize = sizeRange.value
sizeRange.addEventListener('input',()=>{
    boardSize = sizeRange.value
    generateBoxes()
    boxes = document.querySelectorAll('.box')
    document.querySelector('#sizetxt').textContent = `${sizeRange.value} x ${sizeRange.value}`
})

//Verify if the mouse is pressed to allow the user to draw
let mouseIsDown = false
document.body.addEventListener('mousedown', function(){mouseIsDown = true})
document.body.addEventListener('mouseup', function(){mouseIsDown = false})


const generateBoxes = () =>{
    container.innerHTML = ''
    for(let i = 0;i<boardSize;i++){
        const row = document.createElement('div')
        row.setAttribute('class','row')
        
        for(let j=0;j<boardSize;j++){
            const column = document.createElement('div')
            column.setAttribute('class','box')
            column.addEventListener('mouseover', ()=>{if(mouseIsDown){column.style.backgroundColor = color}})
            row.appendChild(column)
    }
    container.appendChild(row)
}}
generateBoxes()

let boxes = document.querySelectorAll('.box')
const erase = () =>{
    for(let g=0;g<boardSize**2;g++){
        boxes[g].style.backgroundColor = 'white'
    }
}