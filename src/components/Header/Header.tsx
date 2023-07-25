import '../../App.scss'
import {logo, basket, menu, hover_basket, close_menu} from '../../assets/icon';
import {useState} from 'react';
import cn from 'classnames';

export const Header = () => {

    const [isHoverBasket, setIsHoverBasket] = useState(false)
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const mouseHandler = () => {
        setIsHoverBasket(!isHoverBasket)
    }

    const menuHandler = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const currentBasket = isHoverBasket ? hover_basket : basket
    const menuIcon = isOpenMenu ? close_menu : menu

    return (
        <div className={'header'}>
            <img src={logo} className={'header__logo'} alt={'logo'}/>
            <div className={'menu'}>
                <span className={'menu__text'}>Home</span>
                <span className={'menu__text'}>Products</span>
                <img src={currentBasket} alt={'basket'} className={'menu__basket'}
                     onMouseOver={mouseHandler} onMouseOut={mouseHandler}/>
            </div>
            <img src={menuIcon} className={'header__mobile-menu'} alt={'mobile-menu'}
                 onClick={menuHandler}/>
            <div className={cn('burger', {
                ['burger_active']: isOpenMenu
            })}>
                <span className={'burger__text'}>Home</span>
                <span className={'burger__text'}>Products</span>
                <span className={'burger__text'}>Basket</span>
            </div>
        </div>
    )
}