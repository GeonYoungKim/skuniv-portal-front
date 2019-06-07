import React, { Component } from 'react';
import { Input, Button, ButtonGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

class SearchHeader extends Component {

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    keyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.search(1, this.state.content);
        }
    }



    render() {
        let button;
        if (localStorage.token === undefined) {
            button =
                <ButtonGroup>
                    <Button style={{ backgroundColor: "#42A5F5", color: "white"}}>
                        <Link to="/signIn" style={{ color: "white", fontWeight: "bold", }}>로그인</Link>
                    </Button>
                </ButtonGroup>
        } else {
            button =
                <ButtonGroup>
                    <Button style={{ backgroundColor: "#42A5F5", color: "white"}}>
                        <Link to="/createPost/question" style={{ color: "white", fontWeight: "bold", }}>질문 포스트</Link>
                    </Button>
                    <Button onClick={() => this.props.logout()} style={{ backgroundColor: "#42A5F5", color: "white", fontWeight:"bold", marginLeft:"2%"}}>
                        로그아웃
                    </Button>
                </ButtonGroup>
        }
        return (
            <div className="row" style={{ marginTop: "1.5%", marginLeft: "1%" }}>
                <div className="col-12 form-inline">
                    <h4 onClick={() => this.props.toMain()} style={{ color: "orange", cursor:"pointer" }}>Stack Overflow</h4>
                    <Input onKeyDown={this.keyDown} onChange={this.handleChange} style={{ marginLeft: "2%", width: "35%" }} placeholder={this.props.content} />
                    <div style={{marginLeft:"30%"}}></div>
                    {button}
                </div>
            </div>
        )

    }
}

export default SearchHeader;
