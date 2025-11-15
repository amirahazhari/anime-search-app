export async function searchAnime(query: string, page = 1, signal?: AbortSignal) {
  const q = encodeURIComponent(query || '')
  const url = `https://api.jikan.moe/v4/anime?q=${q}&page=${page}&limit=20`
  const res = await fetch(url, { signal })
  if (!res.ok) {
    throw new Error(`API error ${res.status}`)
  }
  const json = await res.json()
  return json
}

export async function getAnimeById(id: string | number, signal?: AbortSignal) {
  const url = `https://api.jikan.moe/v4/anime/${id}/full`
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(`API error ${res.status}`)
  return res.json()
}
