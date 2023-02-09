import React from 'react';

export default function Tag({tag, handleTag}) {

    return (
        <div className='tag'>
            <input type="checkbox" name="tags" value={tag.id} onChange={handleTag}/>
            <label htmlFor={tag.id}>{tag.text}</label><br></br>
        </div>
    )
}