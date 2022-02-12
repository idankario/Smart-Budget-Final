
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Sector } from "recharts";
import { Modal, Button, TextField, Select, MenuItem, Typography } from '@mui/material';
import imageFamily from '../images/family.svg'

import { ButtonOrange, Form, StyledLink } from './util/buttonOrange';
export default function AddExpensesPage() {
    return (
        <div>
            <section style={{ maxWidth: "400px", padding: "20px", margin: "auto", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}  >
                <img src={imageFamily} alt="imageFamily" />
                <h1 className='neaonLabel'><span>add</span><span>expense!</span></h1>
                <form>
                    <div className='familyForm'></div>
                    <label>Sumitted by:</label>
                    <TextField
                    />
                    <div className='familyForm'></div>
                    <label>Email:</label>
                    <TextField
                    />
                    <div className='familyForm'></div>
                    <label>Payment by:</label>
                    <TextField
                    />
                    <div className='familyForm'></div>
                    <label>Catogray:</label>
                    <Select>
                        <MenuItem value="pairant">car</MenuItem>
                        <MenuItem value="child">study</MenuItem>
                        <MenuItem value="child">cosmetics</MenuItem>
                        <MenuItem value="child">food</MenuItem>
                        <MenuItem value="child">home</MenuItem>
                    </Select>
                    <div className='familyForm'></div>
                    <label>Cost:</label>
                    <TextField
                    />
                    <div className='familyForm'></div>
                    <label>Description:</label>
                    <TextField
                    />

                </form>
                <ButtonOrange

                >
                    Add expense!
                </ButtonOrange>
            </section>
        </div>
    );
}