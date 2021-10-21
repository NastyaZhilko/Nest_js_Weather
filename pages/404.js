import A from "../components/A";
import styles from "../styles/404.module.scss";


export default function Error() {
    return (
        <div className={styles.error}>
            <h1>
                My custom error page!
            </h1>
            <A href='/' text='Home'/>
        </div>
    )
}