import React, { Component } from 'react';
import FindIdForm from '../components/find-id/js/FindIdForm';
import axios from 'axios';

class FindId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            status: false
        };
    }

    findId = (param) => {
        axios({
            url: 'http://localhost:8080/api/v1/kaggle/stackoverflow/account/findId',
            params: param,
            method: 'GET'
        }).then((response) => {
            if (response.status === 200) {
                if (response.data['status'] === 80804) {
                    this.setState({
                        status: true
                    })
                } else {
                    this.setState({
                        id: response.data['id']
                    })
                }
            } 
        });
    }

    render() {
        return (
            <main>
                <FindIdForm findId={this.findId} id={this.state.id} status={this.state.status}/>
            </main>
        );
    }
}


export default FindId;