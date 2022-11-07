const UserTab = (props)=>{
    console.log(props.users)
    return(
        <>
            <div className='userTab'>
                <div className='search-user'>
                    <input id='search' type='search' placeholder='Search' onKeyUp={(e)=>{props.search(e.target.value)}}></input>
                </div>
                
                <ul className='users-list'>
                    {props.users.length > 0 ? props.users.map((item)=>{
                        return(
                            <li className='users' onClick={()=>{props.setCurrentUser(item.name)}}>
                                <div className='user-img'>
                                    {item.image ? <img src={item.image} alt='user'/> : <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png" alt='user'/>}
                                    {/* <img src={require('../../uploads/' + item.filePath)} alt=""/> */}
                                </div>
                                {item.name}
                                {item.online ? <span className='onlineicon'></span> : null}
                            </li>
                        )
                    }): "loading..."}
                </ul>
            </div>
        </>
    )
}
export default UserTab