import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import AssignmentStudentHeader from '../components/assignment-student/js/AssignmentStudentHeader';

class AssignmentStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assignmnetStudentList: []
        };
    }

    componentDidMount = () => {
        const assignmentId = this.props.match.params.assignmentId;
        const assignmentName = this.props.match.params.assignmentName;
        this.setState({assignmentName})

        axios.get(
            'http://localhost:9090/api/v1/portal/professor/lecture/assignment/' + assignmentId
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
                        assignmnetStudentList: response.data
                    });
                }
            });
        

    }


    render() {
        return (
            <div>
                <AssignmentStudentHeader assignmentName={this.state.assignmentName}/>
                <BootstrapTable
                    data={this.state.assignmnetStudentList}
                    hover={true}
                    search
                    pagination
                    scrollTop={'Right'}
                    options={this.options}
                    >
                    <TableHeaderColumn width="150" dataAlign='center' dataField='name' isKey={true}>학생 이름</TableHeaderColumn>
                    <TableHeaderColumn width="200" dataAlign='center' dataField='part' >과제 담당 역할</TableHeaderColumn>
                    <TableHeaderColumn width="200" dataAlign='center' dataField='phone'>핸드폰번호</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default AssignmentStudent;