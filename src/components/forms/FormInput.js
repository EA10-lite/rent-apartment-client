import React from "react";
import "./form.css";

const FormInput = ({ handleChange, handleIconClick, Icon, name, placeholder, type, value}) => {
    const handleClick = () => {
        if(handleIconClick){
            handleIconClick()
        }

        return null;
    }

    return (
        <div className="app__form-input_container">
            <input 
                className="app__form-input"
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
                value={value}
            />
            { Icon && <Icon 
                onClick={handleClick}
            />}
        </div>
    )
}

export default FormInput;