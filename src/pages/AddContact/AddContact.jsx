import './AddContact.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import {contactValidationSchema} from '../../validation/validation'

import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"
import { addContact } from '../../redux/actions'
import { useSelector } from 'react-redux'

export default function AddContact() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const contactStatuss = useSelector(state => state.contactStatuss)

    const initialValues = {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        avatar: '',
        gender: '',
        status: '',
        favorite: false
    }

    const handleSubmit = (values) => {
        dispatch(addContact(values))
        navigate('/')
    }

    return(

        <div className="addContact">
            <div className="modal-header">
                <h2>Add New Contact</h2>
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
                                        {Object.keys(contactStatuss).map((status) => (
                                        <option key={status} value={status}>
                                            {status.charAt(0).toUpperCase() + status.slice(1)}
                                        </option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name='status' component='p' className='error'/>
                                </div>
                                <div className='checkbox'>
                                    <label htmlFor="favorite">Favorite</label>
                                    <Field  type='checkbox' name='favorite'/>
                                </div>
                                <button type='submit' disabled={isSubmitting}>Add</button>
                            </Form>
                        )}
                    </Formik>
            </div>
        </div>
    )
}
