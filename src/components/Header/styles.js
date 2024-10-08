import styled from "styled-components";

export const Container = styled.div`
  min-height:100px;
  z-index: 99;
  position: fixed;
  top: 0;
  display: flex;
  padding: 10px 50px;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.6s ease-in-out; 
  background-color: ${(props) => props.changeBackground? 'black':'transparent'};

  img {
    width: 25%;
  }
`;
export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;
export const Li = styled.li`
  font-weight: 600;
  font-size: 28px;
  cursor: pointer;
  position: relative;
  
  a {
    text-decoration: none;
    color: white;
  }
  &::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive?'100%': 0)};
    background-color: green;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out; 
  }
;
`