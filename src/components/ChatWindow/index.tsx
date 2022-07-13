//Styles
import styles from './styles.module.scss';

//Libs
import EmojiPicker from 'emoji-picker-react';

//Icons
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

//Hooks
import React , { useState , useEffect, useRef } from 'react';

//Components
import { MessageItem } from '../MessageItem';

//Types
import { EmojiType } from '../../types';

//ContextAPI
import { useChatOnline } from '../../Provider';

export const ChatWindow = () => {

    const body = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    
    const { user , listChat } = useChatOnline();

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    },[listChat]);

    const [text , setText ] = useState('');
    const [emojiOpen, setEmojiOpen] = useState(false);
    
    const handleEmojiClick = (e:any,emojiObject:EmojiType) => {
        setText(text + emojiObject.emoji);
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    }

    const handleSendClick = () => {
        //
    }
    
    return(
        
        <div className={styles.chatWindow}>
            <div className={styles.chatWindowHeader}>
                <div className={styles.HeaderInfo}>
                    <img src={user.avatar} alt="Avatar" />
                    <div className={styles.HeaderName}>{user.name}</div>
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
            
            <div ref={body} className={styles.chatWindowBody}>
                <MessageItem/>
            </div>

            <div 
            style={{height: emojiOpen ? '300px' : '0px'}}
            className={styles.chatWindowEmojiPickerArea}>
                <EmojiPicker 
                    onEmojiClick={handleEmojiClick}
                    disableAutoFocus
                    disableSkinTonePicker
                    disableSearchBar
                    pickerStyle={{width:'auto'}}
                />
            </div>
            
            <div className={styles.chatWindowFooter}>
                
                <div className={styles.FooterPre}>

                    <div 
                    style={{width:emojiOpen?40:0}}
                    onClick={handleCloseEmoji}
                    className={styles.Btn}>
                        <CloseIcon style={{color:'#919191'}} />
                    </div>

                    <div 
                    onClick={handleOpenEmoji}
                    className={styles.Btn}
                    >
                        <InsertEmoticonIcon style={{color:emojiOpen?'#009688' :'#919191'}} />
                    </div>
                
                </div>
                
                <div className={styles.FooterInputArea}>
                    <input 
                        type='text' 
                        className={styles.input} 
                        placeholder='Digite uma menssagem'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                
                <div className={styles.FooterPos}>
                    
                    <div onClick={handleSendClick} className={styles.Btn}>
                        <SendIcon style={{color:'#919191'}} />
                    </div>
                    
                </div>
            
            </div>
        
        
        </div>
    
    )
}