import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import PieChart from './CustomPieChart'; 
import DataTable from './DataTable';

const DashboardComponent = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Property Performance Summary
      </Typography>
      <Grid container spacing={2}>
        {/* Cards Section */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Number of Clients</Typography>
              <Typography variant="h4">1235</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Number of Inventory</Typography>
              <Typography variant="h4">$2,220.42</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Number New Projects</Typography>
              <Typography variant="h4" >2,220</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Charts Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Revenue</Typography>
              <PieChart data={[200, 100, 23, 9, 45]} labels={['Virtual Tour', '360 Inspections', '360 Inventory', 'RICS Level 1', 'RICS Level 2']} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Number of Partners</Typography>
              <PieChart data={[200, 100, 23]} labels={['Photographers', 'RICS Valuers', 'Assessors']} />
            </CardContent>
          </Card>
        </Grid>

        {/* Tables Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">360 Inventories</Typography>
              <DataTable
                headers={['City', 'Total Projects']}
                rows={[
                  ['City 1', '100'],
                  ['City 2', '100'],
                  ['City 3', '100'],
                  ['City 4', '100'],
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Designers</Typography>
              <DataTable
                headers={['Name', 'Total Projects']}
                rows={[
                  ['Chamode', '100'],
                  ['Pathum', '100'],
                  ['Prageeth', '100'],
                  ['Designer 1', '100'],
                ]}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardComponent;
