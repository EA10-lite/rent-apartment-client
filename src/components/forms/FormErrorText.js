import React from "react";
import "./form.css";

const FormErrorText = ({ error, visible }) => {
    if(!visible){
        return null;
    }

    return (
        <p className="app__form-error_text"> { error  } </p>
    )
}

export default FormErrorText;