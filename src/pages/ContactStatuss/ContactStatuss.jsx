import './ContactStatuss.scss'
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { deleteStatus } from '../../redux/actions';




export default function ContactStatuss(){
    const contactStatuss = useSelector(state => state.contactStatuss)
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const statusCounts = useMemo(() => {
        const counts = {...contactStatuss}
        Object.keys(counts).forEach(status => (counts[status].count = 0))
        contacts.forEach(contact => {
          contactStatuss[contact.status].count++
        });
        return counts
      }, [contacts, contactStatuss])

    const handleDeleteStatus = (status) =>{
        dispatch(deleteStatus(status))
    }

    return(
        <main className="container contactStatuss">
            <div className="row">
                <div className="col-12">
                    <Link type="button" className="btn neonButton btn-success btn-lg m-2" to={'/contact-statuss/add-status'}>Add +</Link>
                    <table className="neonTable text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Status name</th>
                                <th scope="col">Color</th>
                                <th scope="col">Contact count</th>
                                <th scope="col">Edit/Del</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Object.keys(statusCounts).map((status, index) => (
                            <tr key={index}>
                                <th scope="row">{++index}</th>
                                <td className="fw-bold">{status.toUpperCase()}</td>
                                <td className="statusColorCell">
                                    <div
                                        className="colorCircle"
                                        style={{ backgroundColor: statusCounts[status].bg }}
                                        title={statusCounts[status].bg}
                                    ></div>
                                </td>
                                <td className="fs-4 fw-bold">{statusCounts[status].count}</td>
                                <td>
                                    <div className="btnGroup">
                                        <Link to={`/contact-statuss/edit-status/${status}`}>
                                        <button className="contactBtn" >Edit</button>
                                        </Link>
                                        <button className='contactBtn'
                                            type='button'
                                            disabled={status === 'others'}
                                            onClick={() => {handleDeleteStatus(status)}}>
                                                Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}