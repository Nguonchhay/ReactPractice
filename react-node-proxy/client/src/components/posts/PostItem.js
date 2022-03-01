import React from 'react';

const PostItem = ({post}) => {
    return (
        <>
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">{post.title}</h2>
                    <h3 className="post-subtitle">{post.subTitle}</h3>
                </a>
                <p className="post-meta">
                    Posted by
                    <a href="#!">{post.author}</a>
                    on {post.publishedDate}
                </p>
            </div>
            
            <hr className="my-4"/>
        </>
    )
}

export default PostItem;