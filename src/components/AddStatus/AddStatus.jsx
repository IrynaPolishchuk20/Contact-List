import './AddStatus.scss'

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addStatus } from '../../redux/actions';

export default function AddStatus() {
    const [statusName, setStatusName] = useState('')
    const [bgColor, setBgColor] = useState('#cccccc')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!statusName.trim()) return

        const newStatus = {
            name: statusName.toLowerCase(),
            bg: bgColor
        }

        dispatch(addStatus(newStatus))
        navigate('/contact-statuss')
    }

    return (
         <main className='addStatus'>
            <h2 className='text-center mb-4'>Add New Contact Status</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label fs-5'>Status Name</label>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        value={statusName}
                        onChange={(e) => setStatusName(e.target.value)}
                        required
                        placeholder='study, travel, health...'
                    />
                </div>
                <div className='mb-4'>
                    <label className='form-label fs-5'>Status Color</label>
                    <input
                        type='color'
                        className='form-control form-control-color'
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                    />
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-outline-info btn-lg px-5'>Add</button>
                </div>
            </form>
        </main>
    )
}