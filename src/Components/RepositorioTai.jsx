import { useState, useEffect } from 'react'

function RepositorioTai() {
const [repositorios, setRepositorio] = useState([])
const [busca, setBusca] = useState('')
const [filtro, setFiltro] = useState([])

useEffect(() =>{
    async function getData(){
        const response = await fetch('https://api.github.com/users/taiagui/repos')
        const data = await response.json()

        setRepositorio(data)
    }
    getData()
},[])

    // useEffect(() => {
    //     setFiltro(
    //     repositorios.filter(repositor => 
    //     return busca == repositor
    //     ))
    // },[repositorios, busca])

console.log (repositorios)
    return(
     <div>
      <imput
      placeholder="Digite o Nome do Repositório"
      onChange={e => {setBusca (e.target.value)}}
    />
    {filtro.map(pessoa =>
    <div key={pessoa.id}>
        <h2>{pessoa.name}</h2>
        </div>
    )}
        </div>
    )
}

export default RepositorioTai

//include
// map