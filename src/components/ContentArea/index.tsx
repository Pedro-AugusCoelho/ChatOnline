import { useState } from 'react';
import { useChatOnline } from '../../Provider';
import { Chatintro } from '../ChatIntro';
import { ChatWindow } from '../ChatWindow';
import styles from './styles.module.scss';


export const ContentArea = () => {

    const { activeChat } = useChatOnline();
    
    return(
        
        <div className={styles.contentArea}>
            {activeChat.id !== undefined && <ChatWindow />}
            {activeChat.id === undefined && <Chatintro />}
        </div>

    ); 
};