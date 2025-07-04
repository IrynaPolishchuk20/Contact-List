import {
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
    SET_SEARCH_QUERY,
    SET_FILTER,
    TOGGLE_FAVORITE,
    ADD_STATUS,
    DELETE_STATUS,
    EDIT_STATUS
  } from './type'

const initialState = {
    contacts: [
        {
          id: "1a2b3c4d-0001-4a2f-89d3-bb11a111a111",
          firstName: "Anna",
          lastName: "Ivanova",
          phone: "+380631234567",
          email: "anna.ivanova@gmail.com",
          avatar: 11,
          gender: "women",
          status: "family",
          favorite: false
        },
        {
          id: "1a2b3c4d-0002-4a2f-89d3-bb11a111a112",
          firstName: "Oleh",
          lastName: "Shevchenko",
          phone: "+380991112233",
          email: "oleh.shevchenko@gmail.com",
          avatar: 2,
          gender: "men",
          status: "work",
          favorite: true
        },
        {
          id: "1a2b3c4d-0003-4a2f-89d3-bb11a111a113",
          firstName: "Maria",
          lastName: "Koval",
          phone: "+380671234567",
          email: "maria.koval@yahoo.com",
          avatar: 53,
          gender: "women",
          status: "friends",
          favorite: false
        },
        {
          id: "1a2b3c4d-0004-4a2f-89d3-bb11a111a114",
          firstName: "Dmytro",
          lastName: "Bondarenko",
          phone: "+380503334455",
          email: "dmytro.bondarenko@ukr.net",
          avatar: 34,
          gender: "men",
          status: "family",
          favorite: true
        },
        {
          id: "1a2b3c4d-0005-4a2f-89d3-bb11a111a115",
          firstName: "Olha",
          lastName: "Petrenko",
          phone: "+380932223344",
          email: "olha.petrenko@gmail.com",
          avatar: 45,
          gender: "women",
          status: "work",
          favorite: false
        },
        {
          id: "1a2b3c4d-0006-4a2f-89d3-bb11a111a116",
          firstName: "Serhii",
          lastName: "Tkachenko",
          phone: "+380662224455",
          email: "serhii.tkachenko@hotmail.com",
          avatar: 6,
          gender: "men",
          status: "friends",
          favorite: false
        },
        {
          id: "1a2b3c4d-0007-4a2f-89d3-bb11a111a117",
          firstName: "Natalia",
          lastName: "Melnyk",
          phone: "+380981112244",
          email: "natalia.melnyk@gmail.com",
          avatar: 87,
          gender: "women",
          status: "family",
          favorite: true
        },
        {
          id: "1a2b3c4d-0008-4a2f-89d3-bb11a111a118",
          firstName: "Andrii",
          lastName: "Zhuk",
          phone: "+380501234789",
          email: "andrii.zhuk@meta.ua",
          avatar: 8,
          gender: "men",
          status: "private",
          favorite: false
        },
        {
          id: "1a2b3c4d-0009-4a2f-89d3-bb11a111a119",
          firstName: "Tetiana",
          lastName: "Hrytsenko",
          phone: "+380672226677",
          email: "tetiana.hrytsenko@gmail.com",
          avatar: 19,
          gender: "women",
          status: "friends",
          favorite: false
        },
        {
          id: "1a2b3c4d-0010-4a2f-89d3-bb11a111a120",
          firstName: "Ivan",
          lastName: "Krutyi",
          phone: "+380991117788",
          email: "ivan.krutyi@gmail.com",
          avatar: 10,
          gender: "men",
          status: "others",
          favorite: true
        }
    ],
    search: '',
    contactStatuss: {
      work: {count: 0, bg: '#00f0ff'},
      family: {count: 0, bg: '#ff00c8'},
      private: {count: 0, bg: '#ff9900'},
      friends: {count: 0, bg: '#00ff6a'},
      others: {count: 0, bg: '#cc00ff'},
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
            return{
                ...state,
                contacts:[...state.contacts, action.payload]
            } 
        case DELETE_CONTACT:
            return{
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            }  
        case EDIT_CONTACT: 
            return{
                  ...state,
                  contacts: state.contacts.map(contact => {
                  if (contact.id === action.payload.id) {
                      return{
                        ...contact,
                        ...action.payload.updatedContact
                      }
                    }
                    return contact
                })
            }    
        case SET_SEARCH_QUERY:
            return {
              ...state,
              search: action.payload
            }
        case SET_FILTER:
          return{
            ...state,
            contactStatus: action.payload
          }
        case TOGGLE_FAVORITE:
          return{
            ...state,
            contacts: state.contacts.map(contact => contact.id === action.payload ? {...contact, favorite: !contact.favorite} : contact,)
          }
        case ADD_STATUS:
          if (state.contactStatuss[action.payload.name]) {
            console.warn(`Status "${action.payload.name}" already exists.`)
            return state
          }
          return {
            ...state,
            contactStatuss: {
              ...state.contactStatuss,
              [action.payload.name]: { count: 0, bg: action.payload.bg },
            }
          }

        case DELETE_STATUS:{
          const newContactStatussAfterDelete = { ...state.contactStatuss }
          const deleteContactStatus = newContactStatussAfterDelete[action.payload].count
          delete newContactStatussAfterDelete[action.payload]

          const contactsAfterStatusDelete = state.contacts.map((contact) => {
            if (contact.status === action.payload) {
              return { ...contact, status:'others' }
            }
            return contact
          })

          if (newContactStatussAfterDelete['others']) {
            newContactStatussAfterDelete['others'].count += deleteContactStatus;
          }

          return {
            ...state,
            contactStatuss: newContactStatussAfterDelete,
            contacts: contactsAfterStatusDelete,
          }
        }

        case EDIT_STATUS: {
          const { oldStatus, updatedData } = action.payload
          const newStatus = updatedData.name
          const newBg = updatedData.bg

          const updatedStatuss = { ...state.contactStatuss }

          if (oldStatus !== newStatus) {
              updatedStatuss[newStatus] = { ...updatedStatuss[oldStatus], bg: newBg }
              delete updatedStatuss[oldStatus]
          } else {
              updatedStatuss[oldStatus] = { ...updatedStatuss[oldStatus], bg: newBg }
          }

          const updatedContacts = state.contacts.map(contact => {
              if (contact.status === oldStatus) {
                  return {
                      ...contact,
                      status: newStatus
                  }
              }
              return contact
          });

          return {
              ...state,
              contactStatuss: updatedStatuss,
              contacts: updatedContacts
              }
          }

        default:
            return state
    }
}

export default reducer
