import { render } from '@lib/tests';
import Forecast from './index';

describe('Forecast Component', () => {
it('should render', () => {
const { container } = render(
<Forecast />);
expect(container).toBeTruthy();
});

it('should render with children', () => {
const { getByText } = render(<Forecast>
    <div>Test</div>
</Forecast>);

expect(getByText('Test')).toBeTruthy();
});

it('should render with children and className', () => {
const { container } = render(<Forecast className="test">Test</Forecast>);

expect(container.querySelector('.test')).toBeTruthy();
});
});