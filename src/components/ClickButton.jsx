import './ClickButton.css';
import {useState} from "react";

function ClickButton({ text, disabled }) {
    function handleClick() {

    }
    return (
        <>

                <button type="button"
                        disabled={disabled} onClick={handleClick}>
                    {text}
                </button>


        </>
    )
}

export default ClickButton;
