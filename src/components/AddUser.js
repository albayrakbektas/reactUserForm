import React, {Component} from 'react';

class AddUser extends Component {

    state = {
        isVisible: false
    }

    changeVisibility = () => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        const {isVisible} = this.state
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
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='id'
                                        placeholder='Enter Name'
                                        className='form-control'
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
                                    />
                                </div>
                                <button className='btn btn-danger col-12' type='submit'>Add User</button>
                            </form>
                        </div>
                    </div> : null
                }
            </div>
        );
    }
}

export default AddUser;