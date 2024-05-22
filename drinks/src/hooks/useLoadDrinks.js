import { useState, useEffect } from "react";
import { getDrinks } from "../helpers/getDrinks";

export const useLoadDrinks = (category) => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true)


    const listDrinks = async() => {
        const data = await getDrinks(category);
        setItems(data);
        setIsLoading(false);
    }


    useEffect( () => {
        listDrinks();
    }, []);

    return {
        items,
        isLoading
    }

}
