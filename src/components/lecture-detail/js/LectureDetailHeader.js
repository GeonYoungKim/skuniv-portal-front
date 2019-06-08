import React, { Component } from 'react';

class LectureDetailHeader extends Component {


  render() {

    return (
      <main style={{ height: "200px" }}>
        <div style={{ height: "100%", backgroundColor: "#1abc9c", paddingTop: "3%", paddingBottom: "3%" }}>
          <div className="form-inline">
            <div style={{ fontWeight: "bold", marginLeft: "5%", fontSize: "35px", fontWeight: "bold" }}>{localStorage.Name}님</div>
          </div>
        </div>
      </main>
    );
  }
}

export default LectureDetailHeader;