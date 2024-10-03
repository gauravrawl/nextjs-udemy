import { getMeals } from "../../../../lib/meals"

export default async function Something({params}){
    const meals = await getMeals()
    console.log('Server component', meals)
    return(
        <>
            {meals.map((d, idx)=>(
                <div key={d?.id}>
                <p >{d?.slug}</p>
                <p>{d?.summary}</p>
                </div>
            ))} 
        </>
    )
}