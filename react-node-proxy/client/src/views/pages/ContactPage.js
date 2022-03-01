import React from 'react';

import AppLayout from '../layouts/AppLayout';
import ContactFormObject from '../../components/forms/ContactFormObject';

const ContactPage = () => {
    return (
        <AppLayout>
            <h2>Contact page</h2>
            <ContactFormObject/>
        </AppLayout>
    )
}

export default ContactPage;