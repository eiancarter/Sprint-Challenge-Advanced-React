import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup);


it ('renders player cards', () => {
    const wrapper = rtl.render(<PlayerCard />);
    const hasPlayerCard = wrapper.queryby
})