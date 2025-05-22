import * as React from 'react';
import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';

import { config } from '@/config';
import { Budget } from '@/components/dashboard/overview/budget';
import { AssignedTasksTable } from '@/components/dashboard/overview/assigned-task-table';
import { LatestProducts } from '@/components/dashboard/overview/latest-products';
import { Sales } from '@/components/dashboard/overview/sales';
import { TasksProgress } from '@/components/dashboard/overview/tasks-progress';
import { TotalCustomers } from '@/components/dashboard/overview/total-customers';
import { TotalProfit } from '@/components/dashboard/overview/total-profit';
import { Traffic } from '@/components/dashboard/overview/traffic';
import { ProjectProgressCard } from '@/components/dashboard/overview/ProjectProgressCard';
import { Box } from '@mui/material';

export const metadata = { title: `Overview | Dashboard | ${config.site.name}` } satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid lg={8} sm={6} xs={12}>
          <Box sx={{ p: 3 }}>
          <ProjectProgressCard
            progressPercentage={78}
            tasksCompletedCount={66}
            workersCount={14}
            milestonesNotCompletedCount={16}
          />
        </Box>
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <Budget diff={12} trend="up" sx={{ height: '100%' }} value="$24k" />
      </Grid>
     
      {/* <Grid lg={3} sm={6} xs={12}>
        <TotalCustomers diff={16} trend="down" sx={{ height: '100%' }} value="1.6k" />
      </Grid> */}
      {/* <Grid lg={3} sm={6} xs={12}>
        <TasksProgress sx={{ height: '100%' }} value={75.5} />
      </Grid> */}
      {/* <Grid lg={3} sm={6} xs={12}>
        <TotalProfit sx={{ height: '100%' }} value="$15k" />
      </Grid> */}
      <Grid lg={8} xs={12}>
        <Sales
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <LatestProducts
          products={[
            {
              id: 'PRD-005',
              name: 'Soja & Co. Eucalyptus',
              image: '/assets/product-5.png',
              updatedAt: dayjs().subtract(18, 'minutes').subtract(5, 'hour').toDate(),
            },
            {
              id: 'PRD-004',
              name: 'Necessaire Body Lotion',
              image: '/assets/product-4.png',
              updatedAt: dayjs().subtract(41, 'minutes').subtract(3, 'hour').toDate(),
            },
            {
              id: 'PRD-003',
              name: 'Ritual of Sakura',
              image: '/assets/product-3.png',
              updatedAt: dayjs().subtract(5, 'minutes').subtract(3, 'hour').toDate(),
            },
            {
              id: 'PRD-002',
              name: 'Lancome Rouge',
              image: '/assets/product-2.png',
              updatedAt: dayjs().subtract(23, 'minutes').subtract(2, 'hour').toDate(),
            },
            {
              id: 'PRD-001',
              name: 'Erbology Aloe Vera',
              image: '/assets/product-1.png',
              updatedAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
      <Grid lg={8} md={12} xs={12}>
        <AssignedTasksTable
          tasks={[
              {
                id: 'TSK-001',
                taskName: 'Lay Foundation',
                taskDescription: 'Excavate and pour concrete for the building foundation.',
                assignedTo: 'Logical',
                deadline: new Date('2025-12-11T00:00:00Z'),
                status: 'completed',
              },
              {
                id: 'TSK-002',
                taskName: 'Set Up Formwork',
                taskDescription: 'Install timber or metal forms for beams and columns.',
                assignedTo: 'Esther',
                deadline: new Date('2025-12-21T00:00:00Z'),
                status: 'ongoing',
              },
              {
                id: 'TSK-003',
                taskName: 'Bricklaying - Ground Floor',
                taskDescription: 'Lay concrete blocks up to lintel level for the ground floor.',
                assignedTo: 'Holison',
                deadline: new Date('2025-12-05T00:00:00Z'),
                status: 'completed',
              },
              {
                id: 'TSK-004',
                taskName: 'Roof Truss Installation',
                taskDescription: 'Assemble and install timber trusses for the roof structure.',
                assignedTo: 'Rosemond',
                deadline: new Date('2025-12-08T00:00:00Z'),
                status: 'notStarted',
              },
              {
                id: 'TSK-005',
                taskName: 'Floor Tiling - Bathrooms',
                taskDescription: 'Lay ceramic floor tiles in all bathrooms and wet areas.',
                assignedTo: 'Famous',
                deadline: new Date('2026-01-09T00:00:00Z'),
                status: 'completed',
              },
              {
                id: 'TSK-006',
                taskName: 'Paint Interior Walls',
                taskDescription: 'Apply two coats of emulsion paint to all interior walls.',
                assignedTo: 'Daniel',
                deadline: new Date('2025-11-11T00:00:00Z'),
                status: 'ongoing',
              },
            ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>
  );
}
