import * as yup from 'yup';

export const postSchema = yup.object().shape({
    name: yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be at most 100 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
        .required('Film Name is required'),
    ageLimit: yup.number()
        .min(2, "Age limit must be greater than or equal to 2")
        .max(30, "Age limit must be less than or equal to 30")
        .required("Age limit is required"),
    actors: yup.string().required("section should be filled"),
    description: yup.string()
        .min(10, 'Description must be at least 10 characters')
        .required("Description should be filled"),
        durationMinute: yup.number()
        .min(2, "Duration range must be greater than or equal to 2")
        .max(300, "Duration range must be less than or equal to 300")
        .required("Duration range is required"),
    country: yup.string()
        // .min(2)
        .max(100, 'Country name must be less than 100 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Country Name can only contain letters and spaces')
        .required('Country name is required'),
    director: yup.string()
        .min(2)
        .max(100, 'Director name must be less than 100 characters')
        .matches(/^[a-zA-Z\s]*$/, 'Director can only contain letters and spaces')
        .required('Director name is required'),
    date: yup.date().required("must be written!"),
    trailer: yup.string().required("Youtube video's id must be addded!"),
    image: yup.mixed().required("image must be added!"),
    isNew: yup.boolean().nullable(),
    genres_Id: yup.number().required("id of genre must be written!"),
    languages_Id: yup.number().required("id of Language must be written!"),
    subtitles_Id: yup.number().required("id of Subtitle must be written!"),
    formats_Id: yup.number().required("id of format must be written!"),

})
