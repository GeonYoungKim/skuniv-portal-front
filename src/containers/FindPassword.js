import React, { Component } from 'react';
import FindPasswordForm from '../components/find-password/js/FindPasswordForm';
import axios from 'axios';

class FindPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            status: false
        };
    }

    findPassword = (param) => {
        axios({
            url: 'http://localhost:8080/api/v1/kaggle/stackoverflow/account/findPassword',
            params: param,
            method: 'GET'
        }).then((response) => {
            if (response.status === 200) {
                if (response.data['status'] === 80805) {
                    this.setState({
                        status: true
                    })    
                } else {
                    this.setState({
                        password: response.data['password']
                    })
                }
            }
        });
    }
    render() {
        return (
            <main>
                <FindPasswordForm findPassword={this.findPassword} password={this.state.password} status={this.state.status}/>
            </main>
        );
    }
}


export default FindPassword;