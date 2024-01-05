import React, {FC} from 'react'

//===============================================================================================================================================================

type ButtonPropsType = {
    name: string,
    callBack: () => void
}

//===============================================================================================================================================================

export const Button: FC<ButtonPropsType> = (props) => {

    function onClickButtonHandler() {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    )
}