import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Navbar from './../components/sub_components/Navbar';
import CardDetail from './CardDetail';

const App = () => {
    return (
    <div className='container-fluid'>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services/:name" component={CardDetail} />
        </Switch>
    </div>
    );
};

export default App;