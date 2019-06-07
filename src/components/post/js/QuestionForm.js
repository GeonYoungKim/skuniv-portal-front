import React, { Component } from 'react';
import { ButtonGroup, CardBody } from 'reactstrap';
import {Label, Input} from 'reactstrap';
import upImage from '../../../img/up.PNG';
import downImage from '../../../img/down.PNG';

class QuestionForm extends Component {

    render() {
        let question = this.props.question
        let screen;
        if (question === undefined) {
            screen = <div></div>
        } else {
            let tags = this.props.question['tags'];
            let tagScreen;
            if (tags === undefined || tags.length === 0) {
                tagScreen = <div></div>
            } else {
                tagScreen =
                    <div className="row" style={{ marginBottom: "2%", marginTop: "2%" }}>
                        <div className="col-12">
                            {tags.split(",").map((tag) =>
                                <ButtonGroup key={tag} className="mr-2" style={{ height: "35px" }}>
                                    <button style={{ borderRadius: "10px", backgroundColor: "#B2EBF2", color: "#00838F" }}>
                                        <center>{tag}</center>
                                    </button>
                                </ButtonGroup>
                            )}
                        </div>
                    </div>
            }

            let commentScreen = <div></div>;
            console.log(this.props.question['commentList']);

            if (this.props.question['commentList'] !== undefined) {
                let commentList = this.props.question['commentList'];
                commentScreen =
                <div>
                    <div>
                        {
                            commentList.map((comment) =>
                                <div key={{ comment }} style={{ marginLeft: "2%" }}>
                                    <hr></hr>
                                    <font style={{ size: "-20%", color: "gray" }}> {comment['body']} - {comment['account']['displayName']} - {comment['createDate']}</font>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            }

            let accountScreen = <div></div>;
            console.log(this.props.question['account']);
            let profileImageUrl;

            if (this.props.question['account'] !== undefined) {
                if (this.props.question['account']['profileImageUrl'] == undefined || this.props.question['account']['profileImageUrl'] == "" || this.props.question['account']['profileImageUrl'] ===null) {
                    profileImageUrl = "http://download.seaicons.com/icons/iconsmind/outline/512/Talk-Man-icon.png";
                } else {
                    profileImageUrl = this.props.question['account']['profileImageUrl'];
                }

                let account = this.props.question['account'];
                accountScreen =
                    <div key={{ account }} style={{ borderRadius: "10px", backgroundColor: "#B2EBF2", width: "220px", height: "100px", marginTop: "2%", marginRight: "2%", float: "right", textAlign: "right" }}>
                        <div>
                            <font style={{ size: "2", marginRight: "3%" }}> asked {this.props.question['createDate']}</font><br />
                            <table>
                                <tbody>
                                <tr>
                                    <td rowSpan="2">
                                        <img src={profileImageUrl} style={{ width: "65px", marginLeft: "10%" }} />
                                    </td>
                                    <td>
                                        <div style={{ marginLeft: "15%" }}><font style={{ size: "1" }}>{this.props.question['account']['displayName']}</font></div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            }

            screen =
                <div>
                    <h2>{this.props.question['title']}</h2>
                    <table cellPadding="15%">
                        <tbody>
                        <tr>
                            <td>
                                <CardBody>
                                    <img src={upImage} style={{ "cursor": "pointer" }} />
                                    <div style={{ textAlign: "center", float: "center", margin: "auto" }}><h4>{this.props.question['score']}</h4></div>
                                    <img src={downImage} style={{ "cursor": "pointer" }} />
                                </CardBody>
                            </td>
                            <td>
                                <div style={{width:"95%"}}><h6 dangerouslySetInnerHTML={{ __html: this.props.question['body'] }}></h6></div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div style={{ marginLeft: "2%", marginBottom: "13%" }}>
                        {tagScreen}
                        {accountScreen}
                    </div>
                    <div>
                        {commentScreen}
                    </div>
                </div>
        }
        return (
            <div>
                {screen}
            </div>
        )
    }
}

export default QuestionForm;
