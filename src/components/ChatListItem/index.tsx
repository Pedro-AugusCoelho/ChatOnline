import { useChatOnline } from '../../Provider';
import styles from './styles.module.scss';

export const ChatListItem = () => {
    
    const {chatList} = useChatOnline();
    
    return(
        <div className={styles.chatList}>
            
            {chatList.map((item , k) => (
                <div key={k} className={styles.chatListItem}>
                    <img 
                    src='https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg' 
                    alt='Avatar' 
                    className={styles.chatListItemAvatar} />
                
                    <div className={styles.chatListItemLines}>
                        
                        <div className={styles.chatListItemLine}>
                            <div className={styles.chatListItemName}>Pedro Augusto</div>
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