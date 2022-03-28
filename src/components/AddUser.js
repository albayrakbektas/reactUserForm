import React, {Component} from 'react';
import UserConsumer from "../context";
import uniqid from 'uniqid';

class AddUser extends Component {

    state = {
        isVisible: false,
        name: '',
        department: '',
        salary: ''
    }

    changeVisibility = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    changeInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addUser = (dispatch, e) => {
        e.preventDefault()
        const {name, department, salary} = this.state
        const newUser = {
            id: uniqid(),
            name,
            department,
            salary
        }
        dispatch({type: "ADD_USER", payload: newUser})
    }

    render() {
        const {isVisible, name, department, salary} = this.state
        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <button onClick={this.changeVisibility} className='btn btn-dark col-12 mb-2'>{
                                    isVisible ? 'Hide Form' : 'Show Form'
                                }</button>
                                {
                                    isVisible ? <div className="card">
                                        <div className="card-header">
                                            <h4>Add User Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.addUser.bind(this, dispatch)}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input
                                                        type='text'
                                                        name='name'
                                                        id='id'
                                                        placeholder='Enter Name'
                                                        className='form-control'
                                                        value={name}
                                                        onChange={this.changeInputValue}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="department">Department</label>
                                                    <input
                                                        type='text'
                                                        name='department'
                                                        id='department'
                                                        placeholder='Enter Department'
                                                        className='form-control'
                                                        value={department}
                                                        onChange={this.changeInputValue}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="salary">Salary</label>
                                                    <input
                                                        type='text'
                                                        name='salary'
                                                        id='salary'
                                                        placeholder='Enter Salary'
                                                        className='form-control'
                                                        value={salary}
                                                        onChange={this.changeInputValue}
                                                    />
                                                </div>
                                                <button className='btn btn-danger col-12' type='submit'>Add User</button>
                                            </form>
                                        </div>
                                    </div> : null
                                }
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default AddUser;