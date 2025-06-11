import './Sidebar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { contactStatus } from '../../redux/actions'
import { useMemo } from "react";



export default function Sidebar() {
    const contacts = useSelector(state => state.contacts)
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()
    const filterStatus = useSelector(state => state.contactStatus)
    const contactStatuss = useSelector(state => state.contactStatuss)

    
    const statusClick = (status) => {     
        dispatch(contactStatus(status))
    }

    const filteredContacts = contacts.filter(contact => {
        const matchesSearch = search ? (`${contact.firstName} ${contact.lastName} ${contact.phone} ${contact.email} ${contact.gender} ${contact.status}`).includes(search) : true;
        const matchesStatus = filterStatus && filterStatus !== 'all' ? contact.status === filterStatus : true;
        return matchesSearch && matchesStatus;
    });
    
    const totalContacts = filteredContacts.length

    const statusCounts = useMemo(() => {
      const counts = {...contactStatuss}
      Object.keys(counts).forEach(status => (counts[status].count = 0))
      filteredContacts.forEach(contact => {
        contactStatuss[contact.status].count++
      });
      return counts
    }, [contacts, contactStatuss, search])
  
 
   return(
        <aside className="container">
          <div className="row containerSidebar">
            <div className="col-12">
              <div className="contacts-labels">
                <div className="All mb-5 mt-4 d-flex justify-content-between">
                  <span onClick={() => statusClick('all')}>All contacts:</span><span>{totalContacts}</span>
                </div>
                <ul className="list-group mb-3">
                  {
                    Object.keys(statusCounts).map(status => (
                      <li 
                        key={status} 
                        onClick={() => statusClick(status)} 
                        className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" 
                        
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