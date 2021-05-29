import styled from 'styled-components'

const Button = styled.button`
  font-family: Consolas, Menlo, monospace;
  border: 1px solid black;
  border-radius: 0;
  background-color: white;
  transition: 0.3s;

  &:hover {
    background-color: rgba(1, 1, 1, 0.1);
  }
`

export default Button