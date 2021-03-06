import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import { Link } from 'react-router-dom';

export const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

   
    return loading && profile === null ? <Spinner /> : <Fragment>
        <h1>Dashboard</h1>
    <p>Welcome, { user && user.name }</p>
    {profile !== null ? <Fragment>has</Fragment> : <Fragment>
        <p>You have not setup a profile, please add some info.</p>
        <Link to="/create-profile">Create Profile</Link>
        </Fragment>}
    </Fragment>;

}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile,
})

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
