import React from 'react';

const OnlineUsers = () => {
    return (
        <div className='onlineUsers'>
            <div className="header">
                <img src="../../public/logo.png" alt="" />
                <p>Online Users</p>
            </div>
            <div className="users">
                <div className="user">
                    <p className='cn-icon'>a</p>
                    <p className='cn-name'>omar</p>
                </div>
            </div>
        </div>
    );
}

export default OnlineUsers;
