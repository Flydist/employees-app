import React from 'react'
import { Form } from 'react-bootstrap'

type InputProps = {
  label: string
  placeholder: string
  name: string
  helperText: string
  hasError: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    label, placeholder, name, helperText, hasError,
  }, ref) => (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type="text" placeholder={placeholder} name={name} ref={ref} />
      {hasError && <Form.Text className="text-muted">{helperText}</Form.Text>}
    </Form.Group>
  ),
)
