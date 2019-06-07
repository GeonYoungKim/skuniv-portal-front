import React, { Component } from 'react';
import { Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            isSearch: false
        };
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    keyDown = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                isSearch: true
            })
        }
    }

    render() {
        if (this.state.isSearch) {
            const defaultPageNo = 1;
            let searchUri = "/search/" + defaultPageNo + "/" + this.state.content;
            return <Redirect to={searchUri} />
        }
        return (
            <div className="main-wrap">
                <div style={{ marginTop: "10%" }}>
                    <center>
                        <h1 style={{ color: "orange" }}>Stack Overflow</h1>
                        <h6 style={{ color: "gray" }}>(geonyeong.kim)</h6>
                        <Input onKeyDown={this.keyDown} onChange={this.handleChange} style={{ marginTop: "3%", width: "40%", backgroundColor: "#f5f5ef" }} placeholder="Stack Overflow 키워드 입력" />
                    </center>
                </div>
            </div>
        )

    }
}

export default MainForm;
