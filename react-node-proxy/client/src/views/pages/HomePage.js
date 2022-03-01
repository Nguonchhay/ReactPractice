import React from 'react';

import AppLayout from '../layouts/AppLayout';
import LastestPost from './../../components/posts/LatestPost';

const HomePage = () => {
    return (
        <AppLayout>
            <LastestPost/>
        </AppLayout>
    )
}

export default HomePage;