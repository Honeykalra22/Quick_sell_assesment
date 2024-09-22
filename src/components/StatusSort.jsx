import React, { useContext, useState } from 'react'
import { ItemContext } from '../Context/Context.jsx'
import Card from '../pages/Card.jsx'

function KambanBoard() {

    const { data } = useContext(ItemContext)

    const todoItem = data.filter(ticket => ticket.status === 'Todo')
    const InProgressItem = data.filter(ticket => ticket.status === 'In progress')
    const BacklogItem = data.filter(ticket => ticket.status === 'Backlog')
    const doneItem = data.filter(ticket => ticket.status === 'done')

    return (
        <div>
            <div className='flex space-x-4 w-full justify-center'>
                <div className="w-auto bg-gray-100 p-4 rounded">
                    <div className='flex items-center'>
                        <h2 className="font-semibold text-lg mb-4">Todo</h2>
                        {/* <h3>{todoItem.length}</h3> */}
                    </div>
                    {todoItem.map(ticket => (
                        <Card key={ticket.id} id={ticket.id} title={ticket.title} tag={ticket.tag} />
                    ))}
                </div>


                <div className='w-auto bg-gray-100 p-4 rounded'>
                    <h2 className='font-semibold text-lg mb-4'>In Progress</h2>
                    {
                        InProgressItem.map(ticket => (
                            <Card key={ticket.id} id={ticket.id} title={ticket.title} tag={ticket.tag} />
                        ))
                    }
                </div>

                <div className='w-auto bg-gray-100 p-4 rounded'>
                    <h2 className='font-semibold text-lg mb-4'>BackLog</h2>
                    {
                        BacklogItem.map(ticket => (
                            <Card key={ticket.id} id={ticket.id} title={ticket.title} tag={ticket.tag} />
                        ))
                    }
                </div>
                <div className='w-auto bg-gray-100 p-4 rounded'>
                    <h2 className='font-semibold text-lg mb-4'>Done</h2>
                    {
                        doneItem.map(ticket => (
                            <Card key={ticket.id} id={ticket.id} title={ticket.title} tag={ticket.tag} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default KambanBoard