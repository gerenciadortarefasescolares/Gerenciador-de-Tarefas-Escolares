import './BarraProgresso.css' // BarraProgresso.jsx: mostra as tarefas feitas.

function BarraProgresso({ concluidas, total }) {
  let porcentagem = 0
  if (total > 0) {
    porcentagem = Math.round((concluidas / total) * 100)
  }

  return (
    <div className="barra-progresso">
      <div className="barra-progresso-topo">
        <span className="barra-progresso-titulo">Progresso geral</span>
        <span className="barra-progresso-texto">
          {concluidas} de {total} concluídas · {porcentagem}%
        </span>
      </div>

      <div className="barra-progresso-fundo">
        <div
          className="barra-progresso-preenchida"
          style={{ width: porcentagem + '%' }}
        />
      </div>
    </div>
  )
}

export default BarraProgresso
