import React, { Component } from 'react';
import SignUpForm from '../components/sign-up/js/SignUpForm';
import axios from 'axios';

class SignUp extends Component {
    
    signUp = (body) => {
        axios
            .post(
                'http://localhost:8080/api/v1/kaggle/stackoverflow/account'
                , body
            )
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    this.props.history.push('/signIn')
                }
            });
    }


    render() {

        return (
            <main>
                <SignUpForm signUp={this.signUp} />
            </main>
        );
    }
}


export default SignUp;