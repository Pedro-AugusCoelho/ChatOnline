import styles from './styles.module.scss';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatListItem } from '../ChatListItem';

export const Sidebar = () => {
    
    return(
        
            <div className={styles.sidebar}>
                <header>
                    <img 
                        src="https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg" 
                        alt=""
                    />
                    <div className={styles.Buttons}>
                        <div className={styles.Btn}>
                            <DonutLargeIcon style={{color:'#919191'}} />
                        </div>

                        <div className={styles.Btn}>
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
                
                <ChatListItem/>
                
            
            
            
            </div>

    ); 
};