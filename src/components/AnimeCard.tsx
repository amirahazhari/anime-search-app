import React from 'react'
import type { Anime } from '../types/jikan'

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div className="card">
      <img src={anime.images?.jpg?.image_url} alt={anime.title} />
      <div className="card-content">
        <h3 className="card-title">{anime.title}</h3>
        <p className="card-desc">
          {anime.synopsis ? anime.synopsis.slice(0, 120) + "..." : "No description available"}
        </p>
      </div>
    </div>
  )
}
