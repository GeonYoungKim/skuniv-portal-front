import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

class SearchList extends Component {
   
    makeLink = (post) => {
        const postId = post['id'];
        const title = post['title'];
        let linkUri = '/post/' + postId;
        return <Link to={linkUri} style={{ color: "#1565C0"}}>{title}</Link>
    }

    render() {
        let questionList = this.props.questionList;
        let screen =
            <div style={{marginBottom:"5%"}}>
                {questionList.map((post) => 
                    <Row style={{ marginLeft: "10%", marginTop: "2%" }} key={post['id']}>
                        <Col sm="6">
                            <Card body style={{ border: "0" }}>
                                <CardTitle>{this.makeLink(post)}</CardTitle>
                                <CardText>{post['createDate']} - {post['body']}</CardText>
                            </Card>
                        </Col>
                    </Row>)}
            </div>

        return (
            // title, body(date - body 200 까지만.)
            <div>
                {screen}
            </div>
        )

    }
}

export default SearchList;
