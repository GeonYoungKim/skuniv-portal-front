import React, { Component } from 'react';
import SignInForm from '../components/sign-in/js/SignInForm';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    professorSignIn = (body) => {
        console.log(body);
        axios
        .post(
            'http://localhost:9090/api/v1/portal/account/professor/signIn'
            , body
        )
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                if(response.data['status'] === 80801) {
                    alert('로그인에 실패하였습니다.');
                    this.props.history.push('/signIn');
                } else {
                    localStorage.Token = response.data['token'];
                    localStorage.AccountType = response.data['accountType'];
                    localStorage.Name = response.data['name'];
                    this.props.history.push('/professor/lecture');
                }
            } 
        });
    }

    studentSignIn = (body) => {
        console.log(body);
        axios
        .post(
            'http://localhost:9090/api/v1/portal/account/student/signIn'
            , body
        )
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                if(response.data['status'] === 80801) {
                    alert('로그인에 실패하였습니다.');
                    this.props.history.push('/signIn');
                } else {
                    console.log('login success');
                    window.location.href = 'http://localhost:8080/Main_page?user_id='+ response.data['name'];
                }
            } 
        });
    }

    toSignUp = () => {
        this.props.history.push('/signUp');
    }

    render() {
      
        return (
            <main>
                <SignInForm toSignUp={this.toSignUp} 
                    professorSignIn={this.professorSignIn}
                    studentSignIn={this.studentSignIn}
                />
            </main>
        );
    }
}


export default Login;