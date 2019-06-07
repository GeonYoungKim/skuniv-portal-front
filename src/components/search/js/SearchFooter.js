import React, { Component } from 'react';

class SearchFooter extends Component {

    render() {
        const content = this.props.content;
        const start = Number(this.props.pageNo);
        let footer;
        if (start !== 1) {
            footer =

                <div className="row" style={{ marginLeft: "20%" }}>
                    <div className="col-12 form-inline">
                            <div onClick={() => this.props.search(start-1, content)} style={{ marginRight: "5%", cursor:"pointer" }}>이전</div>
                            <div style={{ marginRight: "5%", color:"blue" }}>{start}</div>
                            <div onClick={() => this.props.search(start+1, content)} style={{cursor:"pointer"}}>다음</div>
                    </div>
                </div>
        } else {

            footer =
                <div className="row" style={{ marginLeft: "20%" }}>
                    <div className="col-12 form-inline">
                            <div style={{ marginRight: "5%", color:"blue" }}>{start}</div>
                            <div onClick={() => this.props.search(start+1, content)} style={{cursor:"pointer"}}>다음</div>
                    </div>
                </div>
        }
        // let pageList = []
        // pageList.push(<h5 style={{color:"black",marginRight:"1%"}}>{start}</h5>);
        // for (var i = start+1; i < start + 9; i++) {
        //     let index = i;
        //     pageList.push(<h5 onClick={() => this.props.search(index, content)} style={{cursor:"pointer", color:"blue",marginRight:"1%"}}>{i}</h5>);
        // }


        return (
            <div style={{ marginLeft: "10%", marginBottom: "5%" }}>
                {footer}
            </div>
        );
    }
}


export default SearchFooter;