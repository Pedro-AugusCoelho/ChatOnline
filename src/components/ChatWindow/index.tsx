
import { style } from '@mui/system';
import styles from './styles.module.scss';

import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

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
                    </div>
                    
                    <div className={styles.Btn}>
                        <AttachFileIcon style={{color:'#919191'}}/>
                    </div>
                    
                    <div className={styles.Btn}>
                        <MoreVertIcon style={{color:'#919191'}}/>
                    </div>
                
                </div>
            
            </div>
            
            <div className={styles.chatWindowBody}></div>
            
            
            
            <div className={styles.chatWindowFooter}>
                
                <div className={styles.FooterPre}>

                    <div className={styles.Btn}>
                        <SearchIcon style={{color:'#919191'}} />
                    </div>
                
                </div>
                
                <div className={styles.FooterInputArea}>
                    <input 
                        type='text' 
                        className={styles.input} 
                        placeholder='Digite uma menssagem'
                    />
                </div>
                
                <div className={styles.FooterPos}>
                    
                    <div className={styles.Btn}>
                        <SendIcon style={{color:'#919191'}} />
                    </div>
                
                </div>
            
            </div>
        
        
        </div>
    
    )
}