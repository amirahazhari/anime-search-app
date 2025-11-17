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
    <Link to="/" className="back-link">←</Link>

    {loading && <p>Loading...</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}

    {data && (
      <div className="detail-wrapper">

        {/* LEFT SIDE */}
        <div className="detail-left">

          <h1 className="detail-title">{data.title}</h1>

          <img
            src={data.images?.jpg?.image_url}
            alt={data.title}
            className="detail-img"
          />

          <p className="detail-synopsis">{data.synopsis}</p>

        </div>

        {/* RIGHT SIDE */}
        <div className="detail-right">

          <div className="detail-meta-item">
            <div className="detail-section-title">Episodes</div>
            <span>{data.episodes ?? "N/A"}</span>
          </div>

          <div className="detail-meta-item">
            <div className="detail-section-title">Score</div>
            <span>{data.score ?? "N/A"}</span>
          </div>

          {data.genres && (
            <div className="detail-meta-item">
              <div className="detail-section-title">Genres</div>
              <span>{data.genres.map((g: any) => g.name).join(", ")}</span>
            </div>
          )}

          {data.studios && (
            <div className="detail-meta-item">
              <div className="detail-section-title">Studios</div>
              <span>{data.studios.map((s: any) => s.name).join(", ")}</span>
            </div>
          )}

          {data.themes && (
            <div className="detail-meta-item">
              <div className="detail-section-title">Themes</div>
              <span>{data.themes.map((t: any) => t.name).join(", ")}</span>
            </div>
          )}

        </div>
      </div>
    )}
  </div>
)

}
