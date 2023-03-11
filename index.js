//For this to work i need:
    let colorMode = true
    let blackMode = false
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
        showScaleValueEl.textContent = `${scaleInput.value}px x ${scaleInput.value}px`
        removeChild()
        createPx()
        checkMode()
    }
//updateScaleValueEl() to end and then call removeChild() & createPx()
    updateScaleValueEl()
//remove Childs function
    function removeChild(){
        while (sketchEl.firstChild){
            sketchEl.removeChild(sketchEl.firstChild)
        }
    }
//createPX function()
    //create scaleInput.value row divs
    //add .pxRow class to each row
    //create scaleInput.value pxDivs in each row div -> 
    //add .px class to each pxDiv
    //add #px for each .px (#px = px ID)
    function createPx(){
        let idNum = 0
        for (let i = 0; i<scaleInput.value; i++){
            let pxRow = document.createElement("div")
            pxRow.classList.add("pxRow")
            sketchEl.appendChild(pxRow)
            for (let i = 0; i <= scaleInput.value; i++){
                let pxDiv = document.createElement("div")
                pxDiv.classList.add("px")
                pxDiv.setAttribute("id", `a${idNum}`)
                pxRow.appendChild(pxDiv)
                idNum++
            }
        }
    }
//createRandomColor() function
        //randomRgbValue() function
    //rgb(
    //    random(0-255),random(0-255),random(0-255)
    //)
    function createRandomRgbValue(){
        function createRandomNumber(){
            return Math.floor(Math.random()*255)
            }
        return `${createRandomNumber()},${createRandomNumber()},${createRandomNumber()}`
    }
//color mode function()
    // if colorBtn active
        //listen to hover over each #px
        //#px.style.backgroundColor="createRandomColor"
    function colorModeFunc(){
        const target = document.getElementsByClassName("px")
        for (const px of target){
            px.addEventListener("mouseover", ()=>{
                id= px.id
                document.getElementById(id).style.backgroundColor=`rgb(${createRandomRgbValue()})`
            })
        }
    }
//black&white function()
    //if blackBtn active
        //listen to hover over each #px
        //#px.style.backgroundColor="rgb(0,0,0) = black"
    function blackModeFunc(){
        const target = document.getElementsByClassName("px")
        for (const px of target){
            px.addEventListener("mouseover", ()=>{
                id= px.id
                document.getElementById(id).style.backgroundColor=`rgb(0,0,0)`
            })
        }
    }
//clear 
    clearBtn.addEventListener("click", ()=>{
    updateScaleValueEl()
})
//Check mode function
//default should be color mode
//if colorMode active (active == true) add class (btnActive) to colorBtn
//check wether colorMode or BlackMode is active and return those functions
    
    colorBtn.addEventListener("click", () =>{
        colorMode = true
        blackMode = false
        colorBtn.classList.add("btnActive")
        blackBtn.classList.remove("btnActive")
        checkMode()
    })
    blackBtn.addEventListener("click", () =>{
        colorMode = false
        blackMode = true
        colorBtn.classList.remove("btnActive")
        blackBtn.classList.add("btnActive")
        checkMode()
    })
    function checkMode (){
        if (colorMode == true){
            colorBtn.classList.add("btnActive")
            blackBtn.classList.remove("btnActive")
            colorModeFunc()
        }else if (blackMode == true){
            blackModeFunc()
            colorBtn.classList.remove("btnActive")
            blackBtn.classList.add("btnActive")
        }
    }




