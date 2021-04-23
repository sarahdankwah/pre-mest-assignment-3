import { Fragment } from 'react'
import styled from 'styled-components'


const ButtonDefault = styled.button`
  background-color: transparent;
  align-content: center;
  color: blue;
  font-size: 1em;
  padding: 0.25rem 1em;
  border: 2px solid blue;
  height: 45px;
  width:130px;
`

const ButtonOnHover = styled.button`
  margin-left: 20px;
  background-color: cornflowerblue;
  align-content: center;
  color: whitesmoke;
  font-size: 1em;
  padding: 0.25rem 1em;
  border: 2px solid cornflowerblue;
  height: 45px;
  width:130px;
`
const Container = styled.div`
  &:hover  ${ButtonOnHover}{
  background-color: mediumturquoise;
  border: 2px solid mediumturquoise;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.2);
}
display: flex;
margin-left: 10px;
`

const ButtonPressed = styled.button`
  margin-left: 20px;
  background-color: blue;
  align-content: center;
  color: whitesmoke;
  font-size: 1em;
  padding: 0.25rem 1em;
  border: 2px solid blue;
  height: 45px;
  width:130px;
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.2);
`

const ButtonCircular = styled.button`
  margin-left: 20px;
  background-color: blue;
  align-content: center;
  color: whitesmoke;
  font-size: 1em;
  padding: 0.25rem 1em;
  border: 2px solid blue;
  border-radius: 50px;
  height: 45px;
  width:130px;
`

const ButtonDisable = styled.button`
  margin-left: 20px;
  background-color: gray;
  align-content: center;
  color: whitesmoke;
  font-size: 1em;
  padding: 0.25rem 1em;
  border: 2px solid gray;
  
  height: 45px;
  width:130px;
`

const Button = () => {
    return (
        <Fragment>
            <h2>Button</h2>
            <Container>
                <ButtonDefault>
                    Default
            </ButtonDefault>
                <ButtonOnHover>
                    On Hover
                </ButtonOnHover>
                <ButtonPressed>
                    Pressed
                </ButtonPressed>
                < ButtonCircular>
                    Rounded
                </ButtonCircular>
                <ButtonDisable>
                    Disable
                </ButtonDisable>
            </Container>
        </Fragment>
    )
}



export default Button