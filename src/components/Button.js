import styled from 'styled-components'
import Color from './Colors'

const Button = styled.button`
  transition: 0.3s;
  border: 1px solid ${Color.Accent};
  border-radius: 0;
  font-family: Consolas, Menlo, monospace;
  background-color: white;
  color: ${Color.Accent};

  &:hover {
    border-color: ${Color.Primary};
    background-color: ${Color.Primary};
    color: white;
  }
`

export default Button