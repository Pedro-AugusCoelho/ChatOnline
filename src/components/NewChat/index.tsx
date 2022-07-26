import styles from './styles.module.scss';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useChatOnline } from '../../Provider';

export const NewChat = () => {

    const { allUsersApp , handleIsShowAddFriend, handleAddFriend , isShowAddFriend, friend } = useChatOnline();
    
    return(
    
        <div 
        className={styles.newChat}
        style={{left:isShowAddFriend ? '0' : '-415px' }}
        >
            
            <div className={styles.header}>
                <div className={styles.btnBack} onClick={handleIsShowAddFriend}>
                    <ArrowBackIcon style={{color:'#fff'}} /> 
                </div>
                <div className={styles.title}>Nova Conversa</div>
            </div> 

            <div className={styles.list}>
                {allUsersApp.map((item) => (
                    <div className={styles.item} key={item.id} onClick={e => handleAddFriend(item)}>
                        <img src={item.avatar} alt='Avatar' />
                        <div className={styles.itemTitle}>{item.name}</div>
                    </div>
                ))
                }
            </div>

        </div>
    )
}