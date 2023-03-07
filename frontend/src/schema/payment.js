import * as yup from 'yup';

export const paymentSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must be at most 50 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
        .required('Name is required'),

    email: yup.string()
        .email('Must be a valid email'),
    cardDetail: yup.number()
        .typeError('Card detail must be a number')
        .integer('Card detail must be an integer')
        .positive('Card detail must be a positive number')
        .max(9999999999999999, "Card's number must be at most 16 digits")
        .required("Card's number is required for payment"),
    month: yup.number().required("Month of Card is required"),
    year: yup.number().required("Year of Card is required"),
    cvv: yup.number().required("card's cvv is required for privacy and payment!")
})
