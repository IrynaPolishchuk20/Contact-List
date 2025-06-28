import * as Yup from 'yup'

export const contactValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required').min(2, 'Min 2 symbols').max(16, 'Max 16 symbols'),
    lastName: Yup.string().required('Last Name is required').min(2, 'Min 2 symbols').max(16, 'Max 16 symbols'),
    birthday: Yup.string().nullable().notRequired().matches(/^\d{2}\.\d{2}\.\d{4}$/,'Invalid date format'),
    phone: Yup.string().required('Phone is required'),
    viber: Yup.string().min(10, 'More symbols').notRequired(),
    telegram: Yup.string().min(10, 'More symbols').notRequired(),
    email: Yup.string().email('Invalid email').required('Email is required'),
    avatar: Yup.string().required('Avatar is required'),
    gender: Yup.string().oneOf(['men','women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string().required('Status is required'),
    favorite: Yup.boolean()
}) 