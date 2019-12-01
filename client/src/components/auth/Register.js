import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types'
import { register } from '../../actions/auth';


const useStyles = makeStyles(theme => ({
    margin: {
        marginBottom: theme.spacing(2)
    }
}));

export const Register = ({setAlert, register, isAuthenticated}) => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger' );
        } else {
            register({ name, email, password });
        }
    }

    // redirect if already registered
    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div>
            <h1>Register</h1>
            <form className="flex flex-col w-full max-w-lg mx-auto" onSubmit={e => onSubmit(e)}>
                <TextField id="standard-basic" label="Name" name="name" value={name} onChange={e => onChange(e)} className={classes.margin} type="text" />
                <TextField id="standard-basic" label="Email" name="email" value={email} onChange={e => onChange(e)} className={classes.margin} type="email" />
                <TextField id="standard-basic" label="Password" name="password" value={password} onChange={e => onChange(e)} className={classes.margin} type="password" />
                <TextField id="standard-basic" label="Confirm Password" name="password2" value={password2} onChange={e => onChange(e)} className={classes.margin} type="password" />
                <Button variant="contained" color="primary" type="submit">Register</Button>
            </form>
            <p>Already have an account? <Link to="/login">Sign In</Link></p>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
