import { ContentArea } from '../../components/ContentArea';
import { NewChat } from '../../components/NewChat';
import { Sidebar } from '../../components/Sidebar';
import styles from './styles.module.scss';

export const Main = () => {
    
    return(
        
        <div className={styles.app_window}>
            <NewChat />
            <Sidebar />
            <ContentArea />
        </div>
    ); 
};