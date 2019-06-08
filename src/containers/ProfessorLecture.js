import React, { Component } from 'react';
import 'react-dates/lib/css/_datepicker.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ProfessorLectureHeader from '../components/professor-lecture/js/ProfessorLectureHeader';

class ProfessorLecture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            semesterList: [],
            semesterId: 1,
            dropdownOpen: false,
            lectureList : []
        };
    }

    getLecutreList = (semesterId, semesterList) => {
        const token = localStorage.Token;
        const accountType = localStorage.AccountType;
        console.log(token);
        console.log(accountType);
        axios.get(
            'http://localhost:8080/api/v1/portal/professor/semester/' + semesterId + '/lecture'
            , {
                headers: {
                    'token': localStorage.Token,
                    'accountType': localStorage.AccountType
                },
                data: {}
            }
        ).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                this.setState({
                    semesterList,
                    lectureList : response.data
                })
            }
        }).catch((response) => {
            alert('로그인을 다시 해주세요.');
            localStorage.removeItem('Token');
            localStorage.removeItem('AccountType');
            this.props.history.push('/signIn');
        });
    }

    componentDidMount = () => {
        axios({
            url: 'http://localhost:8080/api/v1/portal/semester/',
            method: 'GET'
        }).then((response) => {
            if (response.status === 200) {
                console.log(response.data)
                const semesterList = response.data;
                const semesterId = response.data[0]['id'];
                this.getLecutreList(semesterId, semesterList);
            }
        });
    }

    createLecture(semesterId, body) {
        axios
            .post(
                'http://localhost:8080/api/v1/portal/professor/semester/' + semesterId + '/lecture'
                , body
                , {
                    headers: {
                        'token': localStorage.Token,
                        'accountType': localStorage.AccountType
                    },
                    data: {}
                }
            )
            .then((response) => {
                if (response.status === 200) {
                    window.location.reload();

                }
            });
    }

    toLectureDetail = (lectureId) => {
        this.props.history.push('/lecture/detail/'+lectureId);
    }

    options = {
        onRowClick : (row) => {
            this.toLectureDetail(row['id']);
        }
    }

    toLectureAssignment = (e, row) => {
        e.stopPropagation();
        this.props.history.push('/lecture/assignment/' + row['id'] + "/" + row['name']);
    }

    assignmentFormatter = (cell, row) => {
        return <button onClick={(e) => {this.toLectureAssignment(e, row)}}>{row['assignmentList'].length} 개</button>;
    }

    render() {
        
        return (
            <main>
                <ProfessorLectureHeader semesterList={this.state.semesterList} createLecture={this.createLecture} />
                <BootstrapTable
                    data={this.state.lectureList}
                    hover={true}
                    search
                    pagination
                    scrollTop={'Right'}
                    options={this.options}
                    >
                    <TableHeaderColumn hidden width="80" dataAlign='center' dataField='id' isKey={true}>Id</TableHeaderColumn>
                    <TableHeaderColumn width="200" dataAlign='center' dataField='name' >강좌명</TableHeaderColumn>
                    <TableHeaderColumn width="80" dataAlign='center' dataField='lectureDay' >강좌요일</TableHeaderColumn>
                    <TableHeaderColumn width="150" dataAlign='center' dataField='lectureTime' >강좌시간</TableHeaderColumn>
                    <TableHeaderColumn width="150" dataAlign='center' dataField='score' >학점</TableHeaderColumn>
                    <TableHeaderColumn width="150" dataAlign='center' dataFormat={this.assignmentFormatter} >과제</TableHeaderColumn>
                </BootstrapTable>
            </main>
        );
    }
}

export default ProfessorLecture;