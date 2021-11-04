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


  //player 2
  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')
  //player 1
  const turn3 = wrapper.find('button.square').at(4)
  turn3.simulate('click')
  //player 2
  const turn4 = wrapper.find('button.square').at(5)
  turn4.simulate('click')
  //player 1
  const turn5 = wrapper.find('button.square').at(8)
  turn5.simulate('click')
  const winner = wrapper.find('div.game-info').children().first().text()
  expect(winner).toEqual('Winner: X')
})