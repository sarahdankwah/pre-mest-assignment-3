import React from 'react'
import styled from 'styled-components'

const RadioButton = styled.input`
&[type="radio"]{

}

`
const Radio = () => {
    return (
        <div>
            <h2>Radio Button</h2>
            <RadioButton type='radio' checked='true' />
            <RadioButton type='radio' />
            <RadioButton type='radio' disabled />
        </div>
    )
}

export default Radio
