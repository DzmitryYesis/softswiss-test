import {Button} from '../../Button/Button';
import '../../../App.scss';
import {CardsDataType} from '../cardsData';

type CardPropsType = {
    card: CardsDataType
}

export const Card = ({card}: CardPropsType) => {

    const {title, info, img} = card

    return (
        <div className={'card'}
             style={{backgroundImage: `url(${img})`}}>
            <span className={'card__title'}>{title}</span>
            <span className={'card__info'}>{info}</span>
            <Button isEmpty={true}/>
        </div>
    )
}