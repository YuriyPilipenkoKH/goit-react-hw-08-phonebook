import {  useState } from "react"


export const useRandomColor = () => {
    const [color, setColor] = useState('')
    const colorChange = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor)
        // console.log('color',color)
    }
    return {color, colorChange}
}



