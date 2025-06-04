import { Formik, Form, Field, ErrorMessage } from 'formik'
import {contactValidationSchema} from '../../validation/validation'
import { useNavigate } from "react-router"
import { useParams } from "react-router"

import './EditContact.scss'


export default function EditContact({stor, editContact}){
    const {id} = useParams()
    const navigate = useNavigate()

    const contact = stor.find(contact => contact.id ===id)

    const initialValues = {...contact}

    const handleSubmit = (values) => {
        editContact(values)
        navigate('/')
    }

    return(

        <div className="addContact">
            <div className="modal-header">
                <h1>Edit Contact</h1>
                    <Formik initialValues={initialValues} validationSchema={contactValidationSchema} onSubmit={handleSubmit}>
                        {({isSubmitting}) => (
                            <Form>
                                <div>
                                    <label htmlFor="firstName">First name</label>
                                    <Field type='text' name='firstName' id='firstName' autoComplete="new-password"/>
                                    <ErrorMessage name='firstName' component='p' className='error'/>
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last name</label>
                                    <Field type='text' name='lastName' id='lastName' autoComplete="new-password"/>
                                    <ErrorMessage name='lastName' component='p' className='error'/>
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <Field type='text' name='phone' id='phone'/>
                                    <ErrorMessage name='phone' component='p' className='error'/>
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <Field type='email' name='email' id='email'  autoComplete="off"/>
                                    <ErrorMessage name='email' component='p' className='error'/>
                                </div>
                                <div>
                                    <label htmlFor="avatar">Avatar</label>
                                    <Field type='number' max={99} min={0} name='avatar' id='avatar'/>
                                    <ErrorMessage name='avatar' component='p' className='error'/>
                                </div>
                                <div>
                                    <label htmlFor="gender">Gender</label>
                                    <Field as='select' name='gender'>
                                        <option value="">Choose gender</option>
                                        <option value="men">Men</option>
                                        <option value="women">Women</option>
                                    </Field>
                                    <ErrorMessage name='gender' component='p' className='error'/>
                                </div>
                                <div>
                                    <label htmlFor="status">Status</label>
                                    <Field as='select' name='status'>
                                        <option value="">Choose status</option>
                                        <option value="work">Work</option>
                                        <option value="family">Family</option>
                                        <option value="friends">Friends</option>
                                        <option value="others">Others</option>
                                    </Field>
                                    <ErrorMessage name='status' component='p' className='error'/>
                                </div>
                                <div className='checkbox'>
                                    <label htmlFor="favorite">Favorite</label>
                                    <Field  type='checkbox' name='favorite'/>
                                </div>
                                <button type='submit' disabled={isSubmitting}>Save</button>
                            </Form>
                        )}
                    </Formik>
            </div>
        </div>
    )
}