import React, {useState} from 'react'
import * as ReactDOM from 'react-dom'
import axios from 'axios'

import Show from './Show'

const Welcome = () => {
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [anime, setAnime] = useState(null)

const handleSubmit = async (event) => { 
  event.preventDefault()
  setIsLoading(true)
  try {
    if(name === '') return alert('Digite o nome do anime')
   const response = await axios.get(`https://animechan.xyz/api/random/anime?title=${name}`)
    setAnime(response?.data)
    alert('Anime encontrado com sucesso')
  } catch (error) {
    alert(error?.response?.data?.error || 'Erro ao buscar anime')
  }
  finally{
    setIsLoading(false)
  }
}

  return (
    <div className='container'>
      <h1>Meu anime favorito</h1>
      <div className='card'>
        <div class="card-body">
          {isLoading ? (
            <div class="spinner-border m-5" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ): (
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Digite o nome do anime</label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Naruto" aria-label="Naruto" aria-describedby="submit"
                          name='name' onChange={(e)=> setName(e.target.value)} disabled={isLoading}/>
                  <button className="btn btn-primary" type="submit" id="submit" disabled={isLoading}>Buscar</button>
                </div>
            </form>
          )}
        </div>
      </div>
      {anime &&(
        <Show anime={anime} />
      )}
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {ReactDOM.render(<Welcome />, document.getElementById('welcome'))})

export default Welcome