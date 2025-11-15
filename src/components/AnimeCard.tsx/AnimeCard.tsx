import React from 'react'
import type { Anime } from '../types/jikan'

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 8, height: '100%', background: '#fff' }}>
      <img src={anime.images?.jpg?.image_url} alt={anime.title} style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 6 }} />
      <h3 style={{ fontSize: 16 }}>{anime.title}</h3>
      <p style={{ fontSize: 13, color: '#555' }}>{anime.synopsis ? anime.synopsis.slice(0, 120) + '...' : 'No synopsis'}</p>
    </div>
  )
}
