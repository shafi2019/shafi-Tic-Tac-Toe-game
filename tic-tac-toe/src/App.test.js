import React from "react";
import { shallow } from "enzyme";
import App from './App';

it('renders without crashing', () => {
  shallow(<App />)
});

it('renders app status correctly', () => {
  const wrapper = mount(<App />)
  const firstPlayer = wrapper.find('div.game-info').children().first().text()
  expect(firstPlayer).toEqual('Next Player: X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  const secondPlayer = wrapper.find('div.game-info').children().first().text()
  expect(secondPlayer).toEqual('Next Player: O')
})