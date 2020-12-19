import React from 'react'
import { Form } from 'react-bootstrap'

type SelectProps = {
  label: string
  placeholder?: string
  name: string
  helperText: string
  hasError: boolean
  options: string[]
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({
    label, placeholder, name, helperText, hasError, options,
  }, ref) => (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" type="text" placeholder={placeholder} name={name} ref={ref}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Form.Control>
      {hasError && <Form.Text className="text-muted">{helperText}</Form.Text>}
    </Form.Group>
  ),
)
