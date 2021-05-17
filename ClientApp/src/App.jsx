import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './Pages/Home';
import { FetchDataDemo } from './Pages/FetchDataDemo';
import { ModelingCockpit } from './Pages/ModelingCockpit';
import { FormattedGrid } from './Components/FormattedGrid'
import { PageWrapper } from './Components/PageWrapper'
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { lightTheme, darkTheme } from './Styles/ApplicationTheme'
import {useSelector} from 'react-redux'

function App() {
  //static displayName = App.name;
    const theme = useSelector(state => state.theme);

    const getTheme = () => {
        switch (theme) {
            default:
                return lightTheme;
            case "light":
                return lightTheme;
            case "dark":
                return darkTheme;
        }
    }

    return (
        <MuiThemeProvider style={{ fontFamily: 'Quicksand' }} theme={getTheme()}>
            <CssBaseline>
                <PageWrapper>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/modeling' component={ModelingCockpit} />
                        <Route path='/fetch-data' component={FetchDataDemo} />
                        <Route path='/datagrid' component={FormattedGrid} />
                    </Switch>
                </PageWrapper>
            </CssBaseline>
        </MuiThemeProvider>
    );
}

export default App;
