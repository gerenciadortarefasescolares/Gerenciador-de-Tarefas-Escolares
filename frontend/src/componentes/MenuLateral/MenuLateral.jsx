// MenuLateral.jsx: o menu que fica na esquerda do site.

import {
  IconeCalendario,
  IconeConcluido,
  IconeMaterias,
  IconePainel,
  IconeTarefas,
} from '../Icones/Icones.jsx'
import './MenuLateral.css'

// Lista com os itens do menu.
// Se precisarmos adicionar mais itens sõ colocarmos uma linha aqui.
const itensDoMenu = [
  { id: 'painel', nome: 'Painel', icone: <IconePainel /> },
  { id: 'tarefas', nome: 'Tarefas', icone: <IconeTarefas /> },
  { id: 'materias', nome: 'Matérias', icone: <IconeMaterias /> },
  { id: 'calendario', nome: 'Calendário', icone: <IconeCalendario /> },
]

// "paginaAtual" vem do App.jsx e diz qual item fica destacado
function MenuLateral({ paginaAtual }) {
  return (
    <nav className="menu-lateral" aria-label="Menu principal">
      <div className="menu-logo">
        <span className="menu-logo-icone">
          <IconeConcluido />
        </span>
        <span className="menu-logo-nome">Tarefas</span>
      </div>
      
      <div className="menu-itens">
        {itensDoMenu.map((item) => {
          // Confere se este item é o da página aberta
          const estaAtivo = item.id === paginaAtual

          return (
            <button
              key={item.id}
              type="button"
              className={estaAtivo ? 'menu-item menu-item-ativo' : 'menu-item'}
            >
              {item.icone}
              {item.nome}
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default MenuLateral
