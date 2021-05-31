import styled from 'styled-components'

const Button = styled.button`
  transition: 0.3s;
  border: 1px solid black;
  border-radius: 0;
  font-family: Consolas, Menlo, monospace;
  background-color: white;

  &:hover {
    background-color: rgba(1, 1, 1, 0.1);
  }
`

export default Button