import React, {FC, ChangeEvent, KeyboardEvent} from 'react'

//===============================================================================================================================================================

type InputPropsType = {
    title: string
    setTitle: (value: string) => void
    callBack: () => void
}

//===============================================================================================================================================================

export const Input: FC<InputPropsType> = (props) => {

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        props.setTitle(e.currentTarget.value)
    }

    function onKeyUpHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            props.setTitle(e.currentTarget.value)
            props.callBack()
        }
    }


    return (
        <input type="text" value={props.title} onChange={onChangeHandler} onKeyUp={onKeyUpHandler}/>
    )
}