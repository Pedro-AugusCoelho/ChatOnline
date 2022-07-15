import { useChatOnline } from '../../Provider';
import styles from './styles.module.scss';

export const Login = () => {

    const { handleGoogleLogin } = useChatOnline();
    
    return(
        <div className={styles.MainLogin}>
            <div className={styles.BoxLogin}>
                
                <button onClick={handleGoogleLogin}>
                    <p>Logar Pelo Google</p>
                </button>
            
            </div>
        </div>
    )
}