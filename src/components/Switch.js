import React from 'react'
import styled from 'styled-components'

const SwitchButton = styled.input`
&[type="slider"]{

}

`

const Switch = () => {
    return (
        <div>
            <h2>Switch Button</h2>
            <SwitchButton type='slider' checked= 'true'/>
            <SwitchButton type='slider'/>
            <SwitchButton type='Switch' disabled= 'true'/>
        </div>
    )
}

export default Switch;