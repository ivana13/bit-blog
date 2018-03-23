import React from 'react';
import {PostsList} from '../blog/PostsList';

const HomePage = () => {

    return (
        <div className="container">
            <h2>Posts</h2>
            <PostsList />
            <PostsList />
            <PostsList />
            <PostsList />
            <PostsList />
            <PostsList />
            <PostsList />
            <PostsList />
        </div>
    )
}

export { HomePage };   