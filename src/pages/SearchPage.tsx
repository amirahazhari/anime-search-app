import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import useDebouncedValue from '../hooks/useDebouncedValue'
import { RootState, AppDispatch } from '../store/store'
import { fetchSearch, setQuery, setPage } from '../features/searchSlice'
import AnimeCard from '../components/AnimeCard'
import Pagination from '../components/Pagination'

export default function SearchPage() {
  const dispatch = useDispatch<AppDispatch>()
  const { query, page, results, loading, error, totalPages } = useSelector((s: RootState) => s.search)
  const [localQuery, setLocalQuery] = useState(query)
  const debouncedQuery = useDebouncedValue(localQuery, 250)

  // Runs ONLY when user stops typing
useEffect(() => {
  dispatch(setQuery(debouncedQuery))
}, [debouncedQuery, dispatch])

// Runs when query OR page changes
useEffect(() => {
  dispatch(fetchSearch({ query, page }))
}, [query, page, dispatch])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value)
    dispatch(setPage(1))
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Anime Search</h1>
      <input
        placeholder="Search anime..."
        value={localQuery}
        onChange={onChange}
        className="search-input"
      />
      {/* SKELETON LOADING */}
{loading && (
  <div className="anime-grid">
    {[...Array(8)].map((_, i) => (
      <div key={i} className="card skeleton-card skeleton"></div>
    ))}
  </div>
)}

{!loading && results.length === 0 && debouncedQuery && (
  <div style={{ marginTop: 40, textAlign: "center", opacity: 0.7 }}>
    <h2>No results found 😢</h2>
    <p>Try searching for something else.</p>
  </div>
)}

{!loading && results.length > 0 && (
  <div className="anime-grid">
    {results.map((anime) => (
      <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} style={{ textDecoration: 'none' }}>
        <AnimeCard anime={anime} />
      </Link>
    ))}
  </div>
)}

      <div style={{ marginTop: 20 }}>
        <Pagination current={page} total={totalPages} onChange={(p) => dispatch(setPage(p))} />
      </div>
    </div>
  )
}
