import './AddContact.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import {contactValidationSchema} from '../../validation/validation'

import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux"
import { addContact } from '../../redux/actions'
import { useSelector } from 'react-redux'
import ReactInputDateMask from 'react-input-date-mask'
import { IMaskInput } from 'react-imask'


export default function AddContact() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const contactStatuss = useSelector(state => state.contactStatuss)

    const initialValues = {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        birthday: '',
        phone: '',
        viber: '',
        telegram: '',
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
                        {({values, setFieldValue, isSubmitting}) => (
                            <Form>
                                <div className="form-grid">
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
                                        <label htmlFor='birthday'>Birthday</label>
                                        <Field name="birthday">
                                            {({ field, form }) => (
                                            <ReactInputDateMask
                                                {...field}
                                                mask="dd.mm.yyyy"
                                                id="birthday"
                                                className="birthday"
                                                value={field.value}
                                                onChange={(value) => form.setFieldValue(field.name, value)}
                                            />
                                            )}
                                        </Field>
                                        <ErrorMessage name='birthday' component='p' className='error'/>
                                    </div>

                                    <div>
                                        <label htmlFor="phone">Phone</label>
                                        <Field name="phone" >
                                            {({ field, form }) => (
                                                <IMaskInput
                                                {...field}
                                                mask="+{38} (000) 000-00-00"
                                                definitions={{ '0': /[0-9]/ }}
                                                unmask={false}
                                                placeholder="+38 (0__) ___-__-__"
                                                autoComplete="new-password"
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                id="phone"
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name='phone' component='p' className='error'/>
                                    </div>

                                    <div>
                                        <label htmlFor="viber">Viber</label>
                                        <Field name="Viber" >
                                            {({ field, form }) => (
                                                <IMaskInput
                                                {...field}
                                                mask="+{38} (000) 000-00-00"
                                                definitions={{ '0': /[0-9]/ }}
                                                unmask={false}
                                                placeholder="+38 (0__) ___-__-__"
                                                autoComplete="new-password"
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                id="Viber"
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="viber" component="p" className="error" />
                                    </div>

                                    <div>
                                        <label htmlFor="telegram">Telegram</label>
                                        <Field name="telegram" >
                                            {({ field, form }) => (
                                                <IMaskInput
                                                {...field}
                                                mask="+{38} (000) 000-00-00"
                                                definitions={{ '0': /[0-9]/ }}
                                                unmask={false}
                                                placeholder="+38 (0__) ___-__-__"
                                                autoComplete="new-password"
                                                onAccept={(value) => form.setFieldValue(field.name, value)}
                                                id="telegram"
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="telegram" component="p" className="error" />
                                    </div>

                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <Field type='email' name='email' id='email' autoComplete="off"/>
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
                                        <label htmlFor="favorite" style={{ textAlign: 'center' }}>Favorite</label>
                                        <Field type='checkbox' name='favorite'/>
                                    </div>
                                </div>
                                
                                <div className="form-actions">
                                  <button type='submit' disabled={isSubmitting}>Add</button>  
                                </div> 
                                </Form>
                        )}
                    </Formik>
            </div>
        </div>
    )
}
