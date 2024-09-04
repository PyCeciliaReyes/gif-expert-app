import { useEffect, useState } from "react";

export const Switch = () => {
    const [tema, setTema] = useState(false);

    useEffect(() => {
        if (tema) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [tema]);

    const onDarkMode = () => {
        setTema( !tema );
    };

    return (
        <button 
            onClick={onDarkMode}
        > 
            {tema ? 'Cambiar a claro' : 'Cambiar a oscuro'}
    </button>
    );
};