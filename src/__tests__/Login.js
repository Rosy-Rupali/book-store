import React from "react";
import Login from '../pages/Login.js'
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });
const comp = shallow(<Login />);
const wrapper = mount(<Login />);

describe("testing after successful login it goes to homepage or not", () => {
    it("renders login page without crashing", () => {
      render(<Login />)
      expect(screen.getByText('Login')).toBeInTheDocument()
    });
    it('Fill the form and login', async () => {
      render(<Login />)
  
      userEvent.type(screen.getByPlaceholderText("Email id"), 'itrosyrupali4037@gmail.com')
      userEvent.type(screen.getByPlaceholderText("password"), 'Rosy12345')
      await waitFor(() => userEvent.click(screen.getByTestId('bookstore-card')))

      expect(window.location.pathname).toBe('/')
    })
  })