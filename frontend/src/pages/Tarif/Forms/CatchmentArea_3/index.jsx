import React, { useState } from 'react'
import styled from '@emotion/styled'
import { InputAdornment, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import DynamicField from '../../../common/DynamicField';

const landsArr = [
  'Deutschland',
  'Österreich',
  'Schweiz',
  'Albanien',
  'Belgien',
  'Bosnien und Herzegowina',
  'Bulgarien',
  'Dänemark',
  'Estland'
]
const landdesArr = [
  'Alle',
  'AL',
  'AT',
  'BA',
  'BE',
  'BG',
  'CH',
  'CZ',
  'DE',
  'DK'
]

const CatchmentArea_3 = () => {
  const [formValues, setformValues] = useState({
    land: '',
    place_of_branch: '',
    catchment_area: '',
    radius_of_action_of_km: '',
    restrict_catchment_area_country: '',
    address_ref: '',
    zip_catchment_areas: [{}],
    zip_code_exclusion_areas: [{}]

  });
  const catch1 = (e) => {
    setformValues(prevState => ({
      ...prevState,
      zip_catchment_areas: e
    }));
  }
  const catch2 = (e) => {
    setformValues(prevState => ({
      ...prevState,
      zip_code_exclusion_areas: e
    }));
  }
  return (
    <StyledCatchmentArea_3>
      <Typography variant='body2'>
        Sie können das Einzugsgebiet mittels PLZ oder einem Umkreis (in KM) um Ihren Standort herum definieren.
      </Typography>
      <Typography variant='body2'>
        Achten Sie darauf, dass dieses Einzugsgebiet mit den Angaben in Ihrer Tariftabelle korrespondiert!.
      </Typography>
      <Typography variant='h6' className='my-2'>
        Niederlassung
      </Typography>
      <div className='row'>
        <div className='col-2'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Land</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formValues.land}
              label="land"

              onChange={(e) => setformValues(prevState => ({
                ...prevState,
                land: e.target.value
              }))}
            >
              {
                landsArr.map((data, index) => (
                  <MenuItem value={data} key={index}>{data}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </div>
        <div className='col-6'>
          <TextField
            onChange={(e) => setformValues(prevState => ({
              ...prevState,
              place_of_branch: e.target.value
            }))}
            id="standard-basic"
            value={formValues.place_of_branch}
            sx={{ width: "100%" }}
            label="PLZ/Ort der Niederlassung"
            required variant="standard" />
        </div>
        <div className='col-4'>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Einzugsgebiet-Berechnung</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formValues.catchment_area}
              variant="standard"
              label="Einzugsgebiet"
              onChange={(e) => setformValues(prevState => ({
                ...prevState,
                catchment_area: e.target.value
              }))}
            >
              <MenuItem value="Keine">Keine</MenuItem>
              <MenuItem value="Aktionsradius um Niederlassung">Aktionsradius um Niederlassung</MenuItem>
              <MenuItem value="Feste PLZ-Bereiche">Feste PLZ-Bereiche</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      {
        formValues.catchment_area === 'Aktionsradius um Niederlassung' &&
        <div className='row mt-5'>
          <div className='col-6 px-2'>
            <TextField
              InputProps={{
                endAdornment: <InputAdornment position="end">km</InputAdornment>,
              }}
              onChange={(e) => setformValues(prevState => ({
                ...prevState,
                radius_of_action_of_km: e.target.value
              }))}
              id="standard-basic"
              value={formValues.radius_of_action_of_km}
              sx={{ width: "100%" }} type="number" label="Aktionsradius in Kilometer" required variant="standard" />
          </div>
          <div className='col-6 px-2'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Land des Einzugsgebietes einschränken</InputLabel>
              <Select
                required
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formValues.restrict_catchment_area_country}
                variant="standard"
                label="Einzugsgebiet"
                onChange={(e) => setformValues(prevState => ({
                  ...prevState,
                  restrict_catchment_area_country: e.target.value
                }))}
              >
                {
                  landdesArr.map((data, index) => (
                    <MenuItem value={data} key={index}>{data}</MenuItem>
                  ))
                }

              </Select>
            </FormControl>
          </div>
        </div>
      }
      <div className="shadow rounded bg-light mt-4">
        {
          formValues.catchment_area === 'Feste PLZ-Bereiche' &&
          <div>
            <Typography variant='body2' className='fw-bolder fs-6 p-3 pb-0'>
              PLZ Einzugsgebiete
            </Typography>
            <Typography variant='body3' className='p-3 px-4'>
              Einträge gelten pro Land
            </Typography>
            <div>
              <DynamicField stateCatch={catch1} />
            </div>
          </div>
        }
        <Typography variant='body2' className='fw-bolder fs-6 p-3'>
          Adressbezug
        </Typography>
        <Container>
          <div className='row m-0 pb-3'>
            <div className='col-6'>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Einzugsgebiet bezieht sich auf</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formValues.address_ref}
                  variant="standard"
                  label="Einzugsgebiet"
                  onChange={(e) => setformValues(prevState => ({
                    ...prevState,
                    address_ref: e.target.value
                  }))}
                >
                  <MenuItem value='Absenderadresse oder Empfängeradresse'>Absenderadresse oder Empfängeradresse</MenuItem>
                  <MenuItem value='Empfängeradresse'>Empfängeradresse</MenuItem>
                  <MenuItem value='Absenderadresse'>Absenderadresse</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Container>
      </div>
      <div className='shadow rounded mt-3 bg-light'>
        <Typography variant='body2' className='fw-bolder fs-6 p-3 pb-0'>
          PLZ Ausschlussgebiete
        </Typography>
        <Typography variant='body3' className='p-3 px-4'>
          Einträge gelten pro Land
        </Typography>
        <div className='py-3'>
          <DynamicField stateCatch={catch2} />
        </div>
      </div>


    </StyledCatchmentArea_3>
  )
}

export default CatchmentArea_3

const StyledCatchmentArea_3 = styled.div`

  
`