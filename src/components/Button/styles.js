import styled, {css} from "styled-components";

const buttonStyles = css`
  border: 3px solid #ffffff;
  border-radius: 30px;
  background: transparent;
  color: #ffffff;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;

  &:hover{
    background: #ffffff;
    color: red;
  }

`

export const ButtonWhite = styled.button `
    ${buttonStyles}

`
export const ButtonRed = styled.button `
    ${buttonStyles}
    background: red;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);

    &:hover{
        color: white;
        background: red;
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 /30%);
    }
    

`