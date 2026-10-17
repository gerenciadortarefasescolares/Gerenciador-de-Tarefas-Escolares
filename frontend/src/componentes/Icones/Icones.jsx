// icones

const padrao = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor', 
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true, 
}

export function IconePainel() {
  return (
    <svg {...padrao}>
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  )
}

export function IconeTarefas() {
  return (
    <svg {...padrao}>
      <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
    </svg>
  )
}

export function IconeMaterias() {
  return (
    <svg {...padrao}>
      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11" />
    </svg>
  )
}

export function IconeCalendario() {
  return (
    <svg {...padrao}>
      <path d="M4 6h16v14H4zM4 10h16M8 3v4M16 3v4" />
    </svg>
  )
}

export function IconeMais() {
  return (
    <svg {...padrao}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconeConcluido() {
  return (
    <svg {...padrao}>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  )
}
