import styled from 'styled-components';

const FieldWithBackground = styled.input`
  outline: none;
  border: none;
  width: 300px;
  background-color: grey;
  height: 45px;
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.2);
`;
const FieldWithBackgroundOutline = styled.input`
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid red;
  width: 300px;
  margin-left: 10px;
  height: 42px;
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.2);
`;
const Container = styled.div`
  display: flex;
  margin-left: 10px;
`;

const FieldWithOutBackground = styled.input`
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid green;
  width: 300px;
  margin-left: 10px;
  height: 43px;
  
`;
const InputField = () => {
  return (
    <div>
      <h2>Input Fields</h2>
      <Container>
        <FieldWithBackground placeholder="Name" />
        <FieldWithBackgroundOutline placeholder="Username" />
        <FieldWithOutBackground  placeholder="Work"/>
      </Container>
    </div>
  );
};

export default InputField;
