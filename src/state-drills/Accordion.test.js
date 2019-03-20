import { shallow } from 'enzyme'
import Accordion from './Accordion'
import React from 'react'
import toJson from 'enzyme-to-json'
import ReactDOM from 'react-dom'
import sections from '../sectionIndex';




describe(`Tabs Component`, () => {

    it('renders without errors', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion />, div);
        ReactDOM.unmountComponentAtNode(div);
      })
    

    it('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the buttons and no tabs by default', () => {
    const wrapper = shallow(<Accordion sections = {sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens 1st  tab and closes any other tab', () => {
    const wrapper = shallow(<Accordion sections = {sections}/>)
    wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens 2nd  tab and closes any other tab', () => {
    const wrapper = shallow(<Accordion sections = {sections}/>)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens 3rd  tab and closes any other tab', () => {
    const wrapper = shallow(<Accordion sections = {sections}/>)
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })



  

})