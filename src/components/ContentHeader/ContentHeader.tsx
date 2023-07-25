import {Button} from '../Button/Button';

export const ContentHeader = () => {
    return (
        <div className={'content'}>
            <span className={'content__title'}>Discover the vast expanses of <span
                className={'content__title_violet'}>space</span></span>
            <span className={'content__text'}>Where the possibilities are <span
                className={'content__text_yellow'}>endless!</span></span>
            <Button isEmpty={false}/>
        </div>
    )
}