import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from 'components';
import Card from './Card';

function Board({ data }) {
  const { cases, todayCases, deaths, todayDeaths, recovered } = data;

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(data)} label="Total de casos" color="#5d78ff" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)
