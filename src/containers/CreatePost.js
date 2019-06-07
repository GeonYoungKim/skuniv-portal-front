import React, { Component } from 'react';
import CreatePostForm from '../components/create-post/js/CreatePostForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlag : false
        };
    }

    createPost = (body) => {
        axios
            .post(
                'http://localhost:8080/api/v1/kaggle/stackoverflow/post/question'
                , body
                , {
                    headers: { 'token': localStorage.token }
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    if(response.data['status'] === 80806) {
                        console.log(response.data['status'])
                        this.setState({
                            isFlag:true
                        })
                    } else {
                        alert('포스트가 작성되었습니다.')
                        this.props.history.push('/main');
                    }
                }
            });

    }

    render() {
        let screen = <div></div>
        if(this.state.isFlag) {
            screen = 
            <center>
                <h1 style={{color:"orange", marginTop:"3%"}}>로그인부터 해주세요.</h1>
                <Link to="/signIn">로그인하러 가기</Link>
            </center>
        }
        
        return (
            <main>
                {screen}
                <CreatePostForm createPost={this.createPost} />
            </main>
        );
    }
}

export default CreatePost;