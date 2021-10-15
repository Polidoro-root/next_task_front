import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  row-gap: 0.5rem;
`

export const Input = styled.input`
  background-color: ${(props) => props.theme.background.secondary};
  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme.text.primary};
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 0.75rem 1.125rem;
  border-radius: 0.625rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.background.secondary}cc;
  }
`

export const Error = styled.span`
  align-self: flex-end;
  font-size: 0.875rem;
  font-weight: 400;
  color: red;
`
