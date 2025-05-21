import './header.css'

function HeaderComponent() {
    return (
        <header>
            <h1>Logo</h1>
            <nav>
                <a href="/">HOME</a>
                <a href="/">ABOUT</a>
                <a href="/">SERVICES</a>
                <a href="/">CONTACT</a>
            </nav>
            <button>Login</button>
        </header>
    )
}
export default HeaderComponent;