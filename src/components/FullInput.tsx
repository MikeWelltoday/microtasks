import React, {ChangeEvent, useState} from 'react'

//===============================================================================================================================================================

export const FullInput: React.FC = () => {

    const [inputValue, setInputValue] = useState('')

    function onInputValueChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setInputValue(e.currentTarget.value)
    }

    function onAddNewMessageClickHandler() {
        inputValue && console.log(inputValue)
        setInputValue('')
    }

    function onAddNewMessageKeyUpHandler(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            inputValue && console.log(inputValue)
            setInputValue('')
        }
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={onInputValueChangeHandler}
                   onKeyUp={onAddNewMessageKeyUpHandler}/>
            <button onClick={onAddNewMessageClickHandler}>+</button>
        </div>
    )
}