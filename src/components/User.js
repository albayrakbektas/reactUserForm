import React, {Component} from 'react';
import PropTypes from "prop-types";
class Users extends Component {

    state = {
        isVisible: false,
        users: [
            {
                id: 1,
                name: 'Bektas',
                salary: '5000',
                department: 'Math'
            },
            {
                id: 2,
                name: 'Halil',
                salary: '2000',
                department: 'Engineer'
            },
            {
                id: 3,
                name: 'Alperen',
                salary: '4500',
                department: 'Software'
            },
        ]
    }

    static defaultProps = {
        name: "No Name",
        department: "No Department",
        salary: "No Salary"
    }

    onClickEvent = (e) => {
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    render() {
        //Destructing
        const {name, department, salary} = this.props
        const {isVisible} = this.state

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent} style={{cursor: "pointer"}} >{name}</h4>
                        <i className="far fa-trash-alt" style={{cursor: "pointer"}}></i>
                    </div>
                    {
                        isVisible ? <div className="card-body">
                            <p className="card-text">Salary : {salary}</p>
                            <p className="card-text">Department: {department}</p>
                        </div> : null
                    }
                </div>
            </div>
        );
    }
}
Users.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}
export default Users;