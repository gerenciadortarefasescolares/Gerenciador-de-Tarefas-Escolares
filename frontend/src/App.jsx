import MenuLateral from './componentes/MenuLateral/MenuLateral.jsx'
import Painel from './paginas/Painel/Painel.jsx'

function App() {
  return (
    <div className="aplicativo">
      {/* Menu que fica na esquerda */}
      <MenuLateral paginaAtual="painel" />

      {/* Página que aparece na direita */}
      <Painel />
    </div>
  )
}

export default App
