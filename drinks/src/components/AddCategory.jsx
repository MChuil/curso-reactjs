import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [input, setInput] = useState('')

    const onInputChange = (event)=>{
        setInput(event.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault(); // cancelar la accion por defecto del formulario
        if(input.trim().length <= 2) return;
        onNewCategory(input.trim()) //retorna el valor del input del fomulario
        setInput('')
    }


    return (
        <form onSubmit ={ onSubmit }>
            <input type= "text"
                placeholder= "Buscar categoria"
                value = {input}
                onChange = { onInputChange } //ejemplo
            />
        </form>
    )
}
