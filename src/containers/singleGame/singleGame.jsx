import React, {useEffect} from 'react';
import {Route} from "react-router-dom";

import Game from './game';

import {connect} from "react-redux";
import {fetchProducts} from '../../services/products/productActions';

//// Holds routing for GAME

const SingleGame = ({match, dispatch, products, loading, error}) => {

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    if (error) {
        return (<div>...Something Went Wrong</div>)
    }
    if (loading) {
        return <div>Loading....</div>
    }

    return (<div className="singleGame">
        <Route path={`${match.path}`} render={(props) => <Game {...props} data={products}/>}/>
    </div>)
}

const mapStateToProps = state => ({
    products: state.products.items,
    loading: state.products.loading,
    error: state.products.error
});

export default connect(mapStateToProps)(SingleGame);
