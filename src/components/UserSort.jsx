import React, { useContext, useState } from 'react'
import { ItemContext } from '../Context/Context'
import Card from '../pages/Card'

function UserSort() {

    const { userdata, data } = useContext(ItemContext)
    const [name, setName] = useState("")

    

    return (
        <div>
            {
                data.map(ticket => {
                    
                })
            }
        </div>
    )
}

export default UserSort