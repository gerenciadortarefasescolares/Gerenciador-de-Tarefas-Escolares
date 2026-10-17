import { IconeMais } from '../Icones/Icones.jsx' // Mostra o título a data de hoje e o botão de nova tarefa.
import './Cabecalho.css'

function pegarDataDeHoje() {
  const texto = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  })
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

function Cabecalho({ titulo }) {
  const dataDeHoje = pegarDataDeHoje()

  return (
    <header className="cabecalho">
      <div>
        <h1 className="cabecalho-titulo">{titulo}</h1>
        <p className="cabecalho-data">{dataDeHoje}</p>
      </div>

      {/* quero implementar a aba de nova tarefa aqui*/}
      <button type="button" className="botao-principal">
        <IconeMais />
        Nova tarefa
      </button>
    </header>
  )
}

export default Cabecalho
