import React from 'react';
import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img,posted_date, time, hashtags} = blog;

    return (
        <div className=' text-left mb-20'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between items-center my-4'>
                <div className='flex'>
                    <img className='w-16' src={author_img} alt="" />
                <div className='ml-4 '>
                    <p className="text-3xl font-bold">{author}</p>
                    <p className='text-left'>{posted_date}</p>
                </div>
                </div>
                <div className='flex items-center'>
                    <span className='text-xl'>{time} minute read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}
                    className='ml-2 text-2xl text-red-700'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h4 className='text-4xl font-bold'>{title}</h4>
            <p className='my-4'>
                {
                    hashtags.map((hash, idx) =><span key={idx}><a className='text-2xl text-blue-700 mr-3' href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(time)}
            className='text-2xl text-purple-700 font-bold underline'>Mark As Read</button>

        </div>
    );
};

Blog.proptypes = {
    blog: PropTypes.object.isRequired,
    bookmarks: PropTypes.func
}

export default Blog;