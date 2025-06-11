import './Sidebar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { contactStatus } from '../../redux/actions'


export default function Sidebar() {
    const contacts = useSelector(state => state.contacts)
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()
    const filterStatus = useSelector(state => state.contactStatus)
    
    const statusClick = (status) => {     
        dispatch(contactStatus(status))
    }

    const filteredContacts = contacts.filter(contact => {
        const matchesSearch = search ? (`${contact.firstName} ${contact.lastName} ${contact.phone} ${contact.email} ${contact.gender} ${contact.status}`).includes(search) : true;
        const matchesStatus = filterStatus && filterStatus !== 'all' ? contact.status === filterStatus : true;
        return matchesSearch && matchesStatus;
    });
    
    const totalContacts = filteredContacts.length

    const statusCounts={
        work: 0,
        family: 0,
        private: 0,
        friends: 0,
        others:  0
    }

    filteredContacts.forEach(contact => {
      statusCounts[contact.status] +=1
    })
 
   return(
        <aside className="container">
          <div className="row containerSidebar">
            <div className="col-12">
              <div className="contacts-labels">
                <div className="All mb-5 mt-4 d-flex justify-content-between">
                  <span onClick={() => statusClick('all')}>All contacts:</span><span>{totalContacts}</span>
                </div>
                <div className="list fs-5">
                  <div className="d-flex justify-content-between mb-3" onClick={() => statusClick('work')}>
                    <div>Work</div>
                    <span>{statusCounts.work}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3" onClick={() => statusClick('family')}>
                    <div>Family</div>
                    <span>{statusCounts.family}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3" onClick={() => statusClick('friends')}>
                    <div>Friends</div>
                    <span>{statusCounts.friends}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3" onClick={() => statusClick('private')}>
                    <div>Private</div>
                    <span>{statusCounts.private}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3" onClick={() => statusClick('others')}>
                    <div>Others</div>
                    <span>{statusCounts.others}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </aside>
    )
}