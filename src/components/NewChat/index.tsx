import styles from './styles.module.scss';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useChatOnline } from '../../Provider';

export const NewChat = () => {

    const { ProfilechatList , handleShowNewChat , showNewChat } = useChatOnline();
    
    return(
    
        <div 
        className={styles.newChat}
        style={{left:showNewChat ? '0' : '-415px' }}
        >
            
            <div className={styles.header}>
                <div className={styles.btnBack} onClick={handleShowNewChat}>
                    <ArrowBackIcon style={{color:'#fff'}} /> 
                </div>
                <div className={styles.title}>Nova Conversa</div>
            </div> 

            <div className={styles.list}>
                {ProfilechatList.map((item) => (
                    <div className={styles.item} key={item.chatId}>
                        <img src={item.avatar} alt='Avatar' />
                        <div className={styles.itemTitle}>{item.title}</div>
                    </div>
                
                ))
                }
            </div>

        </div>
    )
}