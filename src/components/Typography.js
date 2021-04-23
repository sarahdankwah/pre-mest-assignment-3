import React from 'react'
import styled from 'styled-components'

const HeaderType = styled.h1`
    color: black;
    margin-right: 10px;
    font-size:40px;
`

const Pair = styled.div`
  align-items: center;
  align-content: center;
  margin-left: 10px;

  line-height: 0;
  display: flex;
`
const HeaderType1 = styled.h2`
    color: black;
    margin-right: 10px;
    font-size:30px;
    margin-right: 10px;
`
const HeaderType2 = styled.h3`
    color: black;
    font-size:25px;
    margin-right: 10px;
`
const HeaderType3 = styled.h4`
    color: black;
    font-size:20px;
    margin-right: 10px;
`
const HeaderType4 = styled.h5`
    color: black;
    font-size:19px;
    margin-right: 10px;
`
const HeaderType5 = styled.h6`
    color: black;
    align-content: center;
    margin-right: 10px;
    align-items: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;

  
`;
const Typography = () => {
    return (
        <div>
            <h2>Typography</h2>
            <Container>
                <Pair>
                    <HeaderType>Aa</HeaderType>
                    
                    <p>Heading 1</p>
                </Pair>
                <Pair>
                    <HeaderType1>Bb</HeaderType1>
                    <p>Heading 2</p>
                </Pair>
                <Pair>
                    <HeaderType2>Cc</HeaderType2>
                    <p>Heading 3</p>
                </Pair>
                <Pair>
                    <HeaderType3>Dd</HeaderType3>
                    <p>Heading 4</p>
                </Pair>
                <Pair>
                    <HeaderType4>Ee</HeaderType4>
                    <p>Heading 5</p>
                </Pair>
                <Pair>
                    <HeaderType5>Ff</HeaderType5>
                    <p>Heading 5</p>
                </Pair>
            </Container>

        </div>
    )
}

export default Typography
