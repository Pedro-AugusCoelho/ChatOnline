import { useChatOnline } from '../../Provider';
import styles from './styles.module.scss';

export const ChatListItem = () => {
    
    const {ProfilechatList , handleActiveChat , activeChat } = useChatOnline();
    
    return(
        <div className={styles.chatList}>
            
            {ProfilechatList.map((item , k) => (
                <div 
                    key={k}
                    className={`${styles.chatListItem} ${item.id === activeChat.id ? styles.active : ''}`} 
                    onClick={() => handleActiveChat(ProfilechatList[k])}
                >
                    
                    <img 
                    src={item.avatar} 
                    alt='Avatar' 
                    className={styles.chatListItemAvatar} />
                
                    <div className={styles.chatListItemLines}>
                        
                        <div className={styles.chatListItemLine}>
                            <div className={styles.chatListItemName}>{item.title}</div>
                            <div className={styles.chatListItemDate}>19:00</div>
                        </div>

                        <div className={styles.chatListItemLine}>
                           <div className={styles.chatListItemLastMsg}>
                                <p>Opa, Tudo bem?</p>
                           </div>
                        </div>
                   
                    </div>
                
                </div>
            ))

            }
        </div>
    )
}