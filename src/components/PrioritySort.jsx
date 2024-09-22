import React, { useContext } from 'react';
import { ItemContext } from '../Context/Context';
import Card from '../pages/Card';

function PrioritySort() {
    const { data } = useContext(ItemContext);

    return (
        <div className='flex flex-row-reverse mx-1 my-4 space-y-10'>
            <div>
                <div className='flex justify-between mx-6'>
                    <div className='flex text-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <h2>No Priority </h2>
                    </div>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>
                {data.map(ticket => {
                    if (ticket.priority === 0) {
                        return <Card
                            key={ticket.id}
                            id={ticket.id}
                            title={ticket.title}
                            tag={ticket.tag}
                            priority="High" // You can also pass a label based on priority
                        />
                    }
                })}
            </div>
            <div>
                <div className='flex justify-between mx-6'>
                    <div className='flex text-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M4 20h2v-2H4v2zm7 0h2v-10h-2v10zm7 0h2v-6h-2v6z" />
                        </svg>
                        <h2>Low </h2>
                    </div>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>
                {data.map(ticket => {
                    if (ticket.priority === 1) {
                        return <Card
                            key={ticket.id}
                            id={ticket.id}
                            title={ticket.title}
                            tag={ticket.tag}
                            priority="High" // You can also pass a label based on priority
                        />
                    }
                })}
            </div>
            <div>
                <div className='flex justify-between mx-6'>
                    <div className='flex text-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M4 20h2v-8H4v8zm7 0h2v-12h-2v12zm7 0h2v-6h-2v6z" />
                        </svg>
                        <h2>Medium </h2>
                    </div>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>
                {data.map(ticket => {
                    if (ticket.priority === 2) {
                        return <Card
                            key={ticket.id}
                            id={ticket.id}
                            title={ticket.title}
                            tag={ticket.tag}
                            priority="High" // You can also pass a label based on priority
                        />
                    }
                })}
            </div>
            <div>
                <div className='flex justify-between mx-6'>
                    <div className='flex text-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M4 20h2v-16H4v16zm7 0h2v-18h-2v18zm7 0h2v-12h-2v12z" />
                        </svg>
                        <h2>High</h2>
                    </div>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>
                {data.map(ticket => {
                    if (ticket.priority === 3) {
                        return <Card
                            key={ticket.id}
                            id={ticket.id}
                            title={ticket.title}
                            tag={ticket.tag}
                            priority="High" // You can also pass a label based on priority
                        />
                    }
                })}
            </div>
            <div>
                <div className='flex justify-between mx-6'>
                    <div className='flex text-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="tomato" width="24" height="24">
                            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" fill="tomato" />
                            <path d="M12 7v6h-2V7h2zm0 8v2h-2v-2h2z" fill="white" />
                        </svg>
                        <h2>Urgent</h2>
                    </div>
                    <div className='flex gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>
                {data.map(ticket => {
                    if (ticket.priority === 4) {
                        return <Card
                            key={ticket.id}
                            id={ticket.id}
                            title={ticket.title}
                            tag={ticket.tag}
                            priority="High" // You can also pass a label based on priority
                        />
                    }
                })}
            </div>
        </div>
    );
}

export default PrioritySort;

/*

import React, { useContext, useState } from 'react';
import { ItemContext } from '../Context/Context';
import Card from '../pages/Card';

function PrioritySort() {
    const { data } = useContext(ItemContext);
    const [pr, setPr] = useState()

    const priorityOfItems = data.map(ticket => (
        setPr(ticket.priority)
    ))

    return (
        <div>
            {priorityOfItems.map(ticket => {
                if (pr == 3) {
                    return <Card
                        key={ticket.id}
                        id={ticket.id}
                        title={ticket.title}
                        tag={ticket.tag}
                        priority={ticket.priorityLabel} // Pass the priority label to Card
                    />
                }
            })}
        </div>
    );
}

export default PrioritySort;
*/