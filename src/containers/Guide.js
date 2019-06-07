import React, { Component } from 'react';
import axios from 'axios';
import SelectInsuranceKind from '../components/guide/js/SelectInsuranceKind';
import SelectInsuranceCompany from '../components/guide/js/SelectInsuranceCompany';
import GuideCard from '../components/guide/js/GuideCard';

class GuideContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            kindListData:[],
            companyListData:[],
            guideListData:[],
            tip:[],
        }
    }

    componentWillReceiveProps =()=>{
        this.setState({
            kindListData:[],
            companyListData:[],
            guideListData:[],
            tip:[],
        })
        this.componentDidMount();
    }

    componentDidMount = () => {
        
        const url='http://localhost:8080/guide/kind';
        axios.get(url)
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                this.setState({
                    kindListData:response.data
                })
            }
        })
        .catch((error) => {
                console.log(error);
        })


    }

    selectCompany = (value) => {
        console.log(value);
        const url='http://localhost:8080/guide/company/'+value;
        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    this.setState({  
                        guideListData:[],
                        companyListData:response.data
                    })                   
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    selectGuide=(kindCompanyId)=>{
        console.log(kindCompanyId);
        const url='http://localhost:8080/guide/select/'+kindCompanyId;
        console.log(url);
        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    this.setState({
                        ...this.state,
                        guideListData:response.data.guide,
                        tip:response.data.tip,
                    }) 
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        console.log(this.state.guideListData);
        let companyScreen=(this.state.companyListData.length==0)?null:<SelectInsuranceCompany selectGuide={this.selectGuide} companyData={this.state.companyListData}/>;
        let guideScreen=(this.state.guideListData.length==0)?null:<GuideCard guideData={this.state.guideListData} tip={this.state.tip}/>;
        return (
            <div style={{margin:'auto'}}>
            
                <SelectInsuranceKind selectCompany={this.selectCompany} test="1" kindData={this.state.kindListData}/>
                {companyScreen}
                {guideScreen}
            </div>
        );
    }
}

export default GuideContainer;
