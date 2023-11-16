import React, { Component } from 'react'
import "../../Design/login.css"
import buddyboss_logo from "../../assets/Images/buddyboss.logo.png"

import { useHistory } from "react-router-dom";

import { connect } from "react-redux"
import { getLoginToken } from "../../reduxStore/Actions/Login"

import UserService from '../../services/userService'
import Routes from '../../Routes/Routes'

class LoginPage1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Data: {
                email: "",
                password: ""
            },
            errors: {
                email: "",
                password: ""
            },
            initialData: ""
        }
    }

    //form Validation handle
    handleValidate = (e) => {
        const { errors } = this.state
        const { Data } = this.state
        const { name, value } = e.target


        switch (name) {

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

            default:
                break;
        }
        this.setState({ errors })
    }

    ///handle value of input feild
    onChangeHandler = (e) => {
        this.handleValidate(e)
        const { Data } = this.state
        this.setState({
            Data: { ...Data, [e.target.name]: e.target.value }
        });
    }


    //navigate to register page after click on dont hav account
    onClickDontHaveAccount = () => {
        this.props.history.push(Routes.RegisterPage)
    }

    componentDidUpdate(prevProps, prevState) {
        const { Token } = this.props.LoginPage
        const { initialData } = this.state

        if (prevState.initialData !== this.state.initialData && initialData.msg !== "Logged in!") {
            setTimeout(() => {
                this.setState({ initialData: "" })
            }, 2000);
        }

        if (prevState.initialData !== this.state.initialData && initialData.msg === "Logged in!") {
            this.props.getLoginToken1({ Token: initialData })
            localStorage.setItem('Token', initialData.token);
            localStorage.setItem("auth_id" , initialData.user.auth_id)
            this.props.history.push(Routes.UserDashBoard)
        }
    }

    //navigate to home page after login
    onClickLoginBtn = async (e) => {
        const { email } = this.state.Data;
        const { password } = this.state.Data

        const { errors } = this.state

        e.preventDefault();

        if (errors.email === '' && errors.password === "" && email !== "" && password !== "") {
            var newData = {
                email: email,
                password: password
            }

            const initialData = await UserService.loginUserList(newData);
            this.setState({ initialData: initialData })
        }

        else {
            this.setState({ initialData: { msg: "every feild is required or you may enter wrong value" } })
        }
    }

    render() {
        const { email } = this.state.Data
        const { password } = this.state.Data
        const { errors } = this.state

        const { initialData } = this.state

        const { Token } = this.props.LoginPage

        return (
            <div className='login-page-main-container' style={{
                // backgroundImage: `url(${backgroundImageLeft}) , url(${backgroundImageRight})`
            }}>

                {initialData !== "" ?
                    <div className='initialData-popop'>{initialData.msg}
                    </div>
                    : ""}
                <div className='login-page-wrapper'>
                    <div className='buddy-boss-logo-login-page-wrapper'>
                        <div className='buddy-boss-logo-login-page'>
                            <img src={buddyboss_logo} alt="avatar" className="cover" />
                        </div>
                        <div className='web-name1'>buddyboss</div>
                    </div>

                    <div className='login-header'>
                        Log in to your Account
                    </div>

                    <div className='main-input-feild-box-wrapper'>
                        <div className='username-email-address'>
                            <label className='username-email-label'>
                                Email Address
                            </label>
                            <input type="text"
                                className='username-email-input'
                                placeholder='enter your username or password'
                                name='email'
                                value={email}
                                onChange={this.onChangeHandler}
                            />
                            {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                        </div>

                        <div className='username-email-address'>
                            <label className='username-email-label'>
                                password
                            </label>
                            <input type="password"
                                className='username-email-input'
                                placeholder='enter your password'
                                name='password'
                                value={password}
                                onChange={this.onChangeHandler}
                            />
                            {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                        </div>

                        <div className='remember-me-forgot-password'>
                            <input type="checkbox" className='check-box-remember-me' />
                            <div className='remember-me'>
                                Remember Me
                            </div>

                            <div className='forgot-password' onClick={this.onClickDontHaveAccount}>
                                don't have Account?
                            </div>
                        </div>
                        <div className='login-btn-wrapper'>
                            <div className='login-btn' onClick={(e) => this.onClickLoginBtn(e)}>
                                LOG IN
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
        LoginPage: state.LoginReducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLoginToken1: (payload) => dispatch(getLoginToken(payload)),
    }
}

export const Add = connect(mapStateToProps, mapDispatchToProps)(LoginPage1);

function LoginPage(props) {
    const history = useHistory();
    return <Add {...props} history={history} />
}
export default LoginPage;

