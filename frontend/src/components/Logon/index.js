import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'
import api from '../../services/api'

import './styles.css' 

import heroesImg from '../../assets/heroes.png'
import heroesLogo from '../../assets/logo.svg'

export default  function Logon(){
    const [id, setId] = useState()
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        try {
            const response = await api.post('sessions', {id})

            console.log(response.data.name)
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')

        } catch (err) {
            alert('Erro, ONG não cadastrada, tente novamente')
        }
    }

    return( 
    <div className="logon-container">
        <section className="form">
            <img src={heroesLogo} alt="Heroes Logo"/>
            <form onSubmit={handleLogin}>  
            <input placeholder='Entre com Seu ID'
            value={id}
            onChange={e=>setId(e.target.value)}
            /> 
            <button className='button' type="submit">Entrar</button>
            <Link to="/register" className='back-link'>
            <FiLogIn size={16} color="#e02041"></FiLogIn>
             Não pussuo cadastro
            </Link>
            </form>
            
        </section>

        <img src={heroesImg} alt="Heroes"/>
    </div>
    )
} 