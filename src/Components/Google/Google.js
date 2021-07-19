import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

class Google extends Component {
    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
    }

    render() {
        return (

            <div>

                <GoogleLogin
                    clientId="83596875475-56q5mpntqe2pu1bvbl2moij5qlao5fbc.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />

            </div>
        )
    }
}

export default Google;

