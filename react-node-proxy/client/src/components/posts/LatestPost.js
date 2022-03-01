import React, { useEffect, useState } from 'react';

import ApiService from './../../services/ApiService';
import PostItem from './PostItem';
import { Translate } from '../../locales/Translation';

const LastestPost = () => {
    const [posts, setPosts] = useState([]);

    const fetchPostData = () => {
        ApiService.get('/api/posts')
            .then(res => {
                setPosts(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchPostData();
    }, []);

    return (
        <div className="col-md-10 col-lg-8 col-xl-7">
            <h2>
                <Translate transKey="latest_post_title"/>
            </h2>
            {
                posts?.map(post => {
                    return <PostItem key={post.id} post={post}/>
                })
            }
            
            <div className="d-flex justify-content-end mb-4"><a className="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
        </div>
    )
}

export default LastestPost;