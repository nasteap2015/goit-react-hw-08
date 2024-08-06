import css from './Contact.module.css';
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

const Contact = ({id, name, number}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteContact(id));
         toast('Contact Deleted', {
            style: {
                background: '#F08080',
    }});
    };

    return (
        <div className={css.contactContainer}>
            <div className={css.personalData}>
                <p><IoPerson className={css.contactIcon} /> {name}</p>
                <p><FaPhone className={css.contactIcon} /> {number}</p>
            </div>
            <button className={css.deleteButton} type="button" onClick={handleClick}>Delete</button>
            <Toaster/>
        </div>
    );
};

export default Contact;