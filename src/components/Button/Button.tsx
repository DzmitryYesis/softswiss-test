import cn from 'classnames';
import '../../App.scss'

type ButtonPropsType = {
    isEmpty: boolean
}

export const Button = ({isEmpty}: ButtonPropsType) => {
    return (
        <button className={cn('button', {
            ['button_empty']: isEmpty
        })}>Learn more</button>
    )
}