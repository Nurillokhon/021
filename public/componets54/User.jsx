import React, { Component } from 'react';

class User extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <img src={this.props.user.avatar} alt="sasdasd" />
            </div>
        );
    }
}

export default User;
