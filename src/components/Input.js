import styled from 'styled-components'
import Color from './Colors'

const Input = styled.input`
  transition: 0.3s;
	box-sizing: border-box;
  margin: 5px 0;
  border: 2px solid ${Color.Secondary};
  border-radius: 0;
  width: 27vw;
  max-width: 315px;
  min-width: 250px;
  height: 35px;
  padding: 5px;
  outline: none;
  font-family: Consolas, Menlo, monospace;
  background-color: white;

  &.error {
    border-color: ${Color.Accent};
    box-shadow: inset 0 0 3px rgba(0, 1, 0, 0.5);
  }

  &:hover, :focus {
    border-color: ${Color.Primary};
    background-color: rgba(1, 1, 1, 0.05);
  }
`

export default Input