import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from '../model/User';
import { connect } from 'react-redux';
import { signup } from '../actions/postAction';

class SignUp extends Component {
    user
    componentDidMount() {
        this.user = new User()
    }
    componentDidUpdate() {
        if (this.props.user !== this.state.user && this.props.user !== undefined) {
            this.user = this.props.user
            this.setState({
                user: this.props.user
            })
        }
    }
    constructor() {
        super();
        this.user = new User()
        this.state = {
            user: this.user,
            nameError: false,
            mailError: false,
            passwordError: false,
            mobileError: false,
            phoneLengthError: false,
            passwordLengthError: false,
            //phoneTypeError: false,
            addressError: false,
            pincodeError: false,
            pincodeLengthError: false,
            submitFlag: true,
            disabledFlag: true,
            successFlag: true
        }
    }
    handleSubmit(event) {
        this.setState({

        })
        event.preventDefault();
        this.props.signup(this.user)
        this.user = new User()
        this.setState({
            // successFlag: (this.props.response.status === 200) ? true : false,
            submitFlag: false
        })
    }
    handleNameChange(event) {
        this.user.userName = event.target.value
        this.setState({
            user: this.user,
            nameError: (this.user.userName === "") ? true : false
        })
        this.disableButton()
    }
    handleMailChange(event) {
        this.user.userEmail = event.target.value
        this.setState({
            user: this.user,
            mailError: (this.user.userEmail === "") ? true : false
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
    handleMobileChange(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user,
            mobileError: (this.user.userMobile === "") ? true : false,
            phoneLengthError: (this.user.userMobile.length !== 10) ? true : false,
            // phoneTypeError: (this.user.userMobile.value !== [a-z]) ? false : true
        })
        this.disableButton()
    }
    handleAddressChange(event) {
        this.user.userAddress = event.target.value
        this.setState({
            user: this.user,
            addressError: (this.user.userAddress === "") ? true : false
        })
        this.disableButton()
    }
    handlePincodeChange(event) {
        this.user.userPincode = event.target.value
        this.setState({
            user: this.user,
            pincodeError: (this.user.userPincode === "") ? true : false,
            pincodeLengthError: (this.user.userPincode.length !== 6) ? true : false,
        })
        this.disableButton()
    }
    disableButton() {
        this.setState({
            disabledFlag: (this.state.user.userName === "" || this.state.user.userEmail === "" || this.state.user.userPassword === "" || this.state.user.userMobile === "" || this.state.user.userAddress === "" || this.state.user.userPincode === "") ? true : false
        })
    }
    render() {
        return (
            <div class="d-flex justify-content-center">
                <div className="col-xl-8 my-3">
                    <div class="card-header border-primary bg-light text-center ">
                        <h4 className="font-weight-bold text-primary">REGISTER</h4></div>
                    <div class="card mb-4 border-primary">
                        <div class="card-body">
                            <form onSubmit={(event) => this.handleSubmit(event)}>
                                <fieldset>
                                    <div className="form-group mt-1 align-center">
                                        <label>UserName *</label>
                                        <input type="text" className="form-control" placeholder="Enter Name" value={this.state.user.userName} onChange={(event) => this.handleNameChange(event)} />
                                        {
                                            (this.state.nameError) ?
                                                <div className="alert alert-danger" role="alert">
                                                    Can't be empty
                        </div> : null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input type="text" className="form-control" placeholder="Enter Email" value={this.state.user.userEmail} onChange={(event) => this.handleMailChange(event)} />
                                        {
                                            (this.state.mailError) ?
                                                <div className="alert alert-danger" role="alert">
                                                    Can't be empty
                        </div> : null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Password *</label>
                                        <input type="password" className="form-control" placeholder="Enter Password" value={this.state.user.userPassword} onChange={(event) => this.handlePasswordChange(event)} />
                                        {
                                            (this.state.passwordError) ?
                                                <div className="alert alert-danger" role="alert">
                                                    Can't be empty
                        </div> : (this.state.passwordLengthError) ?
                                                    <div className="alert alert-danger" role="alert">
                                                        Minimum 6 characters
                        </div> : null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number *</label>
                                        <input type="number" className="form-control" placeholder="Enter Phone Number" value={this.state.user.userMobile} onChange={(event) => this.handleMobileChange(event)} />
                                        {
                                            (this.state.mobileError) ?
                                                <div className="alert alert-danger" role="alert">
                                                    Can't be empty
                        </div> :
                                                (this.state.phoneLengthError) ?
                                                    <div className="alert alert-danger" role="alert">
                                                        Maximum 10 digits
                                                </div> :

                                                    null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Address *</label>
                                        <input type="text" className="form-control" placeholder="Enter Address" value={this.state.user.userAddress} onChange={(event) => this.handleAddressChange(event)} />
                                        {
                                            (this.state.addressError) ?
                                                <div className="alert alert-danger" role="alert">
                                                     Can't be empty
                        </div> : null
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label>Pincode *</label>
                                        <input type="number" className="form-control" placeholder="Enter Pincode" value={this.state.user.userPincode} onChange={(event) => this.handlePincodeChange(event)} />
                                        {
                                            (this.state.pincodeError) ?
                                                <div className="alert alert-danger" role="alert">
                                                    Can't be empty
                                                    </div> :
                                                (this.state.pincodeLengthError) ?
                                                    <div className="alert alert-danger" role="alert">
                                                        only 6 digits
                                                        </div> : null
                                        }
                                    </div>
                                    <div class="d-flex justify-content-center">
                                        <button className="btn btn-primary btn-round-sm" type="submit" disabled={this.state.disabledFlag}>Submit</button>
                                    </div>
                                </fieldset>
                            </form>
                            {
                                (!this.state.submitFlag && this.state.successFlag) ?
                                    <div className="alert alert-dismissible alert-success">
                                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                                        <strong>successfully registerd</strong>
                                    </div> : null
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
SignUp.propTypes = {
    signup: PropTypes.func.isRequired,
}
export default connect(null, { signup })(SignUp);