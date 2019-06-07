import React, { Component } from 'react';
import axios from 'axios';
import SearchHeader from '../components/search/js/SearchHeader';
import SearchForm from '../components/search/js/SearchForm';
import SearchFooter from '../components/search/js/SearchFooter';
import NoSearchResult from '../components/search/js/NoSearchResult';
import WaitSearchResult from '../components/search/js/WaitSearchResult';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            suggestList: [],
            content: "",
            pageNo: 1,
            searchPageType: 1 // 1: 검색 중, 2 : 검색 완료, 3: 검색 결과 없음
        };
    }

    componentDidMount = () => {
        const pageNo = (this.props.match.params.pageNo === undefined) ? 1 : this.props.match.params.pageNo;
        const content = (this.props.match.params.content === undefined) ? "" : this.props.match.params.content;
        this.search(pageNo, content);
    }

    search = (pageNo, content) => {
        this.setState({
            searchPageType : 1
        })

        axios({
            url: 'http://localhost:8080/api/v1/kaggle/stackoverflow/post/search/' + pageNo,
            params: {
                content: content
            },
            method: 'GET'
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                if(response.data['questionList'].length > 0) {
                    this.setState({
                        questionList: response.data['questionList'],
                        suggestList: response.data['suggestList'],
                        content: content,
                        pageNo: pageNo,
                        searchPageType: 2
                    });
                } else {
                    this.setState({
                        searchPageType : 3
                    })
                }
            }
        });
    }

    toMain = () => {
        console.log('toMain');
        this.props.history.push('/main')
    }

    logout = () => {
        localStorage.removeItem('token');
        this.toMain();
    }


    render() {
        let screen;
        if (this.state.searchPageType === 1) {
            screen = <WaitSearchResult/>
        } else if(this.state.searchPageType === 2) {
            screen =
                <div>
                    <main>
                        <SearchHeader search={this.search} content={this.state.content} logout={this.logout} toMain={this.toMain}/>
                        <hr />
                        <SearchForm questionList={this.state.questionList} suggestList={this.state.suggestList} search={this.search} />
                        <SearchFooter pageNo={this.state.pageNo} searchAfter={this.state.searchAfter} content={this.state.content} search={this.search} />
                    </main>
                </div>
        } else if(this.state.searchPageType === 3){
            screen =
                <div>
                    <SearchHeader search={this.search} content={this.state.content} toMain={this.toMain}/>
                    <hr />
                    <NoSearchResult/>
                </div>
        }

        return (
            <main>
                {screen}
            </main>
            
        );
    }
}


export default Search;