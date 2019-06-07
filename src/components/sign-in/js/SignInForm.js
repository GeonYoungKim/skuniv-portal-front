import React, { Component } from 'react';
import { Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SigninForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: ""
        };
    }

    toSignUp = () => {
        this.props.toSignUp();
    }

    toFindId = () => {
        this.props.toFindId();
    }

    toFindPassword = () => {
        this.props.toFindPassword();
    }

    handleChange = (e) => {
        var stateField = e.target.name;
        if (stateField === "id") {
            this.setState({
                id: e.target.value
            })
        } else if (stateField === "password") {
            this.setState({
                password: e.target.value
            })
        }
    }

    render() {
        return (
            <center>
                <div className="main-wrap">
                    <div style={{ marginTop: "10%", marginLeft: "35%" }}>
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <h1 style={{ color: "orange", marginTop: "3%" }}>Stack Overflow</h1>
                                    <Form style={{ marginTop: "3%" }}>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "90%" }} for="id">Id</Label>
                                            <Input onChange={this.handleChange} style={{ width: "95%" }} type="id" name="id" placeholder="id 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "80%" }} for="password">Password</Label>
                                            <Input onChange={this.handleChange} style={{ width: "95%" }} type="password" name="password" placeholder="Password 입력" />
                                        </FormGroup>
                                    </Form>
                                    <Button onClick={() => { this.props.signIn(this.state) }} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "3%", width: "95%", fontSize: "250%" }}>로그인</Button>
                                    <hr />
                                    <CardBody style={{ color: "#78909C" }}>
                                        <Label onClick={this.toFindId} style={{ cursor: "pointer", marginLeft: "2%" }}>id 찾기</Label>
                                        <Label style={{ marginLeft: "2%" }}>|</Label>
                                        <Label onClick={this.toFindPassword} style={{ cursor: "pointer", marginLeft: "2%" }}>pw 찾기</Label>
                                        <Label style={{ marginLeft: "2%" }}>|</Label>
                                        <Label onClick={this.toSignUp} style={{ cursor: "pointer", marginLeft: "2%" }}>회원가입</Label>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </center>
        );
    }
}

export default SigninForm;