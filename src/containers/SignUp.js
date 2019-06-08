import React, { Component } from 'react';
import SignUpForm from '../components/sign-up/js/SignUpForm';
import axios from 'axios';

class SignUp extends Component {
    
    professorSignUp = (body) => {
        console.log(body);
        axios
            .post(
                'http://localhost:9090/api/v1/portal/account/professor/signUp'
                , body
            )
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    this.props.history.push('/signIn')
                }
            });
    }

    studentSignUp = (body) => {
        console.log(body);
        axios
            .post(
                'http://localhost:9090/api/v1/portal/account/student/signUp'
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
                <SignUpForm professorSignUp={this.professorSignUp} studentSignUp={this.studentSignUp}/>
            </main>
        );
    }
}


export default SignUp;