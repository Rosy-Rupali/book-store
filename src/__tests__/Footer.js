import React from 'react';
import Footer from '../components/Footer';
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
const comp = shallow(<Footer />);

describe("renders Footer component", () => {
    it("test whether main container is loaded or not", () => {
      expect(comp.find('.footer-maincontainer')).toHaveLength(1);
    });
})