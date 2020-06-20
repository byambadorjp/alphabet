import React from 'react';
import './style/main.scss';
import { Title, Letters } from './components';

function App() {
    return (
        <div className='flex-col'>
            <Title />
            <Letters />
        </div>
    );
}

export default App;
