import { InputHTMLAttributes } from "react";
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title:string;
  color:string;
}


export const Input = ({color, title, ...rest}:InputProps) => {
    return(
        <div className={styles.Box}>
            <label>{title}</label>
            <input style={{backgroundColor:color}} {...rest}/>
        </div>
    )
}