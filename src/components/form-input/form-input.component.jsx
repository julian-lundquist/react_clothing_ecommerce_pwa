import {FormGroupContainer, FormInputContainer, FormInputLabelContainer} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <FormGroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ? (<FormInputLabelContainer className={`${otherProps.value.length ? 'shrink' : ''}`}> {label} </FormInputLabelContainer>) : null
        }
    </FormGroupContainer>
);

export default FormInput;