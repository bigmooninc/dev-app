import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const useStyles = makeStyles(theme => ({
    margin: {
        marginBottom: theme.spacing(2)
    }
}));

export const Login = ({ login, isAuthenticated }) => {

    const classes = useStyles();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // redirect id logged in
    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form className="flex flex-col w-full max-w-lg mx-auto" onSubmit={e => onSubmit(e)}>
                <TextField id="standard-basic" label="Email" name="email" value={email} onChange={e => onChange(e)} className={classes.margin} type="email" />
                <TextField id="standard-basic" label="Password" name="password" value={password} onChange={e => onChange(e)} className={classes.margin} type="password" />
                <Button variant="contained" color="primary" type="submit">Sign In</Button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
