import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()
    const [selectedOption, setSelectedOption] = useState('');

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setSelectedOption(value);

        if(value === "user") {
            navigate('/user-sort')
        }
        if(value === "priority") {
            navigate('/priority-sort')
        }
        if(value === "status") {
            navigate('/status-sort')
        }
        if(value === 'select') {
            navigate('/')
        }
    }

    return (

        <div className='w-[100vw] shadow-xl py-6 my-0 px-[7vw] bg-gray-500'>
            <div class="">
                <select onChange={onChangeHandler} value={selectedOption} class="block w-40 px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <optgroup label="Grouping" className='text-gray-500'>
                        <option value="select">Select</option>
                        <option value="status" className='text-black'>status</option>
                        <option value="priority" className='text-black'>priority</option>
                        <option value="user" className='text-black'>User</option>
                    </optgroup>
                </select>
            </div>
        </div>

    )
}

export default Navbar