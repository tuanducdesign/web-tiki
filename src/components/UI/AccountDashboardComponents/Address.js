import React, { useState} from 'react'
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";

import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import 'date-fns';
import Checkbox from "@material-ui/core/Checkbox";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import AddIcon from '@material-ui/icons/Add';

import MenuItem from "@material-ui/core/MenuItem";


const userStyles = makeStyles(() => ({
    button: {
        color: '#ff9100',
        borderColor: '#ff9100',
        "&:focus": {
            outline: "none"
        }
    },
    input: {
        height: '1em !important'
    },
    title: {
        fontSize: '1.1em',
        fontWeight: 400,
        marginBottom: '0.3em',
    },
    grid: {
        padding: '2em',
        backgroundColor: 'white',
        borderRadius: '3px',
        boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)",
    },
    removeLinkStyles: {
        textDecoration: 'none !important'
    },
    addAddress: {
        backgroundColor: 'white',
        border: '1.2px dotted rgb(153, 153, 153)',
        padding: '1em',
        textAlign: 'center',
        color: '#189EFF',
        "&:hover": {
            cursor: 'pointer'
        }

    },
    "@global .MuiButton-outlinedSecondary:hover": {
        border: "1px solid #ff9100",
        backgroundColor: "rgba(255, 145, 0, 0)"
    },
    '@global .MuiOutlinedInput-root fieldset': {
        borderColor: 'rgb(153, 153, 153)',
    },
    '@global .Mui-focused fieldset': {
        borderColor: '#29b6f6 !important',
    },
    '@global label.Mui-focused': {
        color: '#29b6f6 !important',
    },
    '@global .MuiRadio-colorSecondary.Mui-checked': {
        color: '#29b6f6 !important'
    },
    '@global .MuiRadio-colorSecondary.Mui-checked:hover ': {
        backgroundColor: 'rgba(41,182,246, 0.04) !important'
    },
    '@global .MuiIconButton-colorSecondary:hover': {
        backgroundColor: 'rgba(41,182,246, 0.04) !important'
    },
    '@global .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottom: '2px solid rgb(153, 153, 153) !important'
    },
    '@global .MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl.MuiInputBase-adornedEnd:focus': {
        outline: 'none !important'
    },
    '@global .MuiInput-underline:after': {
        borderBottom: '2px solid #29b6f6 !important'
    },
    '@global .MuiButtonBase-root.MuiIconButton-root': {
        outline: 'none !important'
    },
    '@global .MuiPickersDay-daySelected': {
        backgroundColor: '#29b6f6 !important'
    },
    '@global .MuiCheckbox-colorSecondary.Mui-checked': {
        color: '#29b6f6 !important'
    },
}));


