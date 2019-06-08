import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import LectureDetailHeader from '../components/lecture-detail/js/LectureDetailHeader';

class LectureDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lectureDetailList: []
        };
    }

    componentDidMount = () => {
        const lectureId = this.props.match.params.lectureId;
        console.log(lectureId);
        axios.get(
            'http://localhost:8080/api/v1/portal/professor/lecture/' + lectureId
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
                        lectureDetailList: response.data
                    });
                }
            });
    }

    dayFormatter = (cell, row) => {
        return cell + "요일";
    }

    timeFormatter = (cell, row) => {
        return cell + "시간";
    }

    dateFormatter = (cell, row) => {
        return new Date(cell).toISOString().substring(0, 10);
    }

    updateLectureDetailCanceled = (lectureDetailId) => {
        axios({
            url: 'http://localhost:8080/api/v1/portal/professor/lecture/detail/' + lectureDetailId,
            method: 'PUT',
            headers : {
                'token': localStorage.Token,
                'accountType': localStorage.AccountType
            },
            data:{}
        }).then((response) => {
            if (response.status === 200) {
                let itemList = this.state.lectureDetailList.slice();
                itemList.some((lectureDetail) => {
                    if(lectureDetail['id'] === lectureDetailId) {
                        lectureDetail['canceled'] = !lectureDetail['canceled'];
                        return true;
                    }
                });
                this.setState({
                    lectureDetailList:itemList
                })
                
            }
        });
    }

    canceledFormatter = (cell, row) => {
        if(cell === false) {
            return <button onClick={() => {this.updateLectureDetailCanceled(row['id'])}}>X</button>
        }
        return <button onClick={() => {this.updateLectureDetailCanceled(row['id'])}}>O</button>
    }

    render() {
        return (
            <div>
                <LectureDetailHeader />
                <BootstrapTable
                    data={this.state.lectureDetailList}
                    hover={true}
                    search
                    pagination
                    scrollTop={'Right'}
                >
                    <TableHeaderColumn hidden width="80" dataAlign='center' dataField='id' isKey={true}>Id</TableHeaderColumn>
                    <TableHeaderColumn width="150" dataAlign='center' dataField='lectureDate' dataFormat={this.dateFormatter}>상세날짜</TableHeaderColumn>
                    <TableHeaderColumn width="200" dataAlign='center' dataField='lectureDay' dataFormat={this.dayFormatter} >상세요일</TableHeaderColumn>
                    <TableHeaderColumn width="80" dataAlign='center' dataField='lectureDetailTime' dataFormat={this.timeFormatter}>상세시간</TableHeaderColumn>
                    <TableHeaderColumn width="80" dataAlign='center' dataField='canceled' dataFormat={this.canceledFormatter}>휴강</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default LectureDetail;