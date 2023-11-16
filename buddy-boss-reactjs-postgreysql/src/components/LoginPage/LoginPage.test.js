import React from "react";
import { Login } from "./LoginPage";
import { shallow } from "enzyme";
import UserService from '../../services/userService'
import store from '../../reduxStore/store/index'


describe('render login page', () => {

    let wrapper;

    const newData =
        {
            email: 'nirali@gmail.com',
            password: '12345678'
        };

    test('email Can  not be a empty', () => {
        wrapper = shallow(<Login store={store} />)
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: newData.email } });
        expect(wrapper.state().Data.email).not.toEqual('');
    })

    test('password Can  not be a empty', () => {
        wrapper = shallow(<Login store={store} />)
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'password', value: newData.password } });
        expect(wrapper.state().Data.password).not.toEqual('');
    })

    test('email is not valid ', () => {
        wrapper = shallow(<Login store={store} />)
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'email', value: 'nirali@gmail.com' } });
        expect(wrapper.state().Data.email).toMatch(validEmailRegex);
    })


    test('password length must be greater than or equal to 8', () => {
        wrapper = shallow(<Login store={store} />)
        wrapper.find('input[type="text"]').simulate('change', { target: { name: 'password', value: '12345678' } });
        expect(wrapper.state().Data.password.length).toBeGreaterThanOrEqual(8);
    })

    test('authenticate email and Password Data and login successful ', async () => {
        const initialData = await UserService.loginUserList(newData)
        expect(initialData.msg).toEqual("Logged in!")
        expect(initialData.token).not.toEqual("")
    });

    test('check password is correct or not' , async () => {
        const initialData = await UserService.loginUserList(newData)
        expect(initialData.msg).toEqual("Enter correct password!")
    })

    test('check user is registered or not ' , async () => {
        const initialData = await UserService.loginUserList(newData)
        expect(newData.email).not.toEqual("")
        expect(initialData.msg).toEqual("User is not registered, Sign Up first")
    })
    
})