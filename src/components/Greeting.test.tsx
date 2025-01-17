import React from 'react';
import {render, screen} from '@testing-library/react';
import Greeting from './Greeting';

test('Greeting', () => {
	render(<Greeting name={'world'} />);

	screen.getByText('Hello, world!');
	screen.getByText(/Hello/);
	expect(screen.getByText(/Hello/)).toBeInTheDocument();
	expect(screen.queryByText(/Hi/)).not.toBeInTheDocument();
});
