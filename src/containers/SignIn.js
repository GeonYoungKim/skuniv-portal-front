import React, { Component } from 'react';
import SignInForm from '../components/sign-in/js/SignInForm';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    signIn = (body) => {
        axios
        .post(
            'http://localhost:8080/api/v1/kaggle/stackoverflow/account/signIn'
            , body
        )
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                if(response.data['status'] === 80803) {
                    this.props.history.push('/signIn');
                } else {
                    localStorage.token = response.data['token'];
                    this.props.history.goBack();
                }
            } 
        });
    }

    toSignUp = () => {
        this.props.history.push('/signUp');
    }

    toFindId = () => {
        this.props.history.push('/findId');
    }

    toFindPassword = () => {
        this.props.history.push('/findPassword');
    }

    render() {
      
        return (
            <main>
                <SignInForm toSignUp={this.toSignUp} toFindId={this.toFindId} toFindPassword={this.toFindPassword} signIn={this.signIn}/>
            </main>
        );
    }
}


export default Login;