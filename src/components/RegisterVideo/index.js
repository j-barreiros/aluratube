import React, { useState } from 'react'
import { StyledRegisterVideo } from './styles'


//Custom Hooks
function useForm(initialValue) {
  const [formValues, setFormValues] = useState(initialValue);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  return [formValues, handleChange]
}

export default function RegisterVideo() {

  const [showForm, setShowForm] = useState(false);
  const [form, handleChange] = useForm({ title: "", url: "" })
  console.log(form)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(values);
  }

  return (
    <StyledRegisterVideo>
      <button className='add-video' onClick={() => setShowForm(true)}>
        +
      </button>
      {showForm &&
        <form onSubmit={handleSubmit}>
          <div>
            <button className='close-modal' onClick={() => setShowForm(false)}>
              X
            </button>

            <input
              placeholder='Titulo do vídeo'
              name="title"
              value={form.title}
              onChange={(event) => handleChange(event)}
            />

            <input
              placeholder='URL'
              name="url"
              value={form.url}
              onChange={(event) => handleChange(event)}
            />

            <button type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      }
    </StyledRegisterVideo>
  )
}