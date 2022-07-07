import { useState } from 'react';
import { useChatOnline } from '../../Provider';
import { Chatintro } from '../ChatIntro';
import { ChatWindow } from '../ChatWindow';
import styles from './styles.module.scss';


export const ContentArea = () => {

    const { activeChat } = useChatOnline();
    
    return(
        
        <div className={styles.contentArea}>
            {activeChat.chatId !== undefined && <ChatWindow />}
            {activeChat.chatId === undefined && <Chatintro />}
        </div>

    ); 
};