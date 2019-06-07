import React, { Component } from 'react';

class SuggestList extends Component {
    render() {
        console.log(this.props.suggestList);
        let suggestList = this.props.suggestList;
        let screen;
        if (suggestList.length === 0) {
            screen = <div></div>
        } else {
            screen =
                <div className="row" style={{ marginLeft: "10%" }}>
                    <div className="col-12 form-inline">
                        <h5 style={{ color: "orange", marginRight: "1%" }}>이것을 찾으셨나요?</h5>
                        {suggestList.map((suggest) =>
                            <h6 onClick={() => this.props.search(1,suggest)} style={{ color: "blue", marginRight: "2%" }} key={suggest}>{suggest}</h6>
                        )}
                    </div>
                </div>
        }

        return (
            <div>
                {screen}
            </div>
        );
    }
}

export default SuggestList;