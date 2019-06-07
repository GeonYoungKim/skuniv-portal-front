import React, { Component } from 'react';
import QuestionForm from './QuestionForm';
import AnswerForm from './AnswerForm';

class PostForm extends Component {

    render() {
        console.log(this.props.post['question']);
        console.log(this.props.post['answerList']);
        let screen;

        if (this.props.post['question'] !== undefined && this.props.post['answerList'] === undefined) {
            // console.log(this.props.post['answerList'].size);
            screen =
                <div>
                    <QuestionForm question={this.props.post['question']} />
                </div>
        } else if (this.props.post['question'] !== undefined && this.props.post['answerList'] !== undefined) {
            screen =
                <div>
                    <QuestionForm question={this.props.post['question']} />
                    <h4 style={{marginBottom:"3.5%", marginTop:"3.5%"}}> {this.props.post['answerList'].length} Answers</h4>
                    <hr></hr>
                    <AnswerForm answerList={this.props.post['answerList']} createAnswerPost={this.props.createAnswerPost} parentId={this.props.post['question']['id']}/>
                </div>
        }``


        return (
            <div style={{ marginLeft: "10%", marginTop: "2%" }}>
                {screen}
            </div>
        )
    }
}

export default PostForm;
