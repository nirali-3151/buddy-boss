import React, { Component } from 'react'
import "../../Design/login.css"
import buddyboss_logo from "../../assets/Images/buddyboss.logo.png"
import backgroundImageLeft from "../../assets/Images/beck-ground-img-left.webp"
import backgroundImageRight from "../../assets/Images/beck-ground-img-right.webp"

import { useHistory } from "react-router-dom";
import { connect } from "react-redux"

import Routes from '../../Routes/Routes'
import httpClient from '../../services/httpClient'


class RegisterPage1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: {
                userName: "",
                email: "",
                password: "",
                confirm_password: ""
            },

            errors: {
                userName: "",
                email: "",
                password: "",
                confirm_password: ""
            },

            initialData: ""
        }
    }

    componentDidUpdate(prevProps, prevState) {

        const { initialData } = this.state
        const { Data } = this.state

        if (prevState.initialData !== this.state.initialData && initialData.msg !== "The user has been registerd with us!") {

            setTimeout(() => {
                this.setState({ initialData: "" })
            }, 5000);
        }

        if (prevState.initialData !== this.state.initialData && initialData.msg === "The user has been registerd with us!") {
            setTimeout(() => {
                this.props.history.push(Routes.LoginPage)
            }, 2000);
        }
    }

    //form Validation handle
    handleValidate = (e) => {
        const { errors } = this.state
        const { Data } = this.state
        const { name, value } = e.target


        switch (name) {
            case 'userName':
                errors.userName =
                    value.length < 4 && value.length !== 0
                        ? 'First name must be 4 characters long!'
                        : '';
                break;

            case 'email':
                const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
                var matchNumber = value.match(validEmailRegex)
                errors.email =
                    matchNumber === null && value.length !== 0
                        ? "please enter valid email address"
                        : '';
                break;

            case 'password':
                errors.password =
                    value.length < 8 && value.length !== 0
                        ? 'Password must be 8 characters long!'
                        : '';
                break;

            case 'confirm_password':
                errors.confirm_password =
                    Data.password !== value && value.length !== 0
                        ? "password don't match"
                        : '';
                break;

            default:
                break;
        }
        this.setState({ errors })
    }

    //navigate to login page
    onClickAlreadyHaveAnAccount = () => {
        this.props.history.push(Routes.LoginPage)
    }

    // register user and navigate to login page
    onClickRegisterBtn = async (e) => {
        const { userName } = this.state.Data
        const { email } = this.state.Data
        const { password } = this.state.Data

        const { errors } = this.state
        const { Data } = this.state

        e.preventDefault();

        if (errors.userName === "" && errors.email === "" && errors.password === "" && errors.confirm_password === "" && Data.userName !== "" && Data.email !== "" && Data.password !== "" && Data.confirm_password !== "") {
            var newData = {
                name: userName,
                email: email,
                password: password
            }

            const initialData = await httpClient.RegisterUser(newData);
            this.setState({ initialData: initialData.register_mutationType })
            this.props.history.replace(Routes.LoginPage)
        }

        else {
            this.setState({ initialData: { msg: "every feild is required or you may enter wrong value" } })
        }
    }
    ///handle value of input feild
    onChangeHandler = (e) => {
        const { Data } = this.state
        this.setState({
            Data: { ...Data, [e.target.name]: e.target.value }
        });
        this.handleValidate(e)
    }


    render() {
        const { userName } = this.state.Data
        const { email } = this.state.Data
        const { password } = this.state.Data
        const { confirm_password } = this.state.Data
        const { initialData } = this.state

        const { errors } = this.state

        return (
            <div className='login-page-main-container' style={{
            }}>

                {initialData !== "" ?
                    <div className='initialData-popop'>{initialData.msg}
                    </div>
                    : ""}

                <div className='login-page-wrapper'>
                    <div className='buddy-boss-logo-login-page-wrapper1'>
                        <div className='buddy-boss-logo-login-page'>
                            <img src={buddyboss_logo} alt="avatar" className="cover" />
                        </div>
                        <div className='web-name1'>buddyboss</div>
                    </div>

                    <div className='register-header'>
                        Register in to your Account
                    </div>

                    <div className='main-input-feild-box-wrapper'>
                        <div className='username-email-address1'>
                            <label className='username-email-label'>
                                Name
                            </label>
                            <input type="text"
                                className='username-email-input1'
                                placeholder='enter your name'
                                name='userName'
                                value={userName}
                                onChange={this.onChangeHandler}
                            />
                            {errors.userName.length > 0 && <span className='error'>{errors.userName}</span>}
                        </div>

                        <div className='username-email-address1'>
                            <label className='username-email-label'>
                                Email Address
                            </label>
                            <input type="text"
                                className='username-email-input1'
                                placeholder='enter your email address'
                                name='email'
                                value={email}
                                onChange={this.onChangeHandler} />
                            {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                        </div>

                        <div className='username-email-address1'>
                            <label className='username-email-label'>
                                Password
                            </label>
                            <input type="password"
                                className='username-email-input1'
                                placeholder='enter your password'
                                name='password'
                                value={password}
                                onChange={this.onChangeHandler} />
                            {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                        </div>

                        <div className='username-email-address1'>
                            <label className='username-email-label'>
                                Confirm Password
                            </label>
                            <input type="password"
                                className='username-email-input1'
                                placeholder='enter your password'
                                onChange={this.onChangeHandler}
                                name="confirm_password"
                                value={confirm_password} />
                            {errors.confirm_password.length > 0 && <span className='error'>{errors.confirm_password}</span>}
                        </div>

                        <div className='remember-me-forgot-password1'>
                            <div className='forgot-password' onClick={this.onClickAlreadyHaveAnAccount}>
                                already have Account? Sign In
                            </div>
                        </div>
                        <div className='login-btn-wrapper'>
                            <div className='login-btn' onClick={(e) => this.onClickRegisterBtn(e)}>
                                Register
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // initialState: state.AddReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // editData1: (payload) => dispatch(editData(payload)),
    }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(RegisterPage1);

function RegisterPage(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default RegisterPage;
