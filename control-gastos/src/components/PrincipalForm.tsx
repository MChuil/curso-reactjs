
import { useMemo, useState } from "react"

export const PrincipalForm = () => {

    const [budget, setBudget] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setBudget(e.target.valueAsNumber)
    }

    const isValid = useMemo(()=> {
        const resp = isNaN(budget) || budget <= 0
        console.log(resp)
        return resp
    },[budget])

    return (
        <>
            <form className="space-y-5">
                <div className="flex flex-col space-y-5">
                    <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">Presupuesto</label>
                    <input 
                        type="number" 
                        id="budget" 
                        name="budget" 
                        placeholder="Definir presupuesto" 
                        className="w-full bg-white border border-gray-300 p-2 rounded-lg"
                        value={budget}
                        onChange={handleChange}/>
                </div>
                <input 
                    type="submit" 
                    value="Guardar"
                    className="bg-blue-500 hover:bg-blue-700 w-full uppercase text-center cursor-pointer 
                    text-white p-3 font-black disabled:opacity-40"
                    disabled ={isValid} />
            </form>
        </>
    )
}
