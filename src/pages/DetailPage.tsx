import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getAnimeById } from '../api/jikan'

export default function DetailPage() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return
    const controller = new AbortController()
    setLoading(true)
    getAnimeById(id, controller.signal)
      .then((res) => setData(res.data ?? res))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message)
      })
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [id])

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">← Back</Link>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h1>{data.title}</h1>
          <img src={data.images?.jpg?.image_url} alt={data.title} style={{ width: 300 }} />
          <p>{data.synopsis}</p>
          <p>Episodes: {data.episodes}</p>
          <p>Score: {data.score}</p>
        </div>
      )}
    </div>
  )
}
