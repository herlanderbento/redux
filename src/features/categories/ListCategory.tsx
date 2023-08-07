import { Box, Button } from "@mui/material"
import { useAppSelector } from "../../app/hooks"
import { selectCategories } from "./categorySlice"
import { Link } from "react-router-dom"
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid"

export function ListCategory() {
  const categories = useAppSelector(selectCategories)

  // use categories to create rows
  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }))

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "description", headerName: "Description", width: 150 },
  ]

  return (
    <Box maxWidth="lg" sx={{ my: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/categories/create"
          style={{ marginBottom: "1rem", boxShadow: "none" }}
        >
          New Category
        </Button>
      </Box>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </Box>
  )
}
