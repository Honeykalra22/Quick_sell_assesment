import React, { createContext, useEffect, useState } from 'react'

export const ItemContext = createContext(null)

const Context = (props) => {
    const url = 'https://api.quicksell.co/v1/internal/frontend-assignment'
    const [data, setData] = useState([]);
    const [userdata, setUserdata] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.tickets); 
                setUserdata(result.users)
            } catch (error) {
                console.log('Error while fetching API', error);
            }
        };
        fetchData();
    }, [url]);

    


    const contextValue = { data, userdata }
    return (
        <ItemContext.Provider value={contextValue}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default Context;
