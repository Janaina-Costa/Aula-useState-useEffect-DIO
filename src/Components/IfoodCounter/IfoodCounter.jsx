 import { useState, useEffect } from "react"

import '../IfoodCounter/IfoodCounter.css'


const IfoodCounter = ()=>{

    const [value, setValue] = useState(1)

    const [buttonStyle, setButtonStyle] = useState('counter-minus')

    const [darklight, setDarkLight] = useState('light')

    const [fontColor, setFontColor] = useState('font-color-padrao')


    useEffect(()=>{
        document.getElementById('moeda').innerHTML = `Total da compra: R$${3.00 * value}`
    },[value])


    function darkPage(){
        setDarkLight('dark')
        setFontColor('font-color')
    }
    function lightPage(){
        setDarkLight('light')
        setFontColor('font-color-padrao')
    }

    function down(){
        if(value >0){

            setValue(value - 1)
        }
        if(value <= 1){
            setButtonStyle('counter-minus-inative')
        }
            
    }

    function up(){
        setValue(value + 1)
        setButtonStyle('counter-minus')
    }
    return(
       
        <body className={darklight} >
            
        
            <button onClick={lightPage} className = 'btn-page'>Ligh</button>
            <button onClick={darkPage} className = 'btn-page'>Dark</button>


            <div className="container">
                
                <button className={buttonStyle} onClick={down}>-</button>
                <span className={fontColor}>{value}</span>
                <button className="counter-plus" onClick={up}>+</button>

            </div>  
                <h4 id="moeda">12,00</h4>
             
            </body> 
    )
}

export default IfoodCounter