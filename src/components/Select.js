

import styled from "styled-components";
const Select = styled.select`
  width: 30%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
const DropSelect = () => {
    return (
        <div>
            <h2>Select</h2>
            <Select>
                <option value="" hidden>
                    Type
        </option>
                <option value="1">Ghana</option>
                <option value="2">TB</option>
                <option value="3">Heb</option>
                <option value="4">Dac</option>
            </Select>
        </div>
    )
} 

export default DropSelect
