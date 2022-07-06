import { ContentArea } from '../../components/ContentArea';
import { Sidebar } from '../../components/Sidebar';
import styles from './styles.module.scss';

export const Main = () => {
    
    return(
        
        <div className={styles.app_window}>
            <Sidebar />
            <ContentArea />
        </div>
    ); 
};