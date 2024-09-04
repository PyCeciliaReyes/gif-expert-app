import { useState } from "react";
import { AddCategory, GifGrid, Switch } from "./components";

export const  GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])
    
    const onAddCategory = ( newCategory) =>{
        if (categories.includes(newCategory)) return;
        //console.log(newCategory);
        //console.log('valorant')
        //setCategories( [...categories, 'Valorant']);
        //setCategories(cat => [...categories, 'valorant 2'])
        setCategories([newCategory, ...categories])
    }

    return(
        <>
            <h2>Gif Expert App</h2>
            
            <AddCategory 
                //setCategories = { setCategories }
                onNewCategory = {event => onAddCategory( event)} 
            />

            
            { 
                categories.map( ( category ) => (
                    <GifGrid key={category} category={category}/>
                    // <div key={ category }>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li>
                    // </div>
                ))
            }
        </>
    )
};