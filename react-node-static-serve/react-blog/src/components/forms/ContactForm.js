import React, { useState } from 'react';

const ContactForm = () => {
    const [fullname, setFullName] = useState('');
    const [errrFullname, setErrorFullName] = useState(false);

    const [email, setEmail] = useState('');
    const [errrEmail, setErrorEmail] = useState(false);

    const [message, setMessage] = useState('');
    const [errrMessage, setErrorMessage] = useState(false);

    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (fullname === '') {
            setErrorFullName(true);
        } else {
            setErrorFullName(false);
        }

        setErrorEmail(email === '');
        setErrorMessage(message === '');

        if (fullname !== '' && email !== '' && message !== '') {
            setIsSuccess(true);
        } else {
            setIsSuccess(false);
        }
    }

    return (
        <div className="contact-form">
            {isSuccess === false &&
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input onChange={(event) => setFullName(event.target.value)} type="text" className="form-control" id="fullname" placeholder="Last Name First Name"/>
                        { errrFullname && <span className="text-warning">This field is required!</span> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input onChange={event => setEmail(event.target.value)} type="email" className="form-control" id="email" placeholder="name@example.com"/>
                        { errrEmail && <span className="text-warning">This field is required!</span> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea onChange={event => setMessage(event.target.value)} className="form-control" id="message" rows="3"></textarea>
                        { errrMessage && <span className="text-warning">This field is required!</span> }
                    </div>

                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            }

            { isSuccess &&
                <div className="success-message">
                    <h3>Thank you for contacting us</h3>
                    <p>Our team will contact you shortly.</p>
                    <button onClick={() => setIsSuccess(false)} type="submit" className="btn btn-default">
                        Submit another form
                    </button>
                </div>
            }
        </div>
    )
}

export default ContactForm;