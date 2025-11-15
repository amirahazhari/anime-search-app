
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { searchAnime } from '../api/jikan'
import type { Anime } from '../types/jikan'

interface SearchState {
  query: string
  page: number
  results: Anime[]
  totalPages: number
  loading: boolean
  error: string | null
}

const initialState: SearchState = {
  query: '',
  page: 1,
  results: [],
  totalPages: 1,
  loading: false,
  error: null
}

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async (params: { query: string; page: number }, thunkAPI) => {
    const { query, page } = params
    const json = await searchAnime(query, page, thunkAPI.signal)
    return {
      data: json.data,
      last_page: json.pagination?.last_visible_page ?? 1
    }
  }
)

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload
      state.page = 1
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    clearResults(state) {
      state.results = []
      state.totalPages = 1
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.loading = false
      state.results = action.payload.data
      state.totalPages = action.payload.last_page
    })
    builder.addCase(fetchSearch.rejected, (state, action) => {
      state.loading = false
      if (action.error.name === 'AbortError' || action.error.message?.includes('aborted')) {
        // aborted - ignore
      } else {
        state.error = action.error.message ?? 'Failed to fetch'
      }
    })
  }
})

export const { setQuery, setPage, clearResults } = searchSlice.actions
export default searchSlice.reducer
