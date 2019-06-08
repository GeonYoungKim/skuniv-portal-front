import React, { Component } from 'react';
import {Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Card, Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import NumberFormat from 'react-number-format';


class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            password:"",
            name:"",
            phone:"",
            email:"",
            accountType : "PROFESSOR",
            dropdownOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    signUp = () => {
        const phoneRegex = /^\(?([0-9]{3})\)?-([0-9]{4})-([0-9]{4})$/;
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        
        const isValidPhone = this.state.phone.match(phoneRegex);
        const isValidEmail = this.state.email.match(emailRegex);
        const isValidId = this.state.id !== '';
        const isValidPassword = this.state.password !== '';
        const isValidName = this.state.name !== '';

        if(isValidPhone && isValidEmail && isValidId && isValidName && isValidPassword) {
            if(this.state.accountType === 'PROFESSOR') {
                this.props.professorSignUp(this.state);
            } else {
                this.props.studentSignUp(this.state);
            }
        } else {
            alert('형식이 잘못되었습니다.')
        }
    }
    
    render() {
        const dropToggleValue = (this.state.accountType === 'PROFESSOR')? '교수' : '학생';
        
        return ( 
            <center>
                <div className="main-wrap" style={{marginBottom:"10%"}}>
                    <div style={{ marginTop: "10%", marginLeft: "35%" }}>
                        <Row>
                            <Col sm="6">
                                <Card body>
                                    <h1 style={{ color: "#1abc9c", marginTop:"3%" }}>회원가입</h1>
                                    <Form style={{marginTop:"3%"}}>
                                        <FormGroup>
                                            <Label style={{paddingRight:"90%"}}for="id">Id</Label>
                                            <Input onChange={(e) => {this.setState({id:e.target.value})}} style={{width:"95%"}} type="id" name="id" placeholder="id 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"80%"}} for="password">Password</Label>
                                            <Input onChange={(e) => {this.setState({password:e.target.value})}} style={{width:"95%"}} type="password" name="password" placeholder="password 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"85%"}} >Name</Label>
                                            <Input onChange={(e) => {this.setState({name:e.target.value})}} style={{width:"95%"}} type="name" name="name" placeholder="이름 입력" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"85%"}} >Phone</Label>
                                            <Input onChange={(e) => {this.setState({phone:e.target.value})}} style={{width:"95%"}} type="phone" name="phone" placeholder="010-1111-1111" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{paddingRight:"86%"}} for="email">Email</Label>
                                            <Input onChange={(e) => {this.setState({email:e.target.value})}} style={{width:"95%"}} type="email" name="email" placeholder="Email 입력" />
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
                                    <Button onClick={() => {this.signUp()}} style={{backgroundColor: "#42A5F5", color: "white", marginTop:"3%", marginBottom:"7%" , width:"95%", fontSize:"250%"}}>회원가입</Button>
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