import React, { Component } from 'react';
import ProfessorLectureHeader from '../components/professor-lecture/js/ProfessorLectureHeader';
import ProfessorLectureForm from '../components/professor-lecture/js/ProfessorLectureForm';

class ProfessorLecture extends Component {
    
    render() {
        return (
            <main>
                   <ProfessorLectureHeader/>
                   <ProfessorLectureForm/>
            </main>
        );
    }
}

export default Main;