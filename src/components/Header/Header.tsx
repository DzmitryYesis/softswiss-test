import '../../App.scss'
import {logo, basket, menu, hover_basket} from '../../assets/icon';
import {useState} from 'react';

export const Header = () => {

    const [isHoverBasket, setIsHoverBasket] = useState(false)

    const mouseHandler = () => {
        setIsHoverBasket(!isHoverBasket)
    }

    const currentBasket = isHoverBasket ? hover_basket : basket

    return (
        <div className={'header'}>
            <img src={logo} className={'header__logo'} alt={'logo'}/>
            <div className={'menu'}>
                <span className={'menu__text'}>Home</span>
                <span className={'menu__text'}>Products</span>
                <img src={currentBasket} alt={'basket'} className={'menu__basket'}
                     onMouseOver={mouseHandler} onMouseOut={mouseHandler}/>
            </div>
            <img src={menu} className={'header__mobile-menu'} alt={'mobile-menu'}/>
        </div>
    )
}