import React, { Component } from 'react';
import { Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class FindIdForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: ""
        };
    }

    handleChange = (e) => {
        var stateField = e.target.name;
        if (stateField === "displayName") {
            this.setState({
                displayName: e.target.value
            })
        } else if (stateField === "email") {
            this.setState({
                email: e.target.value
            })
        }
    }

    render() {
        let screen;
        if (this.props.id !== "") {
            screen =
                <div className="main-wrap">
                    <div style={{ marginTop: "10%"}}>
                        <h1>찾으신 Id = <font style={{color:"orange"}}>{this.props.id}</font></h1>
                        <Link to="/signIn">로그인하러 가기.</Link>
                    </div>
                </div>

        }  else if(this.props.status === true) {
            console.log('status true')
            screen =
                <div className="main-wrap">
                    <div style={{ marginTop: "10%"}}>
                        <h1>해당하는 Id가 없습니다.</h1>
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
                                    <h1 style={{ color: "orange", marginTop: "3%" }}>Find Id</h1>
                                    <Form style={{ marginTop: "3%" }}>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "74%" }} for="displayName">DisplayName</Label>
                                            <Input onChange={this.handleChange} style={{ width: "95%" }} type="displayName" name="displayName" placeholder="DisplayName 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "85%" }} for="email">Email</Label>
                                            <Input onChange={this.handleChange} style={{ width: "95%" }} name="email" type="email" placeholder="Email 입력" />
                                        </FormGroup>
                                    </Form>
                                    <Button onClick={() => { this.props.findId(this.state) }} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "3%", marginBottom: "5%", width: "95%", fontSize: "250%" }}>아이디 찾기</Button>
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

export default FindIdForm;