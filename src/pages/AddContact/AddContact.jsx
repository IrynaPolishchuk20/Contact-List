import './AddContact.scss'

import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router";

export default function AddContact({addNewContact}) {
    const navigate = useNavigate();

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

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required').min(2, 'Min 2 symbols').max(10, 'Max 20 symbols').matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’\s-]+$/, 'Only letters allowed').trim(),
        lastName: Yup.string().required('Last Name is required').min(2, 'Min 2 symbols').max(10, 'Max 20 symbols').matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ'’\s-]+$/, 'Only letters allowed').trim(),
        phone: Yup.string().required('Phone is required').min(9, 'Min 9 symbols'),
        email: Yup.string().email('Invalid email').required('Email is required').trim(),
        avatar: Yup.string().required('Avatar is required'),
        gender: Yup.string().oneOf(['men','women'], 'Invalid gender').required('Gender is required'),
        status: Yup.string().oneOf(['work','family', 'friends', 'others'], 'Invalid status').required('Status is required'),
        favorite: Yup.boolean()
    })

    const handleSubmit = (values) => {
        console.log(values);
        addNewContact(values)
        navigate('/')
    }

    return(

        <div className="addContact">
            <div className="modal-header">
                <h1>Add New Contact</h1>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                        {({isSubmitting}) => (
                            <Form>
                                <div>
                                    <label htmlFor="firstName">First name</label>
                                    <Field type='text' name='firstName' id='firstName' placeholder='Enter your first name' autoComplete="new-password"/>
                                    <ErrorMessage name='firstName' component='p' className='error'/>
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last name</label>
                                    <Field type='text' name='lastName' id='lastName' placeholder='Enter your last name' autoComplete="new-password"/>
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
                                <button type='submit' disabled={isSubmitting}>Add</button>
                            </Form>
                        )}
                    </Formik>
            </div>
        </div>
    )
}
