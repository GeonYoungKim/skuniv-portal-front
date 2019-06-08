import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import AssignmentHeader from '../components/assignment/js/AssignmentHeader';

class Assignment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lectureId: undefined,
            lectureName: "",
            assignmnetList: []
        };
    }

    getAssignmentList = (lectureId) => {
        axios.get(
            'http://localhost:8080/api/v1/portal/professor/lecture/' + lectureId + '/assignment'
            , {
                headers: {
                    'token': localStorage.Token,
                    'accountType': localStorage.AccountType
                },
                data: {}
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    this.setState({
                        assignmnetList: response.data
                    });
                }
            });
    }

    componentDidMount = () => {
        const lectureId = this.props.match.params.lectureId;
        const lectureName = this.props.match.params.lectureName;
        this.setState({
            lectureName,
            lectureId
        })
        this.getAssignmentList(lectureId);
    }

    typeFormatter = (cell, row) => {
        if (cell === 'ASSIGNMENT') {
            return '과제';
        }
        return '시험';

    }

    dateFormatter = (cell, row) => {
        return new Date(cell).toISOString().substring(0, 10);
    }

    studentFormatter = (cell, row) => {
        return <div>{row['studentList'].length} 명</div>
    }

    createAssignment = (body) => {
        console.log(body);
        console.log(this.state.lectureId);
        axios
            .post(
                'http://localhost:8080/api/v1/portal/professor/lecture/' + this.state.lectureId + '/assignment'
                , body
                , {
                    headers: {
                        'token': localStorage.Token,
                        'accountType': localStorage.AccountType
                    },
                    data: {}
                }).then((response) => {
                    if (response.status === 200) {
                        console.log(response.data)
                        this.getAssignmentList(this.state.lectureId);
                    }
                });
    }

    toAssignmentDetail = (id, name) => {
        this.props.history.push('/lecture/assignment-student/' + id + "/" + name);
    }

    options = {
        onRowClick: (row) => {
            this.toAssignmentDetail(row['id'], row['name']);
        }
    }

    render() {
        return (
            <div>
                <AssignmentHeader lectureName={this.state.lectureName} createAssignment={this.createAssignment} />
                <BootstrapTable
                    data={this.state.assignmnetList}
                    hover={true}
                    search
                    pagination
                    scrollTop={'Right'}
                    options={this.options}
                    >
                    <TableHeaderColumn hidden width="80" dataAlign='center' dataField='id' isKey={true}>Id</TableHeaderColumn>
                    <TableHeaderColumn width="150" dataAlign='center' dataField='name' >과제명</TableHeaderColumn>
                    <TableHeaderColumn width="100" dataAlign='center' dataField='startDate' dataFormat={this.dateFormatter} >시작일자</TableHeaderColumn>
                    <TableHeaderColumn width="100" dataAlign='center' dataField='endDate' dataFormat={this.dateFormatter}>종료일자</TableHeaderColumn>
                    <TableHeaderColumn width="80" dataAlign='center' dataField='type' dataFormat={this.typeFormatter}>타입</TableHeaderColumn>
                    <TableHeaderColumn width="80" dataAlign='center' dataFormat={this.studentFormatter}>총 학생수</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default Assignment;