import styles from './Title.module.css'
export default function Title(props){
    return <h2 className={styles.title}>{props.title}</h2>
}