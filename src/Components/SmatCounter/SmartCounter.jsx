import { useState } from "react"

const SmartCouter = ()=>{
    const [quantity, upQuantity] = useState(100)

    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={()=>upQuantity(quantity + 1)}> Aumentar</button>
            <button onClick={()=>upQuantity(quantity - 1)}> Diminuir</button>
        </>
    )
}

export default SmartCouter