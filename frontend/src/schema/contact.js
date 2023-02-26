import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
        .required('Name is required'),

    email: yup.string()
        .email('Must be a valid email'),

    message: yup.string()
        .min(2, 'Message must be at least 2 characters')
        .max(500, 'Message cannot exceed 500 characters')
        .required('Message is required')
})
