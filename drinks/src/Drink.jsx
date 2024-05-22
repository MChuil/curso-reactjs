import { useState } from "react"
import { AddCategory, Grid } from "./components"

export const Drink = () => {

    
    const [categories, setCategories] = useState([])

    const addCategory = (newCategory) => {
        if(categories.includes(newCategory)){ //valida que exista en el array
            alert(`La categoria: ${newCategory}, ya existe`)
            return;
        }
        setCategories([newCategory, ...categories])
    }

    
    return (
        <div>
            <h1>Drinks</h1>
            
            <AddCategory onNewCategory = { event => addCategory(event) } />
                
            { categories.map( category => ( 
                    <Grid 
                        key = { category } 
                        category= { category } /> 
            )) }

        </div>

    )
}
