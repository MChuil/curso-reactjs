import { GridItem } from "./GridItem";
import { useLoadDrinks } from "../hooks/useLoadDrinks";

export const Grid = ({ category }) => {
    const { items, isLoading } =  useLoadDrinks( category )

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading ? ( <p>Cargando...</p>) : null
            }
            <div className="card-grid">
                {
                    items.map(({id, title, url}) => (
                        <GridItem  
                            key= { id }
                            title = {title}
                            url = {url}
                        />
                    ))
                }
            </div>
            
        </>
    )
}
