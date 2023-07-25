import {card1, card2, card3, card4} from '../../assets/icon/index';

export type CardsDataType = {
    title: string,
    info: string,
    img: string
}

export const cards: CardsDataType[] = [
    {
        title: 'Move the borders of reality!',
        info: 'Go on a space adventure - it\'s possible with us!',
        img: card1
    },
    {
        title: 'Space is not just stars and planets',
        info: 'Go on a space adventure',
        img: card2
    },
    {
        title: 'For those who dream of stars',
        info: 'Our offer: make your dream come true',
        img: card3
    },
    {
        title: 'Fulfill your fantastic dreams',
        info: 'Space has never been so close',
        img: card4
    }
];