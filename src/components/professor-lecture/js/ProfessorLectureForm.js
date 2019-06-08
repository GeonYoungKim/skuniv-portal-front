import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class ProfessorLectureForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }

    // handleChange = (event) => {
    //     this.setState({value: event.target.value});
    // }

    // handleSubmit = (event) => {
    // alert('A name was submitted: ' + this.state.value);
    // event.preventDefault();
    // }

    render() {

        let screen;

        screen = 
        <div class="list-group">
            <div class="list-group-item">
                <div className="col-12 form-inline">
                    
                    <form onSubmit={this.handleSubmit}>
                        
                        <div style={{marginLeft:"1%"}} value={this.state.value} onChange={this.handleChange}>
                            강좌명/ 강좌 요일/ 강좌 시간/ 학점 
                        </div>

                        <input type="submit" value="Submit"
                         style={{borderRadius:"1em", borderColor:"white",alignContent:"right",fontWeight: "bold", backgroundColor:"#1abc9c", marginLeft:"3%"}}/>
                    </form>
                </div>
            </div>
        </div>
        

        return (
            <main>
                <div>
                    <br/>
                    <div style={{textAlign:"center"}}>
                        <Button style={{width:"80%",backgroundColor: "#474e5d", color: "white",borderRadius:"3em", fontWeight: "bold"}}> 강좌 추가</Button>
                    </div>
                    <br/>

                   {screen}
                   {screen}
                   {screen}
                    
                </div>
            </main>
        );
    }
}

export default ProfessorLectureForm;