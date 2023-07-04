import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useState } from 'react'

const PaymentMethods_9 = () => {

    const [checkBoxes, setcheckBoxes] = useState({
        value1: false,
        value2: false,
        value3: false,
    });
    const handleCheckboxChange = (event) => {
        const name = event.target.name;
        const value = event.target.checked;
        setcheckBoxes((prevState) => ({ ...prevState, [name]: value }));
    };
    return (
        <div>
            <Typography variant="caption" sx={{ margin: "0 0 20px 0" }}>
                Bitte beachten Sie, dass die Bezahlung zwischen Ihnen und dem Auftraggeber stattfindet. D.h. der Auftraggeber erhält die Rechnung von Ihnen, nicht von uns. Bei Zahlung per Vorkasse teilen wir dem Auftraggeber Ihre Kontodaten und den Verwendungszweck mit.
            </Typography>
            <br />
            {
                checkBoxes.value1 || checkBoxes.value2 || checkBoxes.value3 === false &&
                <Typography variant="body3" sx={{ margin: "0 0 20px 0", color: "red" }}>
                    Mindestens eine Zahlungsmethode auswählen
                </Typography>
            }
            <div>
                <FormControlLabel
                    name='value1'
                    onChange={handleCheckboxChange}
                    checked={checkBoxes.value1}
                    sx={{ fontSize: "2px" }} control={<Checkbox />} label="Rechnung" /><br />
                <FormControlLabel
                    checked={checkBoxes.value2}
                    name='value2'
                    onChange={handleCheckboxChange}
                    sx={{ fontSize: "2px" }} control={<Checkbox />} label="Bar bei Abholung" /><br />
                <FormControlLabel
                    checked={checkBoxes.value3}
                    name='value3'
                    onChange={handleCheckboxChange}
                    sx={{ fontSize: "2px" }} control={<Checkbox />} label="Vorkasse" /><br />
            </div>

        </div>
    )
}

export default PaymentMethods_9