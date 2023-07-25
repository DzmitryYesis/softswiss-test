import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {ContentHeader} from './components/ContentHeader/ContentHeader';
import {MainContent} from './components/MainContent/MainContent';

function App() {
    return (
        <>
            <Header/>
            <ContentHeader/>
            <MainContent/>
            <Footer/>
        </>
    );
}

export default App;
