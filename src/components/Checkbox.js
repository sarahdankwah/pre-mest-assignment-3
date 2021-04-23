import React from 'react'
import styled from 'styled-components'

const CheckboxButton = styled.input`
&[type="Checkbox"]{

}

`
const Checkbox = () => {
    return (
        <div>
            <h2>Checkbox Button</h2>
            <CheckboxButton type='Checkbox' checked= 'true'/>
            <CheckboxButton type='Checkbox'/>
            <CheckboxButton type='Checkbox' disabled= 'true'/>
        </div>
    )
}

export default Checkbox;