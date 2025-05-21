// import './Header.css'
import styles from './Header.module.css'
import MyLink from './LinkComponent';
function Header() {
    return (
        <header className={'bg-green-400 px-4'}>
            <h1 className={styles.logo}>Logo</h1>
            <nav className={styles.links}>
                <MyLink />
                <a href="#" className={styles.link}>
                    Link 1
                </a>
                <a href="#" className={styles.link}>
                    Link 1
                </a>
                <a href="#" className={styles.link}>
                    Link 1
                </a>
            </nav>
        </header>
    )
}
export default Header;