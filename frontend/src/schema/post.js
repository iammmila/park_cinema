import * as yup from 'yup';

export const contactSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be at most 100 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
        .required('Film Name is required'),
    ageLimit: yup.number()
        .min(2, "Age limit must be greater than or equal to 2")
        .max(30, "Age limit must be less than or equal to 30")
        .required("Age limit is required"),

    durationMinute: yup.number()
        .min(2, "Duration range must be greater than or equal to 2")
        .max(30, "Duration range must be less than or equal to 30")
        .required("Duration range is required"),
    country: yup.string()
        .min(2)
        .max(100, 'Country name must be less than 100 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Country Name can only contain letters and spaces')
        .required('Country name is required'),
    director: yup.string()
        .min(2)
        .max(100, 'Director name must be less than 100 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Director can only contain letters and spaces')
        .required('Director name is required'),
})
