import React, { useContext } from 'react'
import Context, { ItemContext } from '../Context/Context'
import Card from '../pages/Card'


function Todo() {

    const { data } = useContext(ItemContext)

    return (
        <div>
            {(
                data.map(ticket => (
                    <Card key={ticket.id} id={ticket.id} title={ticket.title} tag={ticket.tag} />
                ))
            )}
        </div>
    )
}

export default Todo