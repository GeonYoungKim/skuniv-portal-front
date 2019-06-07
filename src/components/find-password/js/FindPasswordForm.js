import React, { Component } from 'react';
import { Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class FindPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            email: ""
        };
    }

    handleChange = (e) => {
        var stateField = e.target.name;
        if (stateField === "id") {
            this.setState({
                id: e.target.value
            })
        } else if (stateField === "email") {
            this.setState({
                email: e.target.value
            })
        }
    }

    render() {
        let screen;
        if (this.props.password !== "") {
            screen =
                <div className="main-wrap">
                    <div style={{ marginTop: "10%" }}>
                        <h1>찾으신 Password = <font style={{ color: "orange" }}>{this.props.password}</font></h1>
                        <Link to="/signIn">로그인하러 가기.</Link>
                    </div>
                </div>

        } else if (this.props.status === true) {
            screen =
                <div className="main-wrap">
                    <div style={{ marginTop: "10%" }}>
                        <h1>해당하는 Password가 없습니다.</h1>
                        <Link to="/signUp">회원가입하러 가기.</Link>
                    </div>
                </div>
        } else {
            screen =
                <div className="main-wrap">
                    <div style={{ marginTop: "10%", marginLeft: "35%" }}>
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <h1 style={{ color: "orange", marginTop: "3%" }}>Find Password</h1>
                                    <Form style={{ marginTop: "3%" }}>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "90%" }} for="id">Id</Label>
                                            <Input onChange={this.handleChange} style={{ width: "95%" }} type="id" name="id" placeholder="Id 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "85%" }} for="email">Email</Label>
                                            <Input onChange={this.handleChange} style={{ width: "95%" }} name="email" type="email" placeholder="Email 입력" />
                                        </FormGroup>
                                    </Form>
                                    <Button onClick={() => { this.props.findPassword(this.state) }} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "3%", marginBottom: "5%", width: "95%", fontSize: "250%" }}>비밀번호 찾기</Button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
        }

        return (
            <center>
                {screen}
            </center>
        );
    }
}

export default FindPasswordForm;