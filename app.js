import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './components/Todo';

const App = ()=>
{
    return (
        <div className='App'><Todo/></div>
    )
}




ReactDOM.render(<App/>,document.getElementById("root"))

const root= ReactDOM.createRoot(document.getElementById("root"));