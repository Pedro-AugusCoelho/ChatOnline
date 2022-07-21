//Styles
import styles from './styles.module.scss';

//ContextApi
import { useChatOnline } from "../../Provider"


export const MessageItem = () => {
    
    const { listMenssage , user } = useChatOnline();

    return(
        <>
        {listMenssage.map((item,k) => (
            <div 
                key={k} 
                className={styles.menssageLine} 
                style={{justifyContent:user.id === item.author ? 'flex-end' : 'flex-start' }}
            >
               
               <div 
               style={{backgroundColor:user.id === item.author ? '#DCF8C6' : '#FFF'}}
               className={styles.menssageItem}>
               
                    <div className={styles.menssageText}>{item.body}</div>
               
                    <div className={styles.menssageDate}></div>
               
               </div>
            
            </div>
        ))
        }
        </>
    )
}