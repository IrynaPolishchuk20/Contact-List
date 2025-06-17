import './EditStatus.scss'

import { useParams, useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { editStatus } from "../../redux/actions"

export default function EditStatus() {
    const { status } = useParams()
    const contactStatuss = useSelector(state => state.contactStatuss)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const currentStatus = contactStatuss[status]

    const [name, setName] = useState(status)
    const [bg, setBg] = useState(currentStatus.bg)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editStatus(status, { name, bg }))
        navigate('/contact-statuss')
    }

    return (
        <main className='editStatus'>
            <h2 className='text-center mb-4'>Edit Status</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label fs-5'>Status name</label>
                    <input
                        type='text'
                        className='form-control form-control-lg'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label className='form-label fs-5'>Background color</label>
                    <input
                        type='color'
                        className='form-control form-control-color'
                        value={bg}
                        onChange={(e) => setBg(e.target.value)}
                    />
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-outline-info btn-lg px-5' >Save</button>
                </div>
            </form>
        </main>
    )
}