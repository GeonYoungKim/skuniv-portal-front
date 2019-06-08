import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SigninForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            password: "",
            accountType : "PROFESSOR",
            dropdownOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toSignUp = () => {
        this.props.toSignUp();
    }

    signIn = () => {
        if(this.state.accountType === 'PROFESSOR') {
            this.props.professorSignIn(this.state);
        } else {
            this.props.studentSignIn(this.state);
        }
    }

    render() {
        const dropToggleValue = (this.state.accountType === 'PROFESSOR')? '교수' : '학생';
        return (
            <center>
                <div className="main-wrap">
                    <div style={{ marginTop: "10%", marginLeft: "35%" }}>
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <h1 style={{ color: "#1abc9c", marginTop: "3%" }}>로그인</h1>
                                    <Form style={{ marginTop: "3%" }}>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "90%" }} for="id">Id</Label>
                                            <Input onChange={(e) => {this.setState({id:e.target.value})}} style={{ width: "95%" }} type="id" name="id" placeholder="id 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "80%" }} for="password">Password</Label>
                                            <Input onChange={(e) => {this.setState({password:e.target.value})}} style={{ width: "95%" }} type="password" name="password" placeholder="Password 입력" />
                                        </FormGroup>
                                        <div style={{marginTop:"6%"}}>
                                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                            <DropdownToggle caret>
                                                {dropToggleValue}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                            <DropdownItem><div onClick={() => this.setState({accountType:'PROFESSOR'})}>교수</div></DropdownItem>
                                                <DropdownItem><div onClick={() => this.setState({accountType:'STUDENT'})}>학생</div></DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown >
                                        </div>
                                    </Form>
                                    <Button onClick={this.signIn} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "6%", width: "95%", fontSize: "250%" }}>로그인</Button>
                                    <hr />
                                    <CardBody style={{ color: "#78909C" }}>
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