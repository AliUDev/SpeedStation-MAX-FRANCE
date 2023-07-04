import styled from '@emotion/styled'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Divider, InputAdornment, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import TextareaAutosize from '@mui/base/TextareaAutosize';

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
const DynamicField = ({ price, stateCatch }) => {

    const [fields, setFields] = useState([]);
    console.log(fields)

    const handleAddField = () => {
        const newFields = [...fields, { land: "", description: "", price: "" }];
        setFields(newFields);

    };

    const handleRemoveField = (index) => {
        const newFields = [...fields];
        newFields.splice(index, 1);
        setFields(newFields);
    };

    const handleInputChange = (event, index) => {
        const { name, value } = event.target;
        const newFields = [...fields];
        newFields[index][name] = value;
        setFields(newFields);
        stateCatch(fields)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fields);
    };


    return (
        <StyledDynamicField >
            <Container>
                <div className='parent text-end'>
                    <AddIcon className='add_icon' onClick={handleAddField} />
                </div>

                {fields.map((field, index) => (
                    <div key={index} className='row m-0 p-4' style={{ backgroundColor: "white", borderBottom: "1px solid rgb(0,0,0,0.2)" }}>
                        <div className='col-2'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Land</InputLabel>
                                <Select
                                    variant='standard'
                                    name="land"
                                    value={field.land}
                                    onChange={(event) => handleInputChange(event, index)}
                                >
                                    {
                                        landsArr.map((data, index) => (
                                            <MenuItem value={data} key={index}>{data}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div className={`${price ? 'col-8' : 'col-9'}`}>
                            <TextField id="standard-basic"
                                multiline
                                rows={4}
                                type="text"
                                name="description"
                                value={field.description}
                                onChange={(event) => handleInputChange(event, index)}
                                sx={{ width: "100%" }} label="PLZ Gebiete" required variant="outlined" />
                        </div>
                        {
                            price &&
                            <div className='col-1'>
                                <TextField
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">€</InputAdornment>,
                                    }}
                                    id="standard-basic"
                                    type="number"
                                    name="price"
                                    value={field.price}
                                    onChange={(event) => handleInputChange(event, index)}
                                    sx={{ width: "100%" }} label="Preis"
                                    required variant="standard" />
                            </div>
                        }
                        <div className='col-1 mt-3 text-danger text-center'>
                            <DeleteIcon className="cursor" onClick={() => handleRemoveField(index)} />
                        </div>
                    </div>
                ))}

                {/* <button type="submit">Submit</button> */}

            </Container>
        </StyledDynamicField>
    )
}

export default DynamicField

const StyledDynamicField = styled.div`

.parent{
    height: 55px;
    background-color: white;
    box-shadow: 0px 1px 1px 0px rgb(0,0,0,0.3);
    border-bottom: 1px solid rgb(0,0,0,0.2);
}
.add_icon{
    cursor: pointer;
    margin: 17px 20px 0 0;
}
.cursor{
    cursor: pointer;
}

`