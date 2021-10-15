import { FormHandles, SubmitHandler } from '@unform/core'
import { PageContainer, Form, Container } from 'styles/pages/signup'

import { Input } from 'components/Input'
import * as yup from 'yup'
import { useEffect, useRef } from 'react'
import { WaveFooter } from 'components/WaveFooter'
import Link from 'next/link'
import { NextPage } from 'next'
import { api } from 'services'

interface FormData {
  email: string
  password: string
  confirmPassword: string
}

const SignUp: NextPage = () => {
  const formRef = useRef<FormHandles>(null)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Not a valid email')
      .required('This field is required'),
    password: yup.string().required('This field is required'),
    confirmPassword: yup
      .string()
      .required('This field is required')
      .test(
        'passwords-match',
        'Passwords must match',
        (value) => formRef.current?.getFieldValue('password') === value
      )
  })

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    formRef.current?.setErrors({})

    try {
      await schema.validate(formData, { abortEarly: false })

      const { data } = await api.user.create(formData)

      console.log(data)
    } catch (err) {
      const validationErrors: any = {}

      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) {
            validationErrors[error.path] = error.message
          }
        })

        formRef.current?.setErrors(validationErrors)
      }
    }
  }

  return (
    <PageContainer>
      <Container>
        <h1>Sign up</h1>

        <p>Sign up to start manage your candidates!</p>

        <Form ref={formRef} onSubmit={onSubmit}>
          <Input name="email" placeholder="Login" />
          <Input name="password" type="password" placeholder="Password" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
          />

          <Link href="/signin">
            <a>Sign in</a>
          </Link>

          <button type="submit">Sign up</button>
        </Form>
      </Container>

      <WaveFooter />
    </PageContainer>
  )
}

export default SignUp
