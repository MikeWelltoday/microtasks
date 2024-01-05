import React, {useState} from 'react'
import './App.css'
import {FullInput} from './components/FullInput'

//===============================================================================================================================================================


//===============================================================================================================================================================

function App() {
    const [messages, setMessages] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])


    return (
        <div className={'App'}>
            <FullInput/>
            {messages.map((item, index) => <div key={index}>{item.message}</div>)}
        </div>
    )
}

export default App




