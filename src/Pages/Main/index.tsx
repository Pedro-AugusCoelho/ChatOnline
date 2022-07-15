import { useState } from 'react';
import { ContentArea } from '../../components/ContentArea';
import { NewChat } from '../../components/NewChat';
import { Sidebar } from '../../components/Sidebar';
import { useChatOnline } from '../../Provider';
import { Login } from '../Login';
import styles from './styles.module.scss';

export const Main = () => {
    
    const { user } = useChatOnline();

    if(user.id === undefined ){
        return(
            <Login />
        )
    }
   
    return(
        
        <div className={styles.app_window}>
            <NewChat />
            <Sidebar />
            <ContentArea />
        </div>
    ); 
};