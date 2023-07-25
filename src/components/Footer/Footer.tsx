import '../../App.scss'
import {rocket} from '../../assets/icon'

export const Footer = () => {
    return (
        <div className={'footer'}>
            <img className={'footer__icon'} src={rocket} alt={'rocket'}/>
            <span className={'footer__text'}>Exciting space adventure!</span>
        </div>
    )
}