import React, { useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import { Error, Input as StyledInput, Label } from 'styles/components/input'

interface Props extends Partial<HTMLInputElement> {
  label?: string
  name: string
}

export function Input({ ref, name, label, ...rest }: Props) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: (ref) => {
        ref.current.value = ''
      }
    })
  }, [fieldName, registerField])

  return (
    <Label htmlFor={fieldName} className="label__text">
      {label && label}

      <StyledInput
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <Error className="error">{error}</Error>}
    </Label>
  )
}
