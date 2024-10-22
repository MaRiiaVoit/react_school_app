import logo from '/logo-name.svg'

export default function Header() {
    const now = new Date()

    return (
        <header>
            <img src={logo} alt={'Result'} />
            {/* <h3>School of English</h3> */}

            <span>Время сейчас: {now.toLocaleTimeString()}</span>
        </header>
    );
}