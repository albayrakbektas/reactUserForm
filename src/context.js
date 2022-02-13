import React, {Component} from 'react';

const UserContext = React.createContext();
// Provider, Consumer

const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        default:
            return state
    }
}

export class UserProvider extends Component {

    state = {
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
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

const UserConsumer = UserContext.Consumer;

export default  UserConsumer;

