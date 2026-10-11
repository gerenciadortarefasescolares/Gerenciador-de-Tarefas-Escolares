// Painel.jsx: a página inicial do site.
// Cada parte do painel é um componente separado, colocado aqui em ordem.

import Cabecalho from '../../componentes/Cabecalho/Cabecalho.jsx'
import './Painel.css'

function Painel() {
  return (
    <main className="painel">
      <div className="painel-conteudo">
        <Cabecalho titulo="Painel" />
      </div>
    </main>
  )
}

export default Painel
