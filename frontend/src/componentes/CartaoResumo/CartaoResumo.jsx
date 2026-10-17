import './CartaoResumo.css' // CartaoResumo.jsx: um cartão com um nome e um número.

function CartaoResumo({ nome, valor, cor }) {
  return (
    <div className="cartao-resumo">
      <span className="cartao-resumo-nome">{nome}</span>
      <span className="cartao-resumo-valor" style={{ color: cor }}>
        {valor}
      </span>
    </div>
  )
}

export default CartaoResumo
