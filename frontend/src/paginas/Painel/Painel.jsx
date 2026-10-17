import BarraProgresso from '../../componentes/BarraProgresso/BarraProgresso.jsx' // página inicial do site.
import Cabecalho from '../../componentes/Cabecalho/Cabecalho.jsx'
import CartaoResumo from '../../componentes/CartaoResumo/CartaoResumo.jsx'
import tarefasDeExemplo from '../../dados/tarefasDeExemplo.js'
import './Painel.css'

function pegarHoje() {
  const hoje = new Date()
  const ano = hoje.getFullYear()
  const mes = String(hoje.getMonth() + 1).padStart(2, '0')
  const dia = String(hoje.getDate()).padStart(2, '0')
  return ano + '-' + mes + '-' + dia
}

function Painel() {
  const tarefas = tarefasDeExemplo
  const hoje = pegarHoje()
  const pendentes = tarefas.filter((tarefa) => !tarefa.concluida)
  const concluidas = tarefas.filter((tarefa) => tarefa.concluida)
  const atrasadas = pendentes.filter((tarefa) => tarefa.dataEntrega < hoje)

  return (
    <main className="painel">
      <div className="painel-conteudo">
        <Cabecalho titulo="Painel" />

        <section className="painel-resumo" aria-label="Resumo">
          <div className="painel-cartoes">
            <CartaoResumo nome="Total" valor={tarefas.length} />
            <CartaoResumo nome="Pendentes" valor={pendentes.length} cor="var(--cor-destaque)" />
            <CartaoResumo nome="Atrasadas" valor={atrasadas.length} cor="var(--cor-atrasada)" />
            <CartaoResumo nome="Concluídas" valor={concluidas.length} />
          </div>

          <BarraProgresso concluidas={concluidas.length} total={tarefas.length} />
        </section>
      </div>
    </main>
  )
}

export default Painel
