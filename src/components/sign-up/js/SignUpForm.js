import React, { Component } from 'react';
import { Card, CardBody, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            password:"",
            displayName:"",
            aboutMe:"",
            age: "",
            email:""
        };
    }

    handleChange = (e) => {
        var stateField = e.target.name;
        if(stateField === "id") {
            this.setState({
                id: e.target.value
            })
        } else if(stateField === "displayName") {
            this.setState({ 
                displayName: e.target.value
            })
        } else if(stateField === "password") {
            this.setState({
                password: e.target.value
            })
        } else if(stateField === "age") {
            this.setState({
                age: e.target.value
            })
        } else if(stateField === "aboutMe") {
            this.setState({
                aboutMe: e.target.value
            })
        } else if(stateField === "email") {
            this.setState({
                email: e.target.value
            })
        }
    }
    
    render() {
        
        return ( 
            <center>
                <div className="main-wrap" style={{marginBottom:"10%"}}>
                    <div style={{ marginTop: "10%", marginLeft: "35%" }}>
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <h1 style={{ color: "orange", marginTop:"3%" }}>Sign Up</h1>
                                    <Form style={{marginTop:"3%"}}>
                                        <FormGroup>
                                            <Label style={{paddingRight:"90%"}}for="id">Id</Label>
                                            <Input onChange={this.handleChange} style={{width:"95%"}} type="id" name="id" placeholder="id 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"80%"}} for="password">Password</Label>
                                            <Input onChange={this.handleChange} style={{width:"95%"}} type="password" name="password" placeholder="password 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"75%"}} for="displayName">DisplayName</Label>
                                            <Input onChange={this.handleChange} style={{width:"95%"}} type="displayName" name="displayName" placeholder="이름" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"86%"}} for="email">Email</Label>
                                            <Input onChange={this.handleChange} style={{width:"95%"}} type="email" name="email" placeholder="Email 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"81%"}} for="pw">AboutMe</Label>
                                            <Input onChange={this.handleChange} style={{width:"95%"}} type="aboutMe" name="aboutMe" placeholder="자기소개 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"88%"}} for="pw">Age</Label>
                                            <Input onChange={this.handleChange} style={{width:"95%"}} type="number" name="age" placeholder="나이 입력" />
                                        </FormGroup>
                                    </Form>
                                    <Button onClick={() => {this.props.signUp(this.state)}} style={{backgroundColor: "#42A5F5", color: "white", marginTop:"3%", marginBottom:"7%" , width:"95%", fontSize:"250%"}}>회원가입</Button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </center>
        );
    }
}


export default SignUpForm;