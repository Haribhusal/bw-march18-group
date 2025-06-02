import React from 'react'

const Comment = ({ commentData }) => {
    return (
        <div className="comment bg-white p-3 shadow rounded">
            <p className='mb-3'>
                {commentData.body}
            </p>
            <div className="user border-l-2 pl-3 border-red-400">
                <h3 className='font-bold'>{commentData.name}</h3>
                <p className='text-slate-600'>{commentData.email}</p>
            </div>
        </div>
    )
}

export default Comment