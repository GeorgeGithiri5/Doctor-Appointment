import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

class ListOfBookings extends Component {
    constructor(props) {
        super(props);
        this.state ={
            bookings:[],
            checked: false
        }
    }
    componentDidMount(){
        Axios.get('http://localhost:5000/booking')
            .then(res=>{
                this.setState({
                    bookings: res.data
                })
            })
    }
    onCheck=()=>{
        this.setState({
            checked: true
        })
    }
    render() {
        const bookings = this.state.bookings.map(patient=>{
            return(
                <tr key={patient._id}>
                    <td>{patient.age}</td>
                    <td>{patient.gender}</td>
                    <td>{patient.category}</td>
                    <td>{patient.description}</td>
                    <td>{}</td>
                    <td>
                        <Link to='/appoint' className="btn btn-warning">Assign</Link>
                    </td>
                </tr>
            )
        })
        return (
            <>
                <div className="col-10 mx-auto List-table">
                    <h2 className="text-center">Patients</h2>
                    <table className="table table-bordered table-responsive-sm table-striped">
                        <thead>
                            <tr>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Catergory</th>
                                <th>Description</th>
                                <th>Checked</th>
                                <th>Appoint</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default ListOfBookings;