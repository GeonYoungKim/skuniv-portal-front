import React, { Component } from 'react';
import MainForm from '../components/main/js/MainForm';
import MainHeader from '../components/main/js/MainHeader';

class Main extends Component {
    logout = () => {
        localStorage.removeItem('token');
        this.props.history.push('/main')
    }
    render() {
        return (
            <main>
                <MainHeader logout={this.logout}/>
                <MainForm/>
            </main>
        );
    }
}

export default Main;