export const Address = (props) => {
    const classes = userStyles();
    const [name, setName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [radio, setRadio] = useState('House/Condominium');
    const [checked, setChecked] = useState(false);

    const [form, setForm] = useState(false);


    const handleSubmit = () => {

    };

    const city_ = ['Ho Chi Minh', 'Hanoi', 'Danang','An Giang', 'BA Ria Vung Tau', 'Bac Giang','Bac Kan', 'Bac Lieu', 'Bac Ninh', 'Ben tre', 'Binh Duong', 'Binh Phuoc', 'Binh Thuan', 'Pacify', 'Ca Mau', 'Can Tho', 'As tall as', 'Gia Lai', 'Ha Giang', 'Henan', 'Ha Tinh', 'Hai Duong', 'Hai Phong', 'Hau Giang', 'H??a B??nh', 'hung Yen', 'Kh??nh H??a', 'Kien Giang', 'Kon Tum', 'Lai Chau', 'Lam Dong', 'Lang Son', 'Lao Cai', 'Long An', 'Nam Dinh', 'Nghe An', 'Ninh Binh', 'Ninh Thu???n', 'Phu-Tho', 'Phu Yen', 'Quang Binh', 'Quang Nam', 'Quang Ngai', 'Quang Ninh', 'Quang Tri', 'Soc Trang', 'Son La', 'Xining', 'peaceful', 'Thai Nguyen', 'Thanh Hoa', 'Hue', 'Tien Giang', 'Tra Vinh', 'Tuyen Quang', 'Vinh Long', 'Vinh Phuc', 'Yen Bai', 'Dak Lak', 'Dak Nong', 'Dien Bien', 'Dong Nai', 'Dong Thap'];
    const district_ = ['Qu???n Ba ????nh', 'Qu???n Ho??n Ki???m', 'Qu???n Hai B?? Tr??ng' ,'Qu???n ?????ng ??a', 'Qu???n C???u Gi???y', 'Qu???n Long Bi??n', 'Qu???n Ho??ng Mai', 'Huy???n S??c S??n', 'Qu???n B???c T??? Li??m', 'Huy???n Thanh Tr??', 'Huy???n Gia L??m', 'Huy???n Ba V??', 'Huy???n Ch????ng M???', 'Huy???n ??an Ph?????ng', 'Huy???n Ho??i ?????c', 'Huy???n M??? ?????c', 'Huy???n Ph?? Xuy??n', 'Huy???n Ph??c Th???', 'Huy???n Qu???c Oai', 'Huy???n Th???ch Th???t', 'Huy???n Thanh Oai', 'Huy???n Th?????ng T??n', 'Huy???n ???ng H??a', 'Huy???n M?? Linh', 'Qu???n H?? ????ng', 'Th??? x?? S??n T??y', 'Huy???n ????ng Anh', 'Qu???n Nam T??? Li??m', 'Qu???n Thanh Xu??n', 'Qu???n T??y H???'];
    const ward_ = ['Ph?????ng C???ng V???', 'Ph?????ng ??i???n Bi??n', 'Ph?????ng ?????i C???n', 'Ph?????ng Gi???ng V??', 'Ph?????ng Kim M??', 'Ph?????ng Li???u Giai', 'Ph?????ng Ng???c H??', 'Ph?????ng Ng???c Kh??nh', 'Ph?????ng Nguy???n Trung Tr???c', 'Ph?????ng Ph??c X??', 'Ph?????ng Qu??n Th??nh', 'Ph?????ng Th??nh C??ng', 'Ph?????ng Tr??c B???ch', 'Ph?????ng V??nh Ph??c'];

    const Form = <ValidatorForm onSubmit={handleSubmit} className={classes.grid}>
        <FormGroup>
            <FormControl>

                <TextValidator
                    size="small"
                    label="Full Name"
                    style={{margin: 8}}
                    placeholder="Your full name"
                    value={name}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setName(e.target.value)}
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["Enter Your Full Name"]}
                />
            </FormControl>
            <FormControl>
                <TextValidator
                    id="outlined-full-width"
                    size="small"
                    label="Company name"
                    style={{margin: 8}}
                    placeholder="Your company name"
                    value={companyName}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setCompanyName(e.target.value)}
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["Enter your company name"]}
                />
            </FormControl>
            <FormControl>
                <TextValidator
                    size="small"
                    label="Phone Number"
                    style={{margin: 8}}
                    placeholder="Phone No."
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    margin="normal"
                    type={'tel'}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["Enter your phone number"]}
                />

            </FormControl>
            <FormControl>
                <TextValidator
                    size="small"
                    select
                    label="City/Province"
                    value={city}
                    style={{margin: 8}}
                    onChange={(e)=>setCity(e.target.value)}
                    // helperText="Please select your city/province"
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["Select a city"]}
                >
                    {city_.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextValidator>

            </FormControl>
            <FormControl>
                <TextValidator
                    size="small"
                    select
                    label="District"
                    value={district}
                    style={{margin: 8}}
                    onChange={(e)=>setDistrict(e.target.value)}
                    // helperText="Please select your city/province"
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["Select a district"]}
                >
                    {district_.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextValidator>

            </FormControl>
            <FormControl>
                <TextValidator
                    size="small"
                    select
                    label="Ward"
                    value={ward}
                    style={{margin: 8}}
                    onChange={(e)=>setWard(e.target.value)}
                    // helperText="Please select your city/province"
                    variant="standard"
                >
                    {ward_.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextValidator>

            </FormControl>
            <FormControl>
                <TextValidator
                    size="small"
                    label="Address"
                    value={address}
                    style={{margin: 8}}
                    onChange={(e)=>setAddress(e.target.value)}
                    // helperText="Please select your city/province"
                    variant="standard"
                    validators={["required"]}
                    errorMessages={["Enter your address"]}
                />

            </FormControl>
            <FormControl style={{marginLeft: '1em', marginTop: '0.5em'}}>
                <FormLabel component="legend" style={{color: 'rgb(153, 153, 153)'}}>Address type</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={radio}
                            onChange={(e) => setRadio(e.target.value)} row>
                    <FormControlLabel value="House/Condominium" control={<Radio/>} style={{color: 'rgb(153, 153, 153)'}} label="House / Condominium"/>
                    <FormControlLabel value="Agency/Company" control={<Radio/>} style={{color: 'rgb(153, 153, 153)'}} label="Agency / Company"/>
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormControlLabel
                    style={{color: "rgb(153, 153, 153)", marginLeft: '0.1em'}}
                    control={
                        <Checkbox
                            style={{width: "2em"}}
                            checked={checked}
                            onChange={() => setChecked(val => !val)}
                            value="primary"
                            inputProps={{'aria-label': 'primary checkbox'}}
                        />
                    }
                    label="Set as default address"

                />
            </FormControl>

            <Button
                variant="outlined"
                type={'submit'}
                color="secondary"
                className={classes.button}
                style={{
                    fontSize: '0.7em',
                    margin: 0,
                    marginLeft: '1em',
                    marginRight: '0.5em',
                    marginTop: '2em'
                }}

            >
                Update
            </Button>
        </FormGroup>
    </ValidatorForm>


    return (
        <div style={{width: '80%'}}>
            <div>

                {!form &&
                <>
                    <div className={classes.title}>Address</div>
                    <div className={classes.addAddress} onClick={() => setForm(true)}><AddIcon
                        style={{color: 'rgb(153, 153, 153)'}}/> Add a new Address
                    </div>
                </>
                }
                {form &&
                <>
                    <div className={classes.title}>Create an address book</div>
                    {Form}
                </>
                }
            </div>
        </div>
    )
};

export default Address
