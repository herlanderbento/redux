import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface Category {
  id: string
  name: string
  is_active: boolean
  description: null | string
  created_at: string
  updated_at: string
  deleted_at: null | string
}

const category: Category = {
  id: "88ff2587-ce5a-4769-a8c6-1d63d29c5f7a",
  name: "Action",
  description: "some description",
  is_active: true,
  deleted_at: null,
  created_at: "2022-08-15T10:00:00+0000",
  updated_at: "2022-08-15T10:00:00+0000",
}

export const initialState = [
  category,
  { ...category, id: "88ff2587-ce5a-4769-a8c6-1d63d29c5f7a", name: "Comedy" },
  { ...category, id: "98ff2587-ce5a-4769-a8c6-1d63d29c5f7a", name: "Drama" },
  {
    ...category,
    id: "18ff2587-ce5a-4769-a8c6-1d63d29c5f7a",
    name: "Romance",
  },
  {
    ...category,
    id: "28ff2587-ce5a-4769-a8c6-1d63d29c5f7a",
    name: "Suspense",
  },
]

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    createCategory(state, action) {},
    editCategory(state, action) {},
    deleteCategory(state, action) {},
  },
})

//selectors
export const selectCategories = (state: RootState) => state.categories

export default categoriesSlice.reducer
