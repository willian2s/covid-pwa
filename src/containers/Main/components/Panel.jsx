import React, { memo } from 'react'
// import RefreshIcon from '@src/assets/images/refresh.svg';
import ShareIcon from '@material-ui/icons/Share';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import COUNTRIES from '@src/commons/constants/countries';
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem
} from '@src/components';
import {
  CardPanelContentStyled,
  ItemStyled
} from './style';

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, todayCases, deaths, todayDeaths, recovered} = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value} >
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );
  
  const textCovid19 = `
    Localização: ${country}
    recuperados: ${recovered}
    casos hoje: ${todayCases}
    total de casos: ${cases}
    obitos hoje: ${todayDeaths}
    total de obitos: ${deaths}
  `

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://coronainworld.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        <ShareIcon />
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        <FileCopyIcon />
      </Button>
    </div>
  )

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="div" color="primary">COVID19</Typography>
          <Typography variant="h6" component="div" color="primary">Painel Coronavírus</Typography>
          <Typography variant="body2" component="div" color="primary">Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
};

export default memo(Panel);
