import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
// import '@testing-library/jest-dom/extend-expect';
import useDarkMode from './useDarkMode';

Enzyme.configure({ adapter: new Adapter() });

describe('dark mode component', () => {
    test('renders', () => {
        const wrapper = shallow(<useDarkMode />);
        
        expect(wrapper.exists()).toBe(true);
    })
})