import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useField } from "../hooks"

const CreateNew = (props) => {
  const navigate = useNavigate()
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.inputProps.value,
      author: author.inputProps.value,
      info: info.inputProps.value,
      votes: 0
    })
    resetFields()
    navigate('/')
    props.setNotification(`Your anecdote has been added: ${content.inputProps.value}!`)
    setTimeout(() => {
      props.setNotification('')
    }, 5000)
  }

  const resetFields = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' {...content.inputProps} />
        </div>
        <div>
          author
          <input name='author' {...author.inputProps} />
        </div>
        <div>
          url for more info
          <input name='info' {...info.inputProps} />
        </div>
        <button style={{ marginRight: 5 }}>create</button>
        <button type='button' onClick={resetFields}>reset form</button>
      </form>
    </div>
  )
}

export default CreateNew