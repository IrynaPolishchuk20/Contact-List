import './Sidebar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../redux/actions'
import { useMemo } from "react";



export default function Sidebar() {
const contacts = useSelector(state => state.contacts)
    const search = useSelector(state => state.search) 
    const contactStatuss = useSelector(state => state.contactStatuss)
    const dispatch = useDispatch()
    const filterStatus = useSelector(state => state.contactStatus)
    
    const filteredContacts = contacts.filter(contact => {
        const matchesSearch = search ? (`${contact.firstName} ${contact.lastName} ${contact.phone} ${contact.email} ${contact.gender} ${contact.status}`).toLowerCase().includes(search.toLowerCase()) : true
        let matchesStatus = true
        if (filterStatus === 'favorites') {
            matchesStatus = contact.favorite === true
        } else if (filterStatus && filterStatus !== 'all') {
            matchesStatus = contact.status === filterStatus
        }
        return matchesSearch && matchesStatus
    })
   
    const totalContacts = filteredContacts.length

    const statusCounts = useMemo(() => {
        const counts = {...contactStatuss}
        Object.keys(counts).forEach(status => (counts[status].count = 0))
        filteredContacts.forEach(contact => {
            contactStatuss[contact.status].count++
            if (contact.favorite === true && counts['favorites']) {counts['favorites'].count++}
        })
        return counts
    }, [filteredContacts, contactStatuss, search])

    const statusClick = (status) => {
        dispatch(setFilter(status))
    }
  
 
   return(
        <aside className="container containerSidebar">
          <div className="row">
            <div className="col-12">
              <div className="contacts-labels">
                <div className="fs-4 mb-5 mt-4 all" onClick={() => statusClick('all')}>
                            All contacts: <span className="fs-5">{totalContacts}</span>
                </div>
                <ul className="list-group fs-5 mb-3">
                  {
                    Object.keys(statusCounts).map(status => (
                      <li 
                        key={status} 
                        onClick={() => statusClick(status)} 
                        className={`list-group-item d-flex justify-content-between align-items-center ${status === filterStatus ? 'active' : ''}`}
                        
                      > 
                        {status.toUpperCase()}
                        <span 
                          style={{backgroundColor: statusCounts[status].bg}} className="badge rounded-pill">
                            {statusCounts[status].count}
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </div> 
            </div>
          </div>
      </aside>
    )
}