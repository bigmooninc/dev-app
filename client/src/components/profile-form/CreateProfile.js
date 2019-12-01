import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { display } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    margin: {
        marginBottom: theme.spacing(2)
    }
}));

const CreateProfile = props => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});


    return (
        <Fragment>
            <form className="flex flex-col">
                <TextField id="standard-basic" label="Company" name="company" value={company} onChange={e => onChange(e)}  className={classes.margin} type="text" />
                <TextField id="standard-basic" label="Website" name="website" value={website} onChange={e => onChange(e)}  className={classes.margin} type="text" />
                <TextField id="standard-basic" label="Location" name="location" value={location} onChange={e => onChange(e)}  className={classes.margin} type="text" />

                <TextField id="standard-basic" label="Status" name="status" value={status} onChange={e => onChange(e)}  className={classes.margin} type="text" />

                {/* <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select-label" value={status} onChange={e => onChange(e)}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select> */}

                <TextField id="standard-basic" label="Github Username" name="githubusername" value={githubusername} onChange={e => onChange(e)}  className={classes.margin} type="text" />
                <TextField id="standard-textarea" label="Bio" multiline name="bio" value={bio} onChange={e => onChange(e)}  className={classes.margin} type="text" />

                <Button onClick={() => toggleSocialInputs(!displaySocialInputs)}>
                    {displaySocialInputs ? 'Hide social media network links' : 'View social media network links'}
                </Button>

                {displaySocialInputs && <Fragment>
                    <TextField id="standard-basic" label="Twitter" name="twitter" value={twitter} onChange={e => onChange(e)}  className={classes.margin} type="text" />
                <TextField id="standard-basic" label="Facebook" name="facebook" value={facebook} onChange={e => onChange(e)}  className={classes.margin} type="text" />
                <TextField id="standard-basic" label="LinkedIn" name="linkedin" value={linkedin} onChange={e => onChange(e)}  className={classes.margin} type="text" />
                <TextField id="standard-basic" label="Youtube" name="youtube" value={youtube} onChange={e => onChange(e)}  className={classes.margin} type="text" />
                <TextField id="standard-basic" label="Instagram" name="instagram" value={instagram} onChange={e => onChange(e)}  className={classes.margin} type="text" />
                    </Fragment>}

                
                <Button variant="contained" color="primary" type="submit">Update Profile</Button>
            </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {

}

export default CreateProfile;
