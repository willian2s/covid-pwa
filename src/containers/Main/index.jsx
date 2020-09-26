import React, { memo, useCallback, useState, useEffect } from 'react';
import Board from '@src/containers/Main/components/Board';
import Panel from '@src/containers/Main/components/Panel';
import Api from '@src/resources/services/api';

import { ContainerStyled } from './style';

function Main() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('world')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {    
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
      
    </ContainerStyled>
  )
};

export default memo(Main);
