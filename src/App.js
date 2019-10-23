import React from 'react';
import App, {Container} from 'next/app';
import Toolbar from '../src/components/Toolbar/Toolbar'

function App() {
    return (
        <div className="App">
            <Toolbar/>
        </div>
    );
}

export default App;
