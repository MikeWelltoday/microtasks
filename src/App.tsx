import React, {useState} from 'react'
import './App.css'
import {FullInput} from './components/fullInput/FullInput'
import {Input} from './components/inputWithButton/Input'
import {Button} from './components/inputWithButton/Button'

//===============================================================================================================================================================

type message = { message: string }

//===============================================================================================================================================================

function App() {
    const [messages, setMessages] = useState<message[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    //--------------------------------------------------------------------------------------
    // fullInput

    function addMessage(message: string) {
        setMessages([{message: message}, ...messages])
    }

    //--------------------------------------------------------------------------------------
    // inputWithButton

    const [title, setTitle] = useState<string>('')

    function addMessageWithOnlyInput() {
        setMessages([{message: title}, ...messages])
        setTitle('')
    }

    //--------------------------------------------------------------------------------------

    return (
        <div className={'App'}>
            <FullInput addMessage={addMessage}/>
            <Input title={title} setTitle={setTitle} callBack={addMessageWithOnlyInput}/>
            <Button callBack={addMessageWithOnlyInput} name={'+'}/>
            {messages.map((item, index) => <div key={index}>{item.message}</div>)}
        </div>
    )
}

export default App




