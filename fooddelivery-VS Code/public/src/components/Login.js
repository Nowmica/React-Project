import React, { Component } from 'react';
import User from '../model/User';
import axios from 'axios';
import Logo from './Icon.png';
class Login extends Component {

    user
    constructor() {
        super();
        this.user = new User()
        this.state = {
            user: this.user,
            mobileError: false,
            phoneLengthError: false,
            passwordError: false,
            passwordLengthError: false,
            disabledFlag: true
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.request({
            url: "http://localhost:8081/user/signin",
            method: "post",
            auth: {
                username: this.state.user.userMobile,
                password: this.state.user.userPassword
            }
        }).then(res => {
            console.log(res.data)
        })

        this.user = new User()

        this.setState({ user: this.user })

    }
    handleMobileChange(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userMobile === "") ? true : false,
            phoneLengthError: (this.user.userMobile.length !== 10) ? true : false
        })
        this.disableButton()
    }
    handlePasswordChange(event) {
        this.user.userPassword = event.target.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,
            passwordLengthError: (this.user.userPassword.length < 6) ? true : false

        })
        this.disableButton()
    }
    disableButton() {
        this.setState({
            disabledFlag: (this.state.user.userPassword === "" || this.state.user.userMobile === "") ? true : false
        })
    }
    render() {
        return (

            <div class="d-flex justify-content-center">
                <div className="col-sm-5 my-5">
                    <div class="card-header border-primary bg-light text-center ">
                        <h4 className="font-weight-bold text-primary">LOGIN</h4></div>
                    <div class="card mb-4 border-primary">
                        <div class="card-body">
                            <div className="d-flex justify-content-end">
                            <img className="" src={Logo} style={{ height: 100 }} alt=""/>
                            </div>
                            <form className="mt-1" onSubmit={(event) => this.handleSubmit(event)}>
                                <fieldset>
                                    <div className="form-group">
                                        <label>Mobile Number</label>
                                        <input type="text" className="form-control" placeholder="Enter mobile Number" value={this.state.user.userMobile} onChange={(event) => this.handleMobileChange(event)} />
                                        {
                                            (this.state.mobileError) ?
                                                <div className="alert alert-danger" role="alert">
                                                    Can't be empty
                                                </div> :
                                                (this.state.phoneLengthError) ?
                                                    <div className="alert alert-danger" role="alert">
                                                         Only 10 digits
                                        </div> : null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter Password" value={this.state.user.userPassword} onChange={(event) => this.handlePasswordChange(event)} />
                                        {
                                            (this.state.passwordError) ?
                                                <div className="alert alert-danger" role="alert">
                                                    Can't be empty
                                                </div> : (this.state.passwordLengthError) ?
                                                    <div className="alert alert-danger" role="alert">
                                                         minimum 6 characters
                                                </div> : null
                                        }
                                    </div>
                                    <div class="d-flex justify-content-center">
                                    <button className="btn btn-primary btn-round-sm " type="submit" disabled={this.state.disabledFlag}>Submit</button>
                                </div>
                                </fieldset>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
export default Login;