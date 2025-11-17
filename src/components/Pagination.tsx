import React from 'react'

export default function Pagination({ current, total, onChange }: { current: number; total: number; onChange: (p: number) => void }) {
  if (total <= 1) return null
  const prev = () => onChange(Math.max(1, current - 1))
  const next = () => onChange(Math.min(total, current + 1))
  return (
   <div className="pagination">
  <button className="arrow-btn" onClick={prev} disabled={current === 1}>
    <span className="arrow left"></span>
  </button>

  <span className="page-number">Page {current} / {total}</span>

  <button className="arrow-btn" onClick={next} disabled={current === total}>
    <span className="arrow right"></span>
  </button>
</div>

  )
}
