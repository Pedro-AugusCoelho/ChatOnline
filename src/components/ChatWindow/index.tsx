
import { style } from '@mui/system';
import styles from './styles.module.scss';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export const ChatWindow = () => {
    return(
        
        <div className={styles.chatWindow}>
            <div className={styles.chatWindowHeader}>
            
                <div className={styles.HeaderInfo}>
                    <img src="https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-criador-de-avatar-masculino.jpg" alt="" />
                    <div className={styles.HeaderName}>Bonieky Lacerda</div>
                </div>
                
                <div className={styles.HeaderBtns}>
                    <div className={styles.Btn}>
                        <SearchIcon style={{color:'#919191'}} />
                        <AttachFileIcon style={{color:'#919191'}}/>
                        <MoreVertIcon style={{color:'#919191'}}/>
                    </div>
                </div>
            
            </div>
            
            <div className={styles.chatWindowBody}></div>
            <div className={styles.chatWindowFooter}></div>
        </div>
    
    )
}