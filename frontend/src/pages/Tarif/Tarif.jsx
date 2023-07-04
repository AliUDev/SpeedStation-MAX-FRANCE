import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'
import { AgGridReact } from 'ag-grid-react';

// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

const Tarif = () => {
    return (
        <StyledTrif>
            <div className='row w-100 m-0 mt-4 px-2'>
                <div className='col-6'>
                    <h3 className='text-muted fw-bolder'>Tarifkonfigurator</h3>
                </div>
                <div className='col-6 text-end'>
                    <Link to="/add-tarif">
                        <button className='btn btn-success'>NEUER TARIF</button>
                    </Link>
                </div>
            </div>
            
        </StyledTrif>
    )
}

export default Tarif

const StyledTrif = styled.div`

`