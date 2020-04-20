import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'   
import heroesLogo from '../../assets/logo.svg'
import './styles.css' 
import api from '../../services/api'

export default function NewIncident(){
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [value, setValue] = useState()
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    authorization: ongId
                }
            }) 
            history.push('/profile')

        } catch (error) {
            alert('Erro ao cadastar caso, tente novamente ')
        }
    }

    return(
    <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={heroesLogo} alt="Be the Hero"/>

                <h1>Cadastrar Novo Caso</h1> 
                <p>Descrava o caso detalhadamente para encontra um heóri que resolvera o problema</p>

                <Link to="/profile" className='back-link'> 
                <FiArrowLeft size={16} color='#e02041'></FiArrowLeft>
                Pagina inícial
                </Link>
            </section>

            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder='Título do Caso'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <textarea 
                    placeholder='Descrição' cols
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                /> 

                <input 
                    placeholder='Valor em Reais'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />  
            <button className='button' type='submit'>Cadastar</button>
            </form>

        </div>
    </div>
    )
}