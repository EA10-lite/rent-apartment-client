import React from "react";
import { useFormikContext } from "formik";
import "./form.css";

import FormErrorText from "./FormErrorText";
import FormInput from "./FormInput";

const FormField = ({ handleIconClick, Icon, name, placeholder, type }) => {
    const { errors, handleChange, touched, values } = useFormikContext();
    
    return (
        <div className="app__form-field">
            <FormInput 
                handleChange={handleChange}
                handleIconClick={handleIconClick}
                Icon={Icon}
                name={name}
                placeholder={placeholder}
                type={type}
                value={values[name]}
            />
            <FormErrorText 
                error={errors[name]}
                visible={touched[name]}
            />
        </div>
    )
}

export default FormField;