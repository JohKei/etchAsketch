//For this to work i need:

//a sketch field
    const sketchEl = document.querySelector("#drawContainer")
//color mode button
    const colorBtn = document.querySelector("#colorModeBtn")
//black&white mode button
    const blackBtn = document.querySelector("#blackModeBtn")
//clear button
    const clearBtn = document.querySelector("#clearBtn")
//px scale input starting from x16 (means 16² div px) to 100px
    const scaleInput = document.querySelector("#scaleInput")
//p element showing current px settings
    const showScaleValueEl = document.querySelector("#scaleValue")
//updateScaleValue() -> onchange
    scaleInput.addEventListener("input", updateScaleValueEl, false)

    function updateScaleValueEl(){
        showScaleValueEl.textContent = `${scaleInput.value} x ${scaleInput.value}`
    }
//createPX function()
    //check value
    //create scaleInput.value row divs
    //add .pxRow class to each row
    //create scaleInput.value pxDivs in each row div -> 
    //add .px class to each pxDiv
    //add #px for each .px (#px = px ID)
//randomRgbValue() function
    function createRandomNumber(){
    return Math.floor(Math.random()*255)
    }
//createRandomColor() function
    //rgb(
    //    random(0-255),random(0-255),random(0-255)
    //)
    function createRandomRgbValue(){
        console.log(createRandomNumber(),createRandomNumber(),createRandomNumber())
    }
//color mode function()
    // if colorBtn active
        //listen to hover over each #px
        //#px.style.backgroundColor="createRandomColor"
//black&white function()
    //if blackBtn active
        //listen to hover over each #px
        //#px.style.backgroundColor="rgb(0,0,0) = black"
//clear function()
    //set all divs background back to white
//hoverDiv function() -> change all .px color based on mode
    //hover over 


