import React, { Component } from 'react';
import axios from 'axios';
import ProfessorLectureHeader from '../components/professor-lecture/js/ProfessorLectureHeader';
import ProfessorLectureDetailForm from '../components/professor-lecture/js/ProfessorLectureDetailForm';

class ProfessorLectureDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            lectureId : {}
        };
    }

    // componentDidMount = () => {
    //     const postId = (this.props.match.params.postId === undefined) ? "" : this.props.match.params.postId;
    //     axios({
    //         url: 'http://localhost:8080/api/v1/kaggle/stackoverflow/post/' + postId,
    //         method: 'GET'
    //     }).then((response) => {
    //         if (response.status === 200) {
    //             console.log(response.data)
    //             this.setState({
    //                 lectureId : response.data
    //             });
    //         }
    //     });
    // }

    render() {console.log("ww")
        return (
            <main>
                <ProfessorLectureHeader/>
                <ProfessorLectureDetailForm lectureId={this.state.lectureId}/>
            </main>
        );
    }
}

export default ProfessorLectureDetail;