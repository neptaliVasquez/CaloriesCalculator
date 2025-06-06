import { useState } from "react"
import type { ChangeEvent } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types"

export default function Form(){

    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) =>{
        const isNumberField = ['category', 'calories'].includes(e.target.id);  

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    return(
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                <label className="font-bold" htmlFor="category">Categoria:</label>
                <select 
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"  
                    id="category" 
                    value={activity.category}
                    onChange={handleChange}
                >
                    {
                        categories.map(category =>(
                            <option 
                                value={category.id} 
                                key={category.id}
                            >
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label className="font-bold" htmlFor="name">Actividad</label>
                <input 
                    className="border border-slate-300 p-2 rounded-lg" 
                    type="text" 
                    id="name"
                    placeholder="Ej. Comida, Juego de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label className="font-bold" htmlFor="calories">Calorias</label>
                <input 
                    className="border border-slate-300 p-2 rounded-lg" 
                    type="nu,ber" 
                    id="calories"
                    placeholder="Calorias. Ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>
            <input 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                value="Guardar Comida o Ejercicio" 
            />
        </form>
    )
}