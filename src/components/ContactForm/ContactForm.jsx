import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";
import css from './ContactForm.module.css'
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';


const initialValues = {
        name: '',
        phone: '',
};
    
const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    phone: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
})

const ContactForm = () => {
    const nameFieldId = useId();
    const phoneFieldId = useId();
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
    dispatch(addContact({
        name: values.name,
        number: values.phone
    }));
        toast('Contact Added', {
            style: {
                background: '#90EE90',
    }});
    actions.resetForm();
    };

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={ContactFormSchema} onSubmit={handleSubmit}>
            <Form>
                <div className={css.contactForm}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} className={css.contactFormInput} />
                    <ErrorMessage name="name" component="span" className={css.errorMessage} />
                    <label htmlFor={phoneFieldId}>Number</label>
                    <Field type="tel" name="phone" id={phoneFieldId} className={css.contactFormInput} />
                    <ErrorMessage name="phone" component="span" className={css.errorMessage} />
                    <button type="submit" className={css.button}>Add contact</button>
                </div>
            </Form>
            </Formik>
            <Toaster />
        </div>
    )
};

export default ContactForm;