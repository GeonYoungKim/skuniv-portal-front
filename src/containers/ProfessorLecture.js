import React, { Component } from 'react';
import moment from 'moment';
import { DateRangePicker, isInclusivelyAfterDay } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import axios from 'axios';

class ProfessorLecture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment()
        };
    }

    componentDidMount = () => {
        console.log(this.state.startDate);
        console.log(this.state.endDate);
        axios
        .post(
            'http://localhost:8080/api/v1/portal/account/test', 
            {
                startDate: this.state.startDate,
                endDate : this.state.endDate
            }, 
            {
                headers: { 'token': localStorage.token }
            }
        )
        .then((response) => {
            if (response.status === 200) {
                console.log(response.data)
            }
        });
    }

    render() {
        return (
            <div style={{ height: "1000px" }}>

                <DateRangePicker
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    isOutsideRange={day => isInclusivelyAfterDay(day, moment().add(1, "days"))}
                />

            </div>
        );
    }
}

export default ProfessorLecture;