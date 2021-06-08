import { ChangeEvent, useState } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);
  const [typing, setTyping] = useState(false)

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = target
    setFormValues((prevValues) => {
      setTyping(true)
      return {
        ...prevValues,
        [name]: value
      }
    })
  }
  const reset = (newFormState = initialState) => {
    setFormValues(newFormState)
  }



  

  return { formValues, handleInputChange, reset, typing, setTyping }
}