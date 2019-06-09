import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'reactstrap';
import Modal from 'react-modal';
import { Timepicker } from 'react-timepicker';
import 'react-timepicker/timepicker.css';

class ProfessorLectureHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            dayDropdownOpen: false,
            semesterId: 1,
            showModal: false,
            lectureDayShowModal: false,
            name: "",
            score: "",
            lectureTime: "",
            lectureDay: "",
            startTime: "00:00",
            detailTime: 0,
            dayOfWeek: [
                '월요일',
                '화요일',
                '수요일',
                '목요일',
                '금요일'
            ],
            lectureDayList: []
        };
    }

    customStyles = {
        content: {
            top: '10%',
            left: '30%',
            right: '30%',
            bottom: '10%'
        }
    }

    lectureDayModalCustomStyles = {
        content: {
            top: '15%',
            left: '30%',
            right: '30%',
            bottom: '15%'
        }
    }

    componentDidMount = () => {
        Modal.setAppElement('main');
    }

    createLecture = () => {
        let lectureDetailTimeSum = 0;
        this.state.lectureDayList.map((lectureDay) => {lectureDetailTimeSum += lectureDay['detailTime']});
        if(lectureDetailTimeSum !== this.state.lectureTime) {
            alert("강좌시간과 수업시간의 총합이 같아야 합니다.");
        } else {
            this.props.createLecture(this.state.semesterId, this.state);
            this.setState({showModal: false});
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    dayToggle = () => {
        this.setState(prevState => ({
            dayDropdownOpen: !prevState.dayDropdownOpen
        }));
    }

    createLectureDay = () => {

        const lectureDay =
        {
            "lectureDay": this.state.lectureDay.replace('요일',''),
            "startTime": this.state.startTime,
            "detailTime": this.state.detailTime
        }


        let lectureDayList = this.state.lectureDayList.slice();
        lectureDayList.push(lectureDay);
        this.setState({
            lectureDay: "",
            startTime: "00:00",
            detailTime: 0,
            lectureDayList,
            lectureDayShowModal: false
        });
    }

    render() {
        let dropMenuScreen =
            <DropdownMenu>
                {this.props.semesterList.map((semester =>
                    <DropdownItem key={semester['id']}>
                        <div onClick={() => this.setState({ semesterId: semester['id'] })}>
                            {semester['name']}
                        </div>
                    </DropdownItem>
                ))}
            </DropdownMenu>

        let lectureDayToggleValue = (this.state.lectureDay === "") ? "요일 선택" : this.state.lectureDay;

        let dayOfWeekDropMenuScreen =
            <DropdownMenu>
                {this.state.dayOfWeek.map((day =>
                    <DropdownItem key={day}>
                        <div onClick={() => { this.setState({ lectureDay: day }) }}>
                            {day}
                        </div>
                    </DropdownItem>
                ))}
            </DropdownMenu>

        let lectureDayListScreen =
            <FormGroup>
                    {this.state.lectureDayList.map((lectureDay) => 
                        <div className="col-12 form-inline">
                            <Label>요일 = {lectureDay['lectureDay']}</Label>
                            <Label style={{marginLeft:"3%"}}> / 시작시간 = {lectureDay['startTime']}</Label>
                            <Label style={{marginLeft:"3%"}}> / 수업시간 = {lectureDay['detailTime']}</Label>
                        </div>
                    )}
            </FormGroup>
        return (
            <main style={{ height: "200px" }}>
                <div style={{ height: "100%", backgroundColor: "#1abc9c", paddingTop: "3%", paddingBottom: "3%" }}>
                    <div className="form-inline">
                        <div style={{ fontWeight: "bold", marginLeft: "5%", fontSize: "35px", fontWeight: "bold" }}>{localStorage.Name}님</div>
                        <div style={{ marginLeft: "60%", backgroundColor: "white" }} >
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    {this.state.semesterId} 학기
                                </DropdownToggle>
                                {dropMenuScreen}
                            </Dropdown >
                        </div>
                        <Modal
                            isOpen={this.state.showModal}
                            style={this.customStyles}>
                            <Form style={{ marginTop: "3%" }}>
                                <FormGroup>
                                    <Label style={{ paddingRight: "90%" }} >Name</Label>
                                    <Input onChange={(e) => { this.setState({ name: e.target.value }) }} style={{ width: "95%" }} placeholder="강좌명 입력" />
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{ paddingRight: "80%" }} >LectureTime</Label>
                                    <Input onChange={(e) => { this.setState({ lectureTime: (e.target.value)*1 }) }} type="number" style={{ width: "95%" }} placeholder="강좌시간 입력" />
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{ paddingRight: "85%" }} >Score</Label>
                                    <Input onChange={(e) => { this.setState({ score: e.target.value }) }} type="number" style={{ width: "95%" }} placeholder="강좌 이수 학점 입력" />
                                </FormGroup>
                                {lectureDayListScreen}
                                <FormGroup>
                                    <Button onClick={() => { this.setState({ lectureDayShowModal: true }) }} style={{ cursor: "pointer" }}>강좌 요일 추가</Button>
                                </FormGroup>
                                <Modal
                                    isOpen={this.state.lectureDayShowModal}
                                    style={this.lectureDayModalCustomStyles}>
                                    <Form style={{ marginTop: "3%" }}>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "90%" }} >day</Label>
                                            <div style={{ marginTop: "3%" }}>
                                                <Dropdown isOpen={this.state.dayDropdownOpen} toggle={this.dayToggle}>
                                                    <DropdownToggle caret>
                                                        {lectureDayToggleValue}
                                                    </DropdownToggle>
                                                    {dayOfWeekDropMenuScreen}
                                                </Dropdown >
                                            </div>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "80%" }} >Start Time</Label>
                                            <Timepicker onChange={(hours, minutes) => {
                                                const startTime = hours + ':' + minutes;
                                                this.setState({ startTime });
                                            }} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label style={{ paddingRight: "85%" }} >Detail Time</Label>
                                            <Input onChange={(e) => { this.setState({ detailTime: (e.target.value)*1 }) }} type="number" style={{ width: "70%" }} placeholder="지정요일의 수업 시간" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Button onClick={this.createLectureDay} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "10%", width: "50%", fontSize: "150%", cursor: "pointer" }}>추가</Button>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button onClick={() => { this.setState({ lectureDayShowModal: false }) }} style={{ marginTop: "3%", width: "25%", fontSize: "75%", cursor: "pointer" }}>취소</Button>
                                        </FormGroup>
                                    </Form>
                                </Modal>
                            </Form>
                            <Button onClick={this.createLecture} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "10%", width: "95%", fontSize: "250%", cursor: "pointer" }}>추가</Button>
                            <center><Button onClick={() => { this.setState({ showModal: false }) }} style={{ marginTop: "3%", width: "20%", fontSize: "100%", cursor: "pointer" }}>취소</Button></center>
                        </Modal>
                        <Button onClick={() => { this.setState({ showModal: true }) }} style={{ marginLeft: "3%", cursor: "pointer", backgroundColor: "white" }}>강좌 추가</Button>
                    </div>
                </div>
            </main>
        );
    }
}

export default ProfessorLectureHeader;