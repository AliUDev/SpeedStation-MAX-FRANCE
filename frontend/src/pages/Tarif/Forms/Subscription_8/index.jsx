import { Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Subscription_8 = () => {
    const itemsArr = [
        'proTag',
        'bis jeden Montag Abend',
        'bis jeden Dienstag Abend',
        'bis jeden Mittwoch Abend',
        'bis jeden Donnerstag Abend',
        'bis jeden Freitag Abend',
        'bis jeden Samstag Abend',
        'bis jeden Sonntag Abend'

    ]
    const [requireCheck, setrequireCheck] = useState(false);
    const [enabled, setenabled] = useState('proTag');

    const [form, setform] = useState({
        quotaMode: false,
        number_of_allowed_booking: 0,
        leadTime_calculation: 'proTag',
        saturdays_count_towards_the_next_day: false,
        sundays_count_towards_the_next_day: false,
        holidays_count_to_the_next_day: false,
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

    return (
        <div>
            <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                Sie können regelmäßige Restmengen oder Leerfahrten anbieten. Sprechen Sie uns hierzu gerne an.
            </Typography>
            <div>
                <FormControlLabel
                    name="quotaMode"
                    checked={form.quotaMode}
                    onChange={handleCheckboxChange}
                    sx={{ fontSize: "2px" }} control={<Checkbox />} label="Kontingent-Modus aktivieren" />
            </div>
            <div className='row m-0'>
                <div className='col-4'>
                    <TextField
                        name='number_of_allowed_booking'
                        onChange={handleChange}
                        value={form.number_of_allowed_booking}
                        id="standard-basic" sx={{ width: "100%" }} type="number" label="Anzahl der erlaubten Buchungen" required={form.quotaMode} variant="standard" />
                </div>
                <div className='col-4 row'>
                    <div className='col-12'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Vorlaufzeit-Berechnung</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="standard"
                                label="Einzugsgebiet"
                                name='leadTime_calculation'
                                onChange={handleChange}
                                value={form.leadTime_calculation}
                            >
                                {
                                    itemsArr.map((data, index) => (
                                        <MenuItem key={index} value={data}>{data}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </div>
                    {
                        form.leadTime_calculation === 'proTag' &&
                        <div className='col-12'>
                            <FormControlLabel
                                name='saturdays_count_towards_the_next_day'
                                onChange={handleCheckboxChange}
                                checked={form.saturdays_count_towards_the_next_day}
                                sx={{ fontSize: "2px" }} control={<Checkbox />} label="Samstage zählen zum nächsten Tag" />
                            <FormControlLabel
                                name='sundays_count_towards_the_next_day'
                                onChange={handleCheckboxChange}
                                checked={form.sundays_count_towards_the_next_day}
                                sx={{ fontSize: "2px" }} control={<Checkbox />} label="Sonntage zählen zum nächsten Tag" />
                            <FormControlLabel
                                name='holidays_count_to_the_next_day'
                                onChange={handleCheckboxChange}
                                checked={form.holidays_count_to_the_next_day}
                                sx={{ fontSize: "2px" }} control={<Checkbox />} label="Feiertage zählen zum nächsten Tag" />
                        </div>

                    }
                </div>

            </div>
        </div>
    )
}

export default Subscription_8