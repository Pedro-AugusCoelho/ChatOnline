import { useChatOnline } from '../../Provider';
import styles from './styles.module.scss';

export const ChatListItem = () => {
    
    const {chatList , handleActiveChat , activeChat } = useChatOnline();
    
    return(
        <div className={styles.chatList}>
            
            {chatList.map((item , k) => (
                <div 
                    key={k}
                    className={`${styles.chatListItem} ${item.chatId === activeChat.chatId ? styles.active : ''}`} 
                    onClick={() => handleActiveChat(chatList[k])}
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