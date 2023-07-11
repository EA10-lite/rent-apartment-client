import React from "react";
import { useFormikContext } from "formik";
import "./form.css";

const FormButton = ({ Icon, loading, title}) => {
    const { handleSubmit } = useFormikContext();
    return (
        <button 
            className="app__form-btn d-flex item-center justify-center gap-1"
            onClick={handleSubmit}
        >
            { Icon && <Icon /> }
            <span> { title } </span>
        </button>
    )
}
export default FormButton;