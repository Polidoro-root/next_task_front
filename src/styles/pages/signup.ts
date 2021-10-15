import styled, { keyframes } from 'styled-components'
import { Form as Unform } from '@unform/web'

export const PageContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  background-color: ${(props) => props.theme.background.tertiary};
`

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 22rem;

  color: ${(props) => props.theme.text.primary};

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1rem;
    margin-top: 2.5rem;
    margin-bottom: 3.5rem;
  }
`

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 18.75rem;
  row-gap: 0.875rem;

  > button,
  > a {
    width: 100%;
    padding: 0.75rem 1.125rem;
    border-radius: 0.625rem;
    text-align: center;
    font-size: 1rem;
    font-weight: 400;

    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
  }

  > a {
    margin-top: 0.875rem;
    color: ${(props) => props.theme.text.primary};
    background-color: ${(props) => props.theme.background.secondary};

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.background.secondary}cc;
    }
  }

  > button {
    background-color: ${(props) => props.theme.background.primary};
    color: ${(props) => props.theme.text.primary};

    transition: all 0.2s;

    &:hover {
      background-color: ${(props) => props.theme.background.primary}cc;
    }
  }
`
