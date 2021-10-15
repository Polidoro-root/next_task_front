import { useEffect, useRef, InputHTMLAttributes } from 'react'
import { useField, } from '@unform/core'
import { Input, Label, Icon } from 'styles/components/checkbox'


interface Props {
  name: string
  label: string
  value?: string
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props

export function Checkbox({ ref, name, value, label, ...rest }: InputProps) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const defaultChecked = defaultValue === value

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.checked
      },
      clearValue: ref => {
        ref.current.checked = defaultChecked
      },
      setValue: (ref, value) => {
        ref.current.checked = value
      },
    })
  }, [defaultValue, fieldName, registerField, defaultChecked])

  return (
    <Label htmlFor={fieldName} key={fieldName}>
      <div>
        <Input
          defaultChecked={defaultChecked}
          ref={inputRef}
          value={value}
          type="checkbox"
          id={fieldName}
          {...rest}
        />
        <Icon className="icon" />
      </div>
      {label}
    </Label>
  )
}
