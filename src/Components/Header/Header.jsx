import s from './Header.module.css'
import logo from '../Img/logo2.svg'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <header className={s.header}>
            <Link to='/'>
                <div className={s.logo}>
                    <img src={logo} className={s.logo_img} alt="" />
                    <p className={s.logo_text}>Lora</p>
                </div>
            </Link>
        <nav className={s.menu}>
            <ul className={s.menu_list}>
                <Link to='/about'  className={s.menu_list_item}>About us</Link>
                <Link to='/gallery'  className={s.menu_list_item}>Puppies</Link>
                <Link to='/contacts'  className={s.menu_list_item}>Your order</Link>
            </ul>
        </nav>
        </header>
    )
}

export default Header