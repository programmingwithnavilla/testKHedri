import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Display />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
    // it('renders the value of displayValue', () => {
    //     wrapper.setProps({ displayValue: 'a' });
    //     expect(wrapper.text()).toEqual('a');
    // });
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});