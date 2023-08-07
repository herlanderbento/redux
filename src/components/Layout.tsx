import React from "react"
import { Box, Container } from "@mui/material"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ my: 4, color: "white" }}>
        {children}
      </Container>
    </Box>
  )
}
