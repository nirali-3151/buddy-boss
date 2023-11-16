// import React from "react";
// import LoginPage from "./LoginPage";
// import { shallow, mount } from "enzyme";
// import Add from './LoginPage'
// import UserService from '../../services/userService'
// import store from '../../reduxStore/store/index'

// describe('render login page', () => {
//     afterEach(() => jest.resetAllMocks());


//     test('has correct input value', () => {
//         const wrapper = shallow(<LoginPage />)
//         const emailInput = wrapper.find('input').first
//         console.log("emailInput",emailInput);
//         emailInput.simulate('change', {
//             target: {
//                 value: "nirali@gmail.com"
//             }
//         })
//     });

//     test('should pass', () => {
//         const testData = { email: 'nirali@gmail.com', password: '12345678' };

//         const response = { json: jest.fn().mockResolvedValueOnce(testData) };
//         global.fetch = jest.fn().mockResolvedValueOnce(response);

//         return UserService.loginUserList().then((data) => {
//             expect(data).toEqual(testData);
//         });
//     });
// })

// // jest.mock('UserService.loginUserList');

// // jest.mock("./LoginPage")
// // describe('Login Page',  () => {
// //     it('should load user data',  () => {
// //         return loginUserList('vnglst')

// //         // return  UserService.loginUserList()
// //         .then(data => {
// //           expect(data).toBeDefined()
// //           expect(data.entity.name).toEqual('Koen van Gilst')
// //         })
// //       })

//         // it('check if child renders', () => {
//         //   const wrapper = shallow(<LoginPage store ={store} Add = {Add}/>);
//         //   console.log("wrapper.state",wrapper.props().Add);
//         //   expect(wrapper.props().Add).toEqual(Add);
//         // });

//         // it("contains users account email", () => {
//         //     const wrapper = shallow(<LoginPage store ={store} Add = {Add}/>);
//         //     expect(wrapper.text()).to.equal('important');
//         //     // const value = wrapper.find("email").text();
//         //     // expect(value).toEqual("david@gmail.com");
//         //   });

//     // const mockChildComponent = jest.fn();
//     // jest.mock("./Add", () => (props) => {
//     //     mockAdd(props);
//     //     return <Add />;
//     // });

//     // const wrapper = shallow(<Add />)
//     // it('should render login component', () => {
//     //     console.log("wrapper.state" ,wrapper.props());
//     //     // expect(wrapper.find(Add)).toEqual(1);
//     //     // expect(wrapper.containsAnyMatchingElements(<Add />)).toEqual(true);
//     // })

//     // const wrapper = shallow(<LoginPage store={store}/>)
//     // it('should render login component', () => {
//     //     // expect(wrapper.find(Add)).toEqual(1);
//     //     expect(wrapper.containsAnyMatchingElements(<Add />)).toEqual(true);
//     // })

//     // it('should have an empty email and password state var', () => {
//     //     expect(wrapper.props()).not.toEqual({ email: '124' });
//     //     // expect(wrapper.state('password')).toEqual('');
//     // });


//     // check email
//     // it("check emaildata", () => {
//     //    const wrapper = shallow(<LoginPage />);
//     //     wrapper.find('input[type="text"]').simulate("change", {
//     //         target: { id: "email", value: "world" }
//     //     });
//     //     expect(wrapper.state("email")).toEqual("world");
//     // });

//     // it('check weather email is correct or not', () => {

//     // })
// // });

// //   test cases
// // email and password can not be empty
// // email varification
// // password varification