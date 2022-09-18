import { styled, Box } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { MidSlide } from "./MidSlide";

// components
import NavBar from "./NavBar";
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productActions";
import Slide from './Slide';
import { MidSection } from './MidSection';

//
const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`
const Home = () => {

    // state.getProducts -> from browser
    const { products } = useSelector(state => state.getProducts);
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discounts for you" timer={false} />
                <Slide products={products} title="Suggesting Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Recommended Items" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Season's top picks" timer={false} />
            </Component>
        </>
    );
};

export default Home;
