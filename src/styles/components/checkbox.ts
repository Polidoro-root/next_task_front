import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'

export const Label = styled.label`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  color: ${(props) => props.theme.text.secondary};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;

  > input {
  }

  &:hover {
    input {
      background-color: ${(props) => props.theme.background.secondary}cc;
    }
  }

  > div {
    display: inherit;
    align-items: inherit;
    position: relative;
  }
`

export const Input = styled.input`
  appearance: none;
  background-color: ${(props) => props.theme.background.secondary};
  border-radius: 0.3125rem;
  width: 1.125rem;
  height: 1.125rem;
  transition: all 0.2s;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
  transition: all 0.2s;

  & + .icon {
    opacity: 0;
  }

  &:checked + .icon {
    opacity: 1;
  }
`

export const Icon = styled(FiCheck)`
  color: ${(props) => props.theme.background.primary};
  width: 1rem;
  height: 1rem;

  position: absolute;
  top: 0.075rem;
  left: 0.075rem;

  transition: all 0.2s;
`
