import React, { Component } from 'react';
import axios from 'axios';
import SearchHeader from '../components/search/js/SearchHeader';
import PostForm from '../components/post/js/PostForm';
import { Link } from 'react-router-dom';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post : {}
        };
    }

    search = (pageNo, content) => {
        var path = '/search/' + pageNo + '/' + content
        this.props.history.push(path);
    }

    componentDidMount = () => {
        const postId = (this.props.match.params.postId === undefined) ? "" : this.props.match.params.postId;
        axios({
            url: 'http://localhost:8080/api/v1/kaggle/stackoverflow/post/' + postId,
            method: 'GET'
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                this.setState({
                    post : response.data
                });
            }
        });
    }

    createAnswerPost = (body) => {
        console.log(body)
        axios
            .post(
                'http://localhost:8080/api/v1/kaggle/stackoverflow/post/answer'
                , body
                , {
                    headers: { 'token': localStorage.token }
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    if(response.data['status'] === 80806) {
                        alert('로그인부터 해주세요.')
                    } else {
                        alert('포스트가 작성되었습니다.')
                        this.props.history.push('/main');
                    }
                }
            });
    }

    toMain = () => {
        this.props.history.push('/main')
    }

    logout = () => {
        localStorage.removeItem('token');
        this.toMain();
    }

    render() {
        return (
            <main>
                <SearchHeader search={this.search} logout={this.logout} toMain={this.toMain}/>
                <PostForm post={this.state.post} createAnswerPost={this.createAnswerPost}/>
            </main>
        );
    }
}


export default Post;