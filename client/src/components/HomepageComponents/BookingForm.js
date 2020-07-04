import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios'

class BookingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            description: "",
            priority:"",
            gender: '',
            age:"",
            category: ""
        }
    }

    componentWillMount() {

    }
    onChangeEmail =(e)=>{
        this.setState({
            email: e.target.value
        })
    }
    onChangeDescription =(e)=>{
        this.setState({
            description: e.target.value
        })
    }
    onChangePriority =(e)=>{
        this.setState({
            priority: e.target.value
        })
    }
    onChangeGender =(e)=>{
        this.setState({
            gender: e.target.value
        })
    }
    onChangeAge =(e)=>{
        this.setState({
            age: e.target.value
        })
    }
    onChangeCategory =(e)=>{
        this.setState({
            category: e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()

        const Booking = {
            email: this.state.email,
            description: this.state.description,
            priority: this.state.priority,
            gender: this.state.gender,
            age:this.state.age,
            category:this.state.category
        }
        console.log(Booking)
        Axios.post('http://localhost:5000/Booking/Book',Booking)
                .then(res=>console.log(res.data))
    }
    render() {
        return (
            <>
            <div className='img-thumbnail'>
                <h5 className='text-center'>Book An Appointment</h5>
                <form className='p-3' onSubmit={this.onSubmit}>
                    <div className='d-flex form-group'>
                        <label>Email:</label>
                        <input 
                        className='form-control col-10 mx-auto'
                        value={this.state.email}
                        onChange = {this.onChangeEmail}
                        />
                    </div>
                    <div className='d-flex form-group'>
                        <label>Description:</label>
                        <textarea 
                        className='form-control col-10 mx-auto' 
                        placeholder='Please Describe The Condition..'
                        value={this.state.description}
                        onChange={this.onChangeDescription}></textarea>
                    </div>
                    <div className='d-flex form-group'>
                        <label>Priority:</label>
                        <select className="form-control col-6 mx-2"
                        value={this.state.priority}
                        onChange={this.onChangePriority}>
                            <option value='High'>High</option>
                            <option value='Low'>Low</option>
                            <option value='Medium'>Medium</option>
                        </select>
                    </div>
                    <div className='d-flex form-group'>
                        <label>Gender:</label>
                        <select className="form-control col-6 mx-2"
                        value={this.state.gender}
                        onChange={this.onChangeGender}>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Other'>Other</option>
                        </select>
                    </div>
                    <div className='d-flex form-group'>
                        <label>Age:</label>
                        <select 
                        className="form-control list-group col-6 mx-2"
                        value={this.state.age}
                        onChange={this.onChangeAge}>
                                <option value='6-10'>6-10</option>
                                <option value='11-15'>11-15</option>
                                <option value='16-20'>16-20</option>
                                <option value='21-25'>21-25</option>
                                <option value='26-30'>26-30</option>
                                <option value='31-40'>31-40</option>
                                <option value='41-55'>41-55</option>
                                <option value='56-above'>56-above</option>
                        </select>
                    </div>
                    <div className='d-flex form-group'>
                        <label>Category:</label>
                        <select 
                        className="form-control list-group col-6 mx-2"
                        value={this.state.category}
                        onChange={this.onChangeCategory}>
                                <option value='Eye-Check-Up'>Eye-Check-Up</option>
                                <option value='Stomach Problems'>Stomach Problems</option>
                                <option value='Head-Problems'>Head-Problems</option>
                                <option value='Breast-Cancer-Check'>Breast-Cancer-Check</option>
                                <option value='Dental Problem'>Dental Problem</option>
                                <option value='Spinal Problems'>Spinal Problems</option>
                                <option value='Chect Pains'>Chect Pains</option>
                                <option value='Cardio Check-Up'>Cardio Check-Up</option>
                        </select>
                    </div>
                    <button className='btn btn-dark' type='submit'>Book</button>
                </form>
            </div> 
            </>
        );
    }
}

BookingForm.propTypes = {

};

export default BookingForm;