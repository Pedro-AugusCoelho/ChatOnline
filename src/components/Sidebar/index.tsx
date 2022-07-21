import styles from './styles.module.scss';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatListItem } from '../ChatListItem';
import { useChatOnline } from '../../Provider';

export const Sidebar = () => {

    const {handleIsShowAddFriend , user } = useChatOnline();
    
    return(
        
            <div className={styles.sidebar}>
                <header>
                    <img src={user.avatar} alt="Avatar" />
                    <div className={styles.Buttons}>
                        <div className={styles.Btn}>
                            <DonutLargeIcon style={{color:'#919191'}} />
                        </div>

                        <div className={styles.Btn} onClick={handleIsShowAddFriend}>
                            <ChatIcon style={{color:'#919191'}} />
                        </div>

                        <div className={styles.Btn}>
                            <MoreVertIcon style={{color:'#919191'}} />
                        </div>
                        
                    </div>
                
                </header>
                
                
                <div className={styles.search}>
                    <div className={styles.searchInput}>
                    
                        <SearchIcon fontSize='small' style={{color:'#919191'}} />
                        <input 
                            type='search'
                            placeholder='Procure ou comece uma conversa' 
                        />
                    
                    </div>
                </div>
                
                <ChatListItem />
            
            </div>

    ); 
};