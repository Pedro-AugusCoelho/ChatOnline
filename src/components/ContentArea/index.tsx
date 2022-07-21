import { useState } from 'react';
import { useChatOnline } from '../../Provider';
import { Chatintro } from '../ChatIntro';
import { ChatWindow } from '../ChatWindow';
import styles from './styles.module.scss';


export const ContentArea = () => {

    const { isActiveFriend } = useChatOnline();
    
    return(
        
        <div className={styles.contentArea}>
            {isActiveFriend.id !== undefined && <ChatWindow />}
            {isActiveFriend.id === undefined && <Chatintro />}
        </div>

    ); 
};