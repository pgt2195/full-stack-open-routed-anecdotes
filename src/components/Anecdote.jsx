import { useParams } from "react-router-dom"

const Anecdote = ({ anecdotes }) => {
  const id = useParams().id
  const anecdote = anecdotes.find(el => el.id === Number(id))

  return (
    <div style={{marginTop: 20}}>
      <div style={{fontSize: '10pt', marginBottom: 8}}>
        published by <i>{anecdote.author}</i>
      </div>

      <div style={{fontSize: 'larger', marginLeft: 20, marginBottom: 8}}>
        {anecdote.content}
      </div>

      <div><a href={anecdote.info}>infos</a></div>
      
      <div>
        votes: {anecdote.votes}
        <button style={{marginLeft: 10}}>vote</button>
      </div>
    </div>
  )
}

export default Anecdote