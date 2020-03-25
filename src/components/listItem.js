import React from 'react';
const ListItem = (props) => {
    const { title, content, time , author} = props
    return (
        <div className="list-item">
            <h2 className='title'>{title}</h2>
            <div className="list-main">
                <div className="info">
                    <span>{author}</span>
                    <span>{time}</span>
                </div>
                <div>{content}</div>
            </div>
        </div>
    );
}

export default ListItem;