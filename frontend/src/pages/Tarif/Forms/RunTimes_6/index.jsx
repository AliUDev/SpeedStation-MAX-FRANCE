import styled from '@emotion/styled'
import { InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import { Calendar } from "react-multi-date-picker";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const RunTimes_6 = () => {

    const [form, setform] = useState({
        opened_by: 0,
        opened_until: 0,
        also_occupied_on_saturday: false,
        also_busy_on_sunday: false,
        pickup_time_slot_from: 0,
        time_slot_pickup_until: 0,
        tours_possible_on_saturdays: false,
        tours_possible_on_sundays: false,
        flexible_pickup: false,
        time_window_size: 0,
        time_slot_deliver_from: 0,
        deliver_time_window_until: 0,
        minimum_runtime: 0,
        maximum_runtime: 0,
        standard_transit_times_info: false,
        lead_time_calculation_select: '',
        lead_time: 0,
        same_day_pickup: 0,
        additional_lead_time: 0,
        next_day_pickup: 0,
        calender: new Date(),
    });
    const handleCheckboxChange = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        setform((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setform((prevState) => ({ ...prevState, [name]: value }));
    };

    console.log(form)
    return (
        <StyledRunTimes_6>
            <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Bürozeiten
                </Typography>
                <Typography variant="caption">
                    In welchem Zeitraum ist Ihr Büro besetzt?
                </Typography>
                <div className='row m-0'>
                    <div className='col-4'>
                        <TextField
                            name='opened_by'
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Geöffnet von" required variant="standard"
                        />
                    </div>
                    <div className='col-4'>
                        <TextField
                            name='opened_until'
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Geöffnet bis" required variant="standard"
                        />
                    </div>
                    <div className='col-4 row m-0'>
                        <div className='col-12'>
                            <FormControlLabel
                                name="also_occupied_on_saturday"
                                checked={form.also_occupied_on_saturday}
                                onChange={handleCheckboxChange}
                                sx={{ fontSize: "2px" }} control={<Checkbox />} label="auch Samstag besetzt" />
                        </div>
                        <div className='col-12'>
                            <FormControlLabel
                                name="also_busy_on_sunday"
                                checked={form.also_busy_on_sunday}
                                onChange={handleCheckboxChange}
                                sx={{ fontSize: "2px" }} control={<Checkbox />} label="auch Sonntag besetzt" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Abholung
                </Typography>
                <Typography variant="caption">
                    Zeitfenster, indem Ihre Fahrer beim Kunden eintreffen könnten
                </Typography>
                <div className='row m-0'>
                    <div className='col-4'>
                        <TextField
                            name='pickup_time_slot_from'
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Zeitfenster Abholung von" required variant="standard"
                        />
                    </div>
                    <div className='col-4'>
                        <TextField
                            name='time_slot_pickup_until'
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Zeitfenster Abholung bis" required variant="standard"
                        />
                    </div>
                    <div className='col-4 row m-0'>
                        <div className='col-12'>
                            <FormControlLabel
                                name="tours_possible_on_saturdays"
                                checked={form.tours_possible_on_saturdays}
                                onChange={handleCheckboxChange}
                                sx={{ fontSize: "2px" }} control={<Checkbox />} label="Touren samstags möglich" />
                        </div>
                        <div className='col-12'>
                            <FormControlLabel
                                name="tours_possible_on_sundays"
                                checked={form.tours_possible_on_sundays}
                                onChange={handleCheckboxChange}
                                sx={{ fontSize: "2px" }} control={<Checkbox />} label="Touren sonntags möglich" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='row m-0'>
                    <div className='col-4'>
                        <FormControlLabel
                            name="flexible_pickup"
                            checked={form.flexible_pickup}
                            onChange={handleCheckboxChange}
                            sx={{ fontSize: "2px" }} control={<Checkbox />} label="Flexible Abholung" />
                    </div>
                    <div className='col-4'>
                        <TextField
                            name='time_window_size'
                            onChange={handleChange}
                            disabled={!form.flexible_pickup}
                            InputProps={{ endAdornment: <InputAdornment position="end">Tage</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Größe des Zeitfensters" required variant="standard"
                        />
                    </div>
                </div>
                <Typography variant="caption">
                    Beachten Sie die weiteren Optionen zur Abholung unter “Zubuchbare Leistungen”
                </Typography>
            </div>

            <div >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, margin: "42px 0 0 0" }}>
                    Zustellung
                </Typography>
                <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                    Wann können Zustellungen stattfinden?
                </Typography>
                <div className='row m-0'>
                    <div className='col-4'>
                        <TextField
                            name='time_slot_deliver_from'
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Zeitfenster Zustellung von" required variant="standard"
                        />
                    </div>
                    <div className='col-4'>
                        <TextField
                            name='deliver_time_window_until'
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Zeitfenster Zustellung bis" required variant="standard"
                        />
                    </div>
                </div>
                <Typography variant="caption">
                    Beachten Sie die weiteren Optionen zur Zustellung unter “Zubuchbare Leistungen”
                </Typography>
            </div>




            <div >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, margin: "42px 0 0 0" }}>
                    Regellaufzeit
                </Typography>
                <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                    Wieviele Tage vergehen im Normalfall zwischen Abholung und Zustellung?
                </Typography>
                <div className='row m-0'>
                    <div className='col-4'>
                        <TextField
                            name='minimum_runtime'
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">Tage</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Regellaufzeit minimal " required variant="standard"
                        />
                    </div>
                    <div className='col-4'>
                        <TextField
                            name='maximum_runtime'
                            onChange={handleChange}
                            InputProps={{ endAdornment: <InputAdornment position="end">Tage</InputAdornment> }}
                            id="standard-basic" sx={{ width: "100%" }} type="number" label="Regellaufzeit maximal " required variant="standard"
                        />
                    </div>
                    <div className='col-4 row m-0'>
                        <div className='col-12'>
                            <FormControlLabel
                                name="standard_transit_times_info"
                                checked={form.standard_transit_times_info}
                                onChange={handleCheckboxChange}
                                sx={{ fontSize: "2px" }} control={<Checkbox />} label="Regellaufzeiten Info" />
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <Typography variant="subtitle2" sx={{ fontWeight: 700, margin: "42px 0 0 0" }}>
                    Vorlaufzeit
                </Typography>
                <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                    Wie lange benötigen Sie für die Disposition?
                </Typography>
                <div className='row m-0 mt-3'>
                    <div className='col-4'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Vorlaufzeit-Berechnung</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={form.lead_time_calculation_select}
                                variant="standard"
                                label="Einzugsgebiet"
                                name="lead_time_calculation_select"
                                onChange={handleChange}
                            >
                                <MenuItem value="Feste Vorlaufzeit">Feste Vorlaufzeit</MenuItem>
                                <MenuItem value="Same Day Obergrenze">Same Day Obergrenze</MenuItem>
                                <MenuItem value="Feste PLZ-Bereiche">Next Day Obergrenze</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {
                        form.lead_time_calculation_select === 'Feste Vorlaufzeit' &&
                        <div className='col-4'>
                            <TextField
                                name='lead_time'
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">Stunden</InputAdornment> }}
                                id="standard-basic" sx={{ width: "100%" }} type="number" label="Vorlaufzeit" required variant="standard"
                            />
                        </div>
                    }
                    {
                        form.lead_time_calculation_select === 'Same Day Obergrenze' &&
                        <>
                            <div className='col-4'>
                                <TextField
                                    name='same_day_pickup'
                                    onChange={handleChange}
                                    InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                                    id="standard-basic" sx={{ width: "100%" }} type="number" label="Abholung am selben Tag wenn Beauftragung bis " required variant="standard"
                                />
                            </div>
                            <div className='col-4'>
                                <TextField
                                    name='additional_lead_time'
                                    onChange={handleChange}
                                    InputProps={{ endAdornment: <InputAdornment position="end">Stunden</InputAdornment> }}
                                    id="standard-basic" sx={{ width: "100%" }} type="number" label="Zusätzliche Vorlaufzeit" required variant="standard"
                                />
                            </div>
                        </>
                    }
                    {
                        form.lead_time_calculation_select === 'Feste PLZ-Bereiche' &&
                        <div className='col-4'>
                            <TextField
                                name='next_day_pickup'
                                onChange={handleChange}
                                InputProps={{ endAdornment: <InputAdornment position="end">Uhr</InputAdornment> }}
                                id="standard-basic" sx={{ width: "100%" }} type="number" label="Abholung am nächsten Tag wenn Beauftragung bis" required variant="standard"
                            />
                        </div>
                    }
                </div>
            </div>
            <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, margin: "42px 0 0 0" }}>
                    Feiertagskalender
                </Typography>
                <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                    Der für Ihr Bundesland gültige Feiertagskalender ist automatisch hinterlegt. Sie können weitere Tage wie z.B. Ferientage durck Klick eintragen.
                </Typography>
            </div>
            <div className='mt-4'>
                <Calendar
                    onChange={(e) => setform(prevState => ({
                        ...prevState,
                        calender: e
                    }))}
                    value={form.calender}
                    // value={date} onChange={setDate}
                     multiple />
            </div>

        </StyledRunTimes_6>
    )
}

export default RunTimes_6

const StyledRunTimes_6 = styled.div`
    
`