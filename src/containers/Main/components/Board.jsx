import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '@src/components';
import Card from '@src/containers/Main/components/Card';

function Board({ data }) {
  const { cases, todayCases, deaths, todayDeaths, recovered } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de óbitos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)
