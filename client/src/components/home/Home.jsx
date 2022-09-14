import { Fragment } from "react"; // to avoid creation of extra div.
import { styled, Box } from '@mui/material';
// components
import NavBar from "./NavBar";
import Banner from "./Banner";

const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`
const Home = () => {
    return (
        <Fragment>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </Fragment>
    );
};

export default Home;
