import React from 'react'
import { Box, Card, CardContent, CardHeader, Checkbox, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'

const TopMovie = () => {
  return (
    <Box mt={1} ml={2} >
      <Card raised>
        <CardHeader title='Top 10 movie of all time' titleTypographyProps={{ variant: 'h4', align: 'center', color: 'primary' }} />
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary='Enter movies name'></ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}

export default TopMovie
