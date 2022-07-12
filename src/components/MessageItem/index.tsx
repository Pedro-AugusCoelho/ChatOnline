//Styles
import styles from 'styles.module.scss';

//ContextApi
import { useChatOnline } from "../../Provider"


export const MessageItem = () => {
    
    const { listChat } = useChatOnline();

    return(
        <>
        {listChat.map((item,k) => (
            <div key={k} className={styles.menssageLine}>
               <div className={styles.menssageItem}>
                    <div className={styles.menssageText}></div>
                    <div className={styles.menssageDate}></div>
               </div>
            </div>
        ))
        }
        </>
    )
}