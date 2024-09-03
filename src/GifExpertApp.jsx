import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const  GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])
    
    const onAddCategory = () =>{
        // console.log('valorant')
        setCategories( [...categories, 'Valorant']);
        // setCategories(cat => [...categories, 'valorant 2'])
    }

    return(
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory setCategories = { setCategories }/>
            {/* listado de Gif */}
            <ol>
                { 
                categories.map(category =>{return <li key={category}> {category}</li>
                })
                }
            </ol>
                {/* gif item */}
        </>
    )
};