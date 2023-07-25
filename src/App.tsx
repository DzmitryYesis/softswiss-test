import React from 'react';
import {Header} from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import {Button} from './components/Button/Button';

function App() {
    return (
        <>
            <Header/>
            <div style={{width:'300px', height:'400px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'50px'}}>
                <Button isEmpty={false}/>
                <Button isEmpty={true}/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
