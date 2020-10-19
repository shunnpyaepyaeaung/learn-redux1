import React from 'react'
import Container from './components/container/Container'
import Nav from './components/nav/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Todo from './components/todo/Todo';
import Tally from './components/tally/Tally';
import Budget from './components/budget/Budget';
import './styles.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/rootReducer/rootReducer';


function App() {
    const store = createStore(reducer)
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav />
                <Container>
                    <Route path="/todo">
                        <Todo />
                    </Route>

                    <Route path="/tally">
                        <Tally />
                    </Route>

                    <Route path="/budgetapp">
                        <Budget />
                    </Route>
                </Container>
            </BrowserRouter>
        </Provider>


    )
}

export default App
