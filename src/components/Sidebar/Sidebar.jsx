import './Sidebar.scss'
import { useSelector } from "react-redux"


export default function Sidebar() {
    const contacts = useSelector(state => state.contacts)

    const search = false
    const filteredContacts = search
        ? contacts.filter(contact =>
            `${contact.firstName} ${contact.lastName} ${contact.phone} ${contact.email} ${contact.status}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        : contacts
    
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
                  <span>All contacts:</span><span>{totalContacts}</span>
                </div>
                <div className="list fs-5">
                  <div className="d-flex justify-content-between mb-3">
                    <div>Work</div>
                    <span>{statusCounts.work}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div>Family</div>
                    <span>{statusCounts.family}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div>Friends</div>
                    <span>{statusCounts.friends}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <div>Private</div>
                    <span>{statusCounts.private}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
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