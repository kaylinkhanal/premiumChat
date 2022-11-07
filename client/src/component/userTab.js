const UserTab = (props)=>{
    console.log(props.users)
    return(
        <>
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
        </>
    )
}
export default UserTab