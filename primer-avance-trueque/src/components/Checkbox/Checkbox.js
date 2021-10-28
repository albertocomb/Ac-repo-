import React from 'react'
import Checkbox from 'react-custom-checkbox';
import './Checkbox.css'

const CustomCheckbox = (props) => {
    return (
        
        <div className = "checkbox" >
            <br></br>
            <Checkbox
                checked={true}
                borderColor="#12BBFA"
                borderRadius={3}
                size={18}
                checked={props.value}
                onChange={props.onChange}
                label={props.label}
            />
        </div>
    )
}

export default CustomCheckbox;

