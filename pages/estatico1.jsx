// import { useEffect } from "react"
// import { useState } from "react"

export default function Estatico1() {
    /* const [num, setNum] = useState(0)

    useEffect(() => {
        setNum(Math.random())
    }, []) */

    return (
        <div>
            <h1>Estático #01</h1>
            {/* <h2>num</h2> */}
        </div>
    )
}


// ao usar o Math.random teremos uma advertência pois o valor gerado no servidor será diferente do valor gerado no lado cliente. Uma solução é usar o useState e o useEffect
