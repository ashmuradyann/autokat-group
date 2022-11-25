import styled from 'styled-components'

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: bolder;
  border: 1px solid transparent;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: .3s;
  
  &:hover {
    background-color: #ffdd00;
    color: #282828;
    border: 1px solid #000;
  }
  
  &:disabled {
    background-color: #ffffff80;
    color: #10101080;
    border: none;
    pointer-events: none;
  }
`
