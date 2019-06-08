import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'reactstrap';
import Modal from 'react-modal';

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
            dayOfWeek: [
                '월요일',
                '화요일',
                '수요일',
                '목요일',
                '금요일'
            ],
            dayOfWeekValueList: new Set()
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

    componentDidMount = () => {
        Modal.setAppElement('main');
    }

    createLecture = () => {
        this.setState({
            showModal: false
        })
        this.props.createLecture(this.state.semesterId, this.state);
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

        let dayOfWeekDropMenuScreen =
            <DropdownMenu>
                {this.state.dayOfWeek.map((day =>
                    <DropdownItem key={day}>
                        <div onClick={() => {
                            this.state.dayOfWeekValueList.add(day);
                            let dayOfWeekValue = "";
                            this.state.dayOfWeekValueList.forEach((item) => {
                                dayOfWeekValue = item + "," + dayOfWeekValue;
                            });
                            dayOfWeekValue = dayOfWeekValue.substring(0, dayOfWeekValue.length - 1)
                            this.setState({
                                lectureDay: dayOfWeekValue
                            })
                        }}>
                            {day}
                        </div>
                    </DropdownItem>
                ))}
            </DropdownMenu>


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
                                    <Input onChange={(e) => { this.setState({ lectureTime: e.target.value }) }} type="number" style={{ width: "95%" }} placeholder="강좌시간 입력" />
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{ paddingRight: "85%" }} >Score</Label>
                                    <Input onChange={(e) => { this.setState({ score: e.target.value }) }} type="number" style={{ width: "95%" }} placeholder="강좌 이수 학점 입력" />
                                </FormGroup>
                                <FormGroup>
                                    <Button onClick={() => {this.setState({})}}>추가</Button>
                                </FormGroup>
                                {/* <FormGroup>
                                    <Label style={{ paddingRight: "85%" }} >Day</Label>
                                    <Input style={{ width: "95%" }} placeholder="요일 선택" value={this.state.lectureDay} />
                                    <div style={{ marginTop: "3%" }}>
                                        <Dropdown isOpen={this.state.dayDropdownOpen} toggle={this.dayToggle}>
                                            <DropdownToggle caret>
                                                요일 선택
                                            </DropdownToggle>
                                            {dayOfWeekDropMenuScreen}
                                        </Dropdown >
                                    </div>
                                </FormGroup> */}
                            </Form>
                            <Button onClick={this.createLecture} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "10%", width: "95%", fontSize: "250%", cursor: "pointer" }}>추가</Button>
                        </Modal>
                        <Button onClick={() => { this.setState({ showModal: true }) }} style={{ marginLeft: "3%", cursor: "pointer", backgroundColor: "white" }}>강좌 추가</Button>
                    </div>
                </div>
            </main>
        );
    }
}

export default ProfessorLectureHeader;