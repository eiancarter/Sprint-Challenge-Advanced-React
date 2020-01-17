import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
// import '@testing-library/jest-dom/extend-expect';
import PlayerCard from './PlayerCard';

Enzyme.configure({ adapter: new Adapter() });

describe('player card component', () => {
    test('renders', () => {
        const wrapper = shallow(<PlayerCard />);
        
        expect(wrapper.exists()).toBe(true);
    })
})