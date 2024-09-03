import { useState } from "react";

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
            {/* listado de Gif */}
            <button onClick={onAddCategory}>Agregar</button>
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