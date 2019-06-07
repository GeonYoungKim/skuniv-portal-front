import React, { Component } from 'react';
import { Card,  Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreatePostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:"",
            body:""
        };
    }

    handleChange = (e) => {
        var stateField = e.target.name;
        if (stateField === "title") {
            this.setState({
                title: e.target.value
            })
        } else if (stateField === "body") {
            this.setState({
                body: e.target.value
            })
        }
    }

    render() {
        return (
            <center>
                <div className="main-wrap">
                    <div style={{ marginTop: "10%", marginLeft: "25%" }}>
                        <Row>
                            <Col sm="8">
                                <Card body>
                                    <h1 style={{ color: "orange", marginTop: "3%" }}>질문 포스트 작성</h1>
                                    <Form style={{ marginTop: "3%" }}>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "90%" }} for="title">Title</Label>
                                            <Input onChange={this.handleChange} style={{cols:"300", height:"50px", width:"95%"}} type="textarea" name="title"  placeholder="Title 입력"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "90%" }} for="body">Body</Label>
                                            <Input onChange={this.handleChange} style={{cols:"300", height:"500px", width:"95%"}} type="textarea" name="body"  placeholder="Body 입력"/>
                                        </FormGroup>
                                    </Form>
                                    <Button onClick={() => { this.props.createPost(this.state)}} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "3%", marginBottom: "5%", width: "95%", fontSize: "250%" }}>작성</Button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </center>
        );
    }
}

export default CreatePostForm;