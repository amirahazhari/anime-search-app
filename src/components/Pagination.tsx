import React from 'react'

export default function Pagination({ current, total, onChange }: { current: number; total: number; onChange: (p: number) => void }) {
  if (total <= 1) return null
  const prev = () => onChange(Math.max(1, current - 1))
  const next = () => onChange(Math.min(total, current + 1))
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <button onClick={prev} disabled={current === 1}>Prev</button>
      <span>Page {current} / {total}</span>
      <button onClick={next} disabled={current === total}>Next</button>
    </div>
  )
}
