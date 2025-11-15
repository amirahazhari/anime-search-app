export interface Anime {
  mal_id: number
  title: string
  synopsis?: string
  episodes?: number | null
  score?: number | null
  images?: { jpg?: { image_url?: string } }
}

export interface JikanSearchResponseV4 {
  data: Anime[]
  pagination?: { last_visible_page?: number }
}
