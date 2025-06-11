import './ContactStatuss.scss'
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";




export default function ContactStatuss(){
    const contactStatuss = useSelector(state => state.contactStatuss)
    const contacts = useSelector(state => state.contacts)

    const statusCounts = useMemo(() => {
        const counts = {...contactStatuss}
        Object.keys(counts).forEach(status => (counts[status].count = 0))
        contacts.forEach(contact => {
          contactStatuss[contact.status].count++
        });
        return counts
      }, [contacts, contactStatuss])

    return(
        <main className="container rounded shadow-lg">
            <div className="row">
                <div className="col-12">
                    <Link type="button" className="btn btn-success btn-lg m-2" to={'/contact-statuss/add-contact-status'}>Add +</Link>
                    <table className="table text-center">
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
                                <td className="fs-4 fw-bold">{status.toUpperCase()}</td>
                                <td className="fs-4 fw-bold" style={{backgroundColor: statusCounts[status].bg}}>{statusCounts[status].bg}</td>
                                <td className="fs-4 fw-bold">{statusCounts[status].count}</td>
                                <td>
                                 <div className="btnGroup">
                                    <Link to={`/edit-contact` }>
                                    <button className="contactBtn" >Edit</button>
                                    </Link>
                                    <button className="contactBtn"
                                        onClick={() => { }}>
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