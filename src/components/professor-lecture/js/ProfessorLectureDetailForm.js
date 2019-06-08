import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class ProfessorLectureDetailForm extends Component {
    

      render() {
        console.log(this.props.lectureId);

        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default ProfessorLectureDetailForm;