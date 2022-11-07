import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'
// import ChatTab from './chatTab';
// import UserTab from './userTab';

const Chat = ()=>{
    const [currentUser, setCurrentUser] = useState('');
    const [message, setMessage] = useState('')

    const initialArr = [
        {
            "name": "kaylin",
            id: 32121321,
            "online": false,
            "image": "./image/user.jpg"
        },
        {
            "name": "hari",
            id: 32121321,
            "online": true
        },
        {
            "name": "shyam",
            id: 123333,
            "online": true
        }
    ]

    const [availableUser, setAvailableUser] = useState(initialArr)

    // search function
    const searchName = (text)=>{
        const tempUsers = [...availableUser]
        const serachFilter = tempUsers.filter((item)=>{
            if(item.name.includes(text)){
                return item
            }
        })
        setAvailableUser(serachFilter)
    }

    return(
        <>
            <div className='chat-box'>
                <div className='chatTab'>
					<div className="user">
						<h2 className='username'>{currentUser}</h2>
					</div>

                    <div className='message-box'>
						<textarea onKeyUp={(e)=> setMessage(e.target.value)}></textarea>
						<button className='send-btn' onClick={()=> null}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>

                <div className='userTab'>
                    <div className='search-user'>
                        <input id='search' type='search' placeholder='Search' onKeyUp={(e)=>{searchName(e.target.value)}}></input>
                    </div>

                    <ul className='users-list'>
                        {availableUser.length > 0 ? availableUser.map((item)=>{
                            return(
                                <li className='users' onClick={()=>{setCurrentUser(item.name)}}>
                                    <div className='user-img'>
                                        {item.image ? <img src={item.image} alt='user'/> : <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" alt='user'/>} 
                                    </div>
                                    {item.name}
                                    {item.online ? <span className='onlineicon'></span> : null}
                                </li>
                            )
                        }): "loading"}
                    </ul>
                </div>
            </div>

            {/* <div className='chat-box'>
                <ChatTab currentUser={currentUser} messasge={message}/>
                <UserTab users={availableUser} search={searchName}/>
            </div> */}
        </>
    )
}
export default Chat