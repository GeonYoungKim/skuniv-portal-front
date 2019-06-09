import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Button } from 'reactstrap';
import Modal from 'react-modal';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class AssignmentHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: props.autoFocus,
            showModal: false,
            dropdownOpen: false,
            name: "",
            type: "ASSIGNMENT",
            startDate: moment(),
            endDate: moment(),
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

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        let datePicker;
        if (this.state.type === 'ASSIGNMENT') {
            datePicker = <DateRangePicker
                startDateId="startDateId"
                endDateId="endDateId"
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                focusedInput={this.state.focusedInput}
                onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
        } else {
            datePicker =
                <SingleDatePicker
                    date={this.state.startDate} 
                    onDateChange={date => this.setState({ startDate:date})} 
                    focused={this.state.focused} 
                    onFocusChange={({ focused }) => this.setState({ focused })} 
                />
        }

        return (
            <main style={{ height: "200px" }}>
                <div style={{ height: "100%", backgroundColor: "#1abc9c", paddingTop: "3%", paddingBottom: "3%" }}>
                    <div className="form-inline">
                        <div style={{ fontWeight: "bold", marginLeft: "5%", fontSize: "35px", fontWeight: "bold" }}>{this.props.lectureName} 강좌</div>
                        <Modal
                            isOpen={this.state.showModal}
                            style={this.customStyles}>
                            <Form style={{ marginTop: "3%" }}>
                                <FormGroup>
                                    <Label style={{ paddingRight: "90%" }} >Name</Label>
                                    <Input onChange={(e) => { this.setState({ name: e.target.value }) }} style={{ width: "95%" }} placeholder="과제명 입력" />
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{ paddingRight: "80%" }} >Date</Label>
                                    {datePicker}
                                </FormGroup>
                                <FormGroup>
                                    <Label style={{ paddingRight: "85%" }}>Type</Label>
                                    <div style={{ marginTop: "3%" }}>
                                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                            <DropdownToggle caret>
                                                {this.state.type}
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem ><div onClick={() => { this.setState({ type: 'ASSIGNMENT' }) }}>ASSIGNMENT</div></DropdownItem>
                                                <DropdownItem ><div onClick={() => { this.setState({ type: 'EXAM' }) }}>EXAM</div></DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown >
                                    </div>
                                </FormGroup>
                            </Form>
                            <Button onClick={() => { this.setState({showModal: false}); this.props.createAssignment(this.state) }} style={{ backgroundColor: "#42A5F5", color: "white", marginTop: "10%", width: "95%", fontSize: "250%", cursor: "pointer" }}>추가</Button>
                            <center><Button onClick={() => {this.setState({showModal: false})}} style={{marginTop: "3%", width: "20%", fontSize: "100%", cursor: "pointer"}}>취소</Button></center>
                        </Modal>
                        <Button onClick={() => { this.setState({ showModal: true }) }} style={{ marginLeft: "65%", cursor: "pointer", backgroundColor: "white" }}>과제 추가</Button>
                    </div>
                </div>
            </main>
        );
    }
}

export default AssignmentHeader;