import { useChatOnline } from '../../Provider';
import styles from './styles.module.scss';

export const ChatListItem = () => {
    
    const {friend, isActiveFriend, handleIsActiveFriend } = useChatOnline();

    return(
        <div className={styles.chatList}>
            
            {friend.map((item , k) => (
                <div 
                    key={k}
                    className={`${styles.chatListItem} ${item.id === isActiveFriend.id ? styles.active : ''}`} 
                    onClick={() => handleIsActiveFriend(friend[k])}
                >
                    
                    <img 
                    src={item.avatar} 
                    alt='Avatar' 
                    className={styles.chatListItemAvatar} />
                
                    <div className={styles.chatListItemLines}>
                        
                        <div className={styles.chatListItemLine}>
                            <div className={styles.chatListItemName}>{item.name}</div>
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