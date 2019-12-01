import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    }
}));

export const Landing = ({ isAuthenticated }) => {

    const classes = useStyles();

    if(isAuthenticated) {
        return <Redirect to="/dashboard" />;    
    }

    

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="mb-3">Developer Connector</h1>
            <p className="mb-3">Create a  developer profile/portfolio, share posts and get help from other developers</p>
            <div className="flex">
                <Button variant="contained" color="primary" size="large" className={classes.margin}>
                    <Link to="/register">Sign Up</Link>
                </Button>
                <Button variant="contained" color="primary" size="large" className={classes.margin}>
                    <Link to="/login">Login</Link>
                </Button>
            </div>
        </div>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);