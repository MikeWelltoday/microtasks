import React, {ChangeEvent, useState, KeyboardEvent, FC} from 'react'

//===============================================================================================================================================================

type FullInputPropsType = {
    addMessage: (message: string) => void
}

//===============================================================================================================================================================

export const FullInput: FC<FullInputPropsType> = (props) => {

    const [title, setTitle] = useState('')

    function onChangeInputHandler(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    function onClickButtonHandler() {
        title && props.addMessage(title)
        setTitle('')
    }

    function onAddNewMessageKeyUpHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            title && props.addMessage(title)
            setTitle('')
        }
    }

    return (
        <div>
            <input type="text" value={title} onChange={onChangeInputHandler}
                   onKeyUp={onAddNewMessageKeyUpHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}