import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts } from '../features/posts/postSlice';
import Loading from './Loading';

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.post);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <Loading />
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    const reversedPosts = [...posts].reverse();

    return (
        <div className="flex flex-col gap-2">
            {reversedPosts.map((post) => (
                <Post key={post.id} id={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    );
};

export default PostList;
