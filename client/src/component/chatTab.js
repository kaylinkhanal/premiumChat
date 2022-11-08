import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const ChatTab = (props)=>{
    
    return(
        <>   
            <div className='chatTab'>
                <div className="user">
                    <h2 className='username'>{props.currentUser}</h2>
                </div>

                <div className='message-box'>
                    <textarea onKeyUp={(e)=> props.setMessage(e.target.value)}></textarea>
                    <div className='send-btn' >
                        <button onClick={()=> null}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChatTab