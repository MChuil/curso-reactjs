export const getDrinks = async (category)=>{
    const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    const resp = await fetch(url);
    const { drinks } = await resp.json()
    const data = drinks.map( row =>({
            id: row.idDrink,
            title: row.strDrink,
            url: row.strDrinkThumb
        })
    )
    return data
}