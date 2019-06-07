import React, { Component } from 'react';
import SuggestList from '../js/SuggestList';
import SearchList from '../js/SearchList';

class SuggestForm extends Component {
    render() {
        return (
            <div>
                <SuggestList suggestList={this.props.suggestList} search={this.props.search}/>
                <SearchList questionList={this.props.questionList}/>
            </div>
        );
    }
}

export default SuggestForm;