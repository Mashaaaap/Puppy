import s from './Header.module.css'
import logo from '../Img/logo.svg'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
            <Link to='/'><img src={logo} alt="" /></Link>
            <p className={s.logo_text}>Lora</p>
        </div>
        <nav className={s.menu}>
            <ul className={s.menu_list}>
                <Link to='/about'  className={s.menu_list_item}>About us</Link>
                <Link to='/gallery'  className={s.menu_list_item}>Gallery</Link>
                <Link to='/contacts'  className={s.menu_list_item}>Your order</Link>
            </ul>
        </nav>
        </header>
    )
}

export default Header