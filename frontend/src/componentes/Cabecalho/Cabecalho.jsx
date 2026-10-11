// Mostra o título, a data de hoje e o botão "Nova tarefa".

import { IconeMais } from '../Icones/Icones.jsx'
import './Cabecalho.css'

// Monta a data de hoje em extenso
function pegarDataDeHoje() {
  const texto = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

// "titulo" vem da página que usa o cabeçalho
function Cabecalho({ titulo }) {
  const dataDeHoje = pegarDataDeHoje()

  return (
    <header className="cabecalho">
      <div>
        <h1 className="cabecalho-titulo">{titulo}</h1>
        <p className="cabecalho-data">{dataDeHoje}</p>
      </div>

      {/* Vai abrir o formulário futuramente. */}
      <button type="button" className="botao-principal">
        <IconeMais />
        Nova tarefa
      </button>
    </header>
  )
}

export default Cabecalho
