import { useChatOnline } from '../../Provider';
import { Input } from '../../components/Form/Input';
import styles from './styles.module.scss';

export const Login = () => {

    const { handleGoogleSignIn , handleGoogleSignInEmail } = useChatOnline();
    
    return(
        <div className={styles.MainLogin}>
            <div className={styles.BoxLogin}>

                <div className={styles.BoxForm}>
                    <h1>Acesse sua conta</h1>
                    <form onSubmit={handleGoogleSignInEmail}>
                        <Input color='#E1E1E4' title='Email' placeholder='example@example.com.br' type='email' />
                        <Input color='#E1E1E4' title='Senha' placeholder='*****' type='password'/>
                        <button className={styles.btn} type='submit'>Entrar</button>
                    </form>
                    <button className={styles.btnGoogle} onClick={handleGoogleSignIn}>Continue com o google</button>
                </div>
            
            </div>
        </div>
    )
}