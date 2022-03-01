import React, { useState } from 'react';

const ContactFormObject = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        message: ''
    });
    const [errorFormData, setErrorFormData] = useState({
        fullname: false,
        email: false,
        message: false
    });

    const [isSuccess, setIsSuccess] = useState(false);

    const inputChangeHandler = event => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        // if (fullname === '') {
        //     setErrorFullName(true);
        // } else {
        //     setErrorFullName(false);
        // }

        // setErrorEmail(email === '');
        // setErrorMessage(message === '');

        if (formData.fullname !== '' && formData['email'] !== '' && formData.message !== '') {
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
                        <h2>Contact Form with Object State</h2>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input name="fullname" onChange={inputChangeHandler} type="text" className="form-control" id="fullname" placeholder="Last Name First Name"/>
                        { errorFormData.fullname && <span className="text-warning">This field is required!</span> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input name="email" onChange={inputChangeHandler} type="email" className="form-control" id="email" placeholder="name@example.com"/>
                        { errorFormData.email && <span className="text-warning">This field is required!</span> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea name="message" onChange={inputChangeHandler} className="form-control" id="message" rows="3"></textarea>
                        { errorFormData.message && <span className="text-warning">This field is required!</span> }
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

export default ContactFormObject;