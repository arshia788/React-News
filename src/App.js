import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Nabvar';
import Landing from './components/Landing';
import ItemProvider from './context/ItemProvider';
import Detail from './components/Detail';



const App = () => {

    return (
        <div>
            <ItemProvider>

                    <Navbar>

                        <Switch>
                            <Route path='/news/:id' component={Detail}/>    
                            <Route path='/news/:id' component={Detail}/>    
                            <Route exact path='/news' component={Landing}/> 
                            <Redirect to='/news'/>
                        </Switch>  

                    </Navbar>
                    
            </ItemProvider>

        </div>
    );
};

export default App;