import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        
        <div className='p-4 rounded-lg '>
            
            <h2 className='text-3xl font-bold text-left bg-white p-4 rounded-lg'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object
}
export default Bookmark;