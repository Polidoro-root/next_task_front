import { FormHandles, SubmitHandler } from '@unform/core'
import { NextPage } from 'next'
import Link from 'next/link'
import { PageContainer, Form, Container } from 'styles/pages/signin'

import { Input } from 'components/Input'
import { Checkbox } from 'components/Checkbox'
import * as yup from 'yup'
import { useRef } from 'react'
import { WaveFooter } from 'components/WaveFooter'
import { api } from 'services'

interface FormData {
  email: string
  password: string
  confirmPassword: boolean
}

const SignIn: NextPage = () => {
  const formRef = useRef<FormHandles>(null)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Not a valid email')
      .required('This field is required'),
    password: yup.string().required('This field is required')
  })

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    formRef.current?.setErrors({})

    try {
      await schema.validate(formData, { abortEarly: false })

      const { data } = await api.auth.login(formData.email, formData.password)

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
        <h1>Sign in</h1>

        <p>Sign in and start managing your candidates!</p>

        <Form ref={formRef} onSubmit={onSubmit}>
          <Input name="email" placeholder="Login" />
          <Input name="password" type="password" placeholder="Password" />

          <div>
            <Checkbox value="remember" name="rememberMe" label="Remember me" />
            <Link href="/forgot-password">
              <a>Forgot password</a>
            </Link>
          </div>

          <Link href="/signup">
            <a>Sign up</a>
          </Link>

          <button type="submit">Sign in</button>
        </Form>
      </Container>

      <WaveFooter />
    </PageContainer>
  )
}

export default SignIn
