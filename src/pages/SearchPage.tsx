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

  useEffect(() => {
    dispatch(setQuery(debouncedQuery))
    dispatch(fetchSearch({ query: debouncedQuery, page }))
  }, [debouncedQuery, page, dispatch])

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
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && results.length === 0 && debouncedQuery && <p>No results found.</p>}

      <div className="anime-grid">
        {results.map((anime) => (
          <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id} style={{ textDecoration: 'none' }}>
            <AnimeCard anime={anime} />
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 20 }}>
        <Pagination current={page} total={totalPages} onChange={(p) => dispatch(setPage(p))} />
      </div>
    </div>
  )
}
