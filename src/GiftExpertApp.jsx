import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  
    const [categories, setCategories] = useState(['One punch']);

    const agregarCategoria = (newCategory)=>{
        
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }
  
    return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
            onNewCategory = { agregarCategoria }
        />

            { 
                categories.map(category =>(
                        <GifGrid 
                            category={category} 
                            key={category}/>
                    )
                ) 
            }

    </>
  )
}