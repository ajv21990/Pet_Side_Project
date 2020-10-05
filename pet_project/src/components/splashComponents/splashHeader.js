import React from 'react'
import ContainedButtons from '../button'
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets'
import StorefrontIcon from '@material-ui/icons/Storefront'
import InstagramIcon from '@material-ui/icons/Instagram'
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';



const SplashHeader = (props) => (
    <div className="d-flex" style={{ position: "sticky", backgroundColor: "#82a0bf" }}>
        <div className="d-flex justify-content-md-start col-md-4 align-self-center">
            <h1 style={{ color: "#303F9F" }}>PupBook</h1>
        </div>
        <div className="d-flex justify-content-md-center col-md-4">
            <Tooltip title="View Pups" TransitionComponent={Zoom}>
                <IconButton aria-label="view pets" color="primary">
                    <PetsIcon style={{ fontSize: 60 }} />
                </IconButton>
            </Tooltip>
            <Tooltip title="View Adoption Pups" TransitionComponent={Zoom}>
                <IconButton aria-label="view adoption pups" color="primary">
                    <StorefrontIcon style={{ fontSize: 60 }} />
                </IconButton>
            </Tooltip>
            <Tooltip title="View Instagram Pups" TransitionComponent={Zoom}>
                <IconButton aria-label="view instagram pups" color="primary">
                    <InstagramIcon style={{ fontSize: 60 }} />
                </IconButton>
            </Tooltip>
        </div>

        <div className="d-flex justify-content-md-end col-md-4 align-self-center">
            <ContainedButtons
                variant="contained"
                name="Sign In"
                color="primary"
            />
            <ContainedButtons
                variant="contained"
                name="Sign Up"
            />
        </div>

    </div>
)
export default SplashHeader