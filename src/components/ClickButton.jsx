import './ClickButton.css';
import {useState} from "react";

function ClickButton({ text, disabled }) {
    function handleClick() {
        console.log(text);
    }
    return (
        <>

                <button type="button"
                        disabled={disabled} onClick={handleClick}>
                    to the collection
                </button>


        </>
    )
}

export default ClickButton;
