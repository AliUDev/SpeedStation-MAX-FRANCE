import { Alert, Button, Checkbox, Divider, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import styled from '@emotion/styled';
const EditorWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  min-height: 140px;
  margin: 20px 0;
`;




const Miscellaneous_11 = () => {


    const [form, setform] = useState({
        desired_customers: 'Private Kunden',
        cancellation_deadlines: 'Bis 16:00 am Vortag der Fahrt (default)',
        tax: false,
        sender_email: false,
        recipient_email: false,
        sender_phone: false,
        recipient_phone: false,
        additional_transport_insurance_can_be_booked: false,
        value_of_good_must_always_be_stated: false,
        new_goods_insured: false,
        used_goods_insured: false,
        loadable_from_the_side: false,
        loadable_from_the_above: false,
        tail_lift_notification: false,
        custom_doc: '',
        special_font_text: ''
    });
    console.log(form)
    

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

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
    const handleKeyCommand = (command, state) => {
        const newState = RichUtils.handleKeyCommand(state, command);
        if (newState) {
          setEditorState(newState);
          return 'handled';
        }
        return 'not-handled';
      };
      

    const toggleBold = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const toggleItalic = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };

    const toggleUnderline = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
    };
    return (
        <div>
            <div>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Gewünschte Kunden
                </Typography>
                <Typography variant="caption">
                    Wer darf Transporte dieses Tarifs buchen?
                </Typography>
                <div className='row m-0 mt-3'>
                    <div className='col-4'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Kundengruppe</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='desired_customers'
                                onChange={handleChange}
                                value={form.desired_customers}
                                variant="standard"
                                label="Kundengruppe"
                            >
                                <MenuItem value='Private Kunden'>Private Kunden</MenuItem>
                                <MenuItem value='Gewerbliche Kunden'>Gewerbliche Kunden</MenuItem>
                                <MenuItem value='Private Kunden'>Private wie auch gewerbliche Kunden</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {
                        form.desired_customers === 'Gewerbliche Kunden' &&
                        <div className='col-8'>
                            <FormControlLabel
                                name="tax"
                                checked={form.tax}
                                onChange={handleCheckboxChange}
                                control={<Checkbox />} label="SteuerId/UstId Pflicht" /><br />
                            <Typography variant="caption">
                                Wenn ausgewählt müssen auch Einzelunternehmer eine Steuer oder Umsatzsteuer Id angeben.
                            </Typography>
                        </div>
                    }
                </div>
            </div>
            <div className='mt-5'>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Stornierungsfristen
                </Typography>
                <Typography variant="caption">
                    Bitte geben Sie Ihre Stornierungszeiten an.
                </Typography>
                <div className='row m-0 mt-3'>
                    <div className='col-4'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Stornierungszeit</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="standard"
                                label="Kundengruppe"
                                value={form.cancellation_deadlines}
                                name="cancellation_deadlines"
                                onChange={handleChange}
                            >
                                <MenuItem value='Bis 16:00 am Vortag der Fahrt (default)'>Bis 16:00 am Vortag der Fahrt (default)</MenuItem>
                                <MenuItem value='Bis 9h vor Fahrt'>Bis 9h vor Fahrt</MenuItem>
                                <MenuItem value='Bis 1h nach Eingang der Buchung'>Bis 1h nach Eingang der Buchung</MenuItem>
                                <MenuItem value='Bis 3h nach Eingang der Buchung'>Bis 3h nach Eingang der Buchung</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Pflichtfelder
                </Typography>
                <Typography variant="caption">
                    Welche dieser Felder muss ein Kunde bei der Buchung unbedingt angeben?
                </Typography>
                <div className='row m-0 mt-3'>
                    <div className='col-3'><FormControlLabel
                        name="sender_email"
                        checked={form.sender_email}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="Absender E-Mail" /></div>
                    <div className='col-3'><FormControlLabel
                        name="recipient_email"
                        checked={form.recipient_email}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="Empfänger E-Mail" /></div>
                    <div className='col-3'><FormControlLabel
                        name="sender_phone"
                        checked={form.sender_phone}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="Absender Telefon" /></div>
                    <div className='col-3'><FormControlLabel
                        name="recipient_phone"
                        checked={form.recipient_phone}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="Empfänger Telefon" /></div>
                </div>
            </div>
            <div className='mt-5'>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Mitteilung an den Kunden
                </Typography>
                <Typography variant="caption">
                    In diesem Feld können Sie eine Mitteilung an den Auftraggeber schreiben. Der Text wird im Rahmen des Buchungsprozesses sowie auf der Auftragsbestätigung angezeigt.
                </Typography>
                <EditorWrapper>
                    <div>
                        <Button sx={{ color: "black" }} onClick={toggleBold}><FormatBoldIcon /></Button>
                        <Button sx={{ color: "black" }} onClick={toggleItalic}><FormatItalicIcon /></Button>
                        <Button sx={{ color: "black" }} onClick={toggleUnderline}><FormatUnderlinedIcon /></Button>
                    </div>
                    <Divider sx={{ margin: "10px 0" }} />
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={setEditorState}
                    />
                </EditorWrapper>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    Versicherung
                </Typography>
                <Typography variant="caption">
                    Wir haben standardmäßig die AdSp 2017 für Sie hinterlegt. In Ihren Einstellungen unter "Versicherung" können Sie die Aufpreise für Ihre zusätzliche Transportversicherung hinterlegen.
                </Typography>
                <div className='mt-3'><FormControlLabel
                    name="additional_transport_insurance_can_be_booked"
                    checked={form.additional_transport_insurance_can_be_booked}
                    onChange={handleCheckboxChange}
                    control={<Checkbox />} label="zusätzliche Transportversicherung zubuchbar" /></div>

                <div className=''><FormControlLabel
                    name="value_of_good_must_always_be_stated"
                    checked={form.value_of_good_must_always_be_stated}
                    onChange={handleCheckboxChange}
                    control={<Checkbox />} label="Warenwert muss immer angegeben werden" /></div>
                <div className='mt-4'>
                    <Typography variant="caption">
                        Zusätzlich können Sie Ihre Kunden darauf hinweisen, ob sich der Versicherungsschutz auf neue oder gebrauchte Waren bezieht.
                    </Typography>
                    <div className='mt-3'><FormControlLabel
                        name="new_goods_insured"
                        checked={form.new_goods_insured}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="Neuware versichert" /></div>
                    <div className='mt-3'><FormControlLabel
                        name="used_goods_insured"
                        checked={form.used_goods_insured}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="Gebrauchte Ware versichert" /></div>
                </div>
                <div className='mt-4'>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Kraftstoffzuschlag
                    </Typography>
                    <Typography variant="caption">
                        Wählen Sie hier aus einem Ihrer bereits hinterlegten Kraftstoffzuschläge. Ihre Kunden sehen den prozentualen Zuschlag als Einzelposition innerhalb des Auftrags. In Ihren Speditions-Einstellungen unter "Kraftstoffzuschlag" können Sie neue Zuschläge einrichten und jederzeit anpassen.
                    </Typography>
                </div>
                <Alert className='my-3' severity="warning">Für Ihre Spedition sind noch keine Kraftstoffzuschläge angelegt. Diese können Sie in den Speditionseinstellungen verwalten.</Alert>
                <div className='mt-4'>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Fahrzeug
                    </Typography>
                    <Typography variant="caption">
                        Spezifizieren Sie Ihr Angebot
                    </Typography>
                    <div className='mt-3'><FormControlLabel
                        name="loadable_from_the_side"
                        checked={form.loadable_from_the_side}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="von der Seite beladbar" /></div>
                    <div className='mt-3'><FormControlLabel
                        name="loadable_from_the_above"
                        checked={form.loadable_from_the_above}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="von oben beladbar" /></div>
                </div>
                <div className='mt-4'>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Ladebordwand
                    </Typography>
                    <Typography variant="caption">
                        Müssen Privatkunden zwingend Ladebordwand und Avisierung dazubuchen?
                    </Typography>
                    <div className='mt-3'><FormControlLabel
                        name="tail_lift_notification"
                        checked={form.tail_lift_notification}
                        onChange={handleCheckboxChange}
                        control={<Checkbox />} label="Ladebordwand und Avisierung sind erforderlich" /></div>
                </div>
                <div className='mt-4'>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                        Zolldokumente
                    </Typography>
                    <Typography variant="caption">
                        Geben Sie Ihren Kunden direkt mit, über welche Webseite oder an welche E-Mail-Adresse sie Ihre zollrelevanten Dokumente mit Ihnen teilen sollen. Wir übermitteln die jeweilige Adresse direkt bei Auftragsvergabe an den Auftraggeber.
                    </Typography>
                    <TextField
                        name='custom_doc'
                        onChange={handleChange}
                        value={form.custom_doc}
                        id="standard-basic" sx={{ width: "100%" }} type="text" label="Zolldokumente Inbox (E-Mail oder Upload Url)" variant="standard" />
                </div>
            </div>

        </div>
    )
}

export default Miscellaneous_11