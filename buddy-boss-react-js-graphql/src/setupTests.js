// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
// import '@testing-library/jest-dom';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// import fetch from "../__mocks__/api";

// global.fetch = fetch;
configure({ adapter: new Adapter() });
// import '@testing-library/jest-dom/extend-expect';