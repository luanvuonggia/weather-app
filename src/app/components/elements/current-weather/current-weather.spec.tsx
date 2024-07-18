import { render } from '@lib/tests';
import CurrentWeather from './index';

describe('CurrentWeather Component', () => {
it('should render', () => {
const { container } = render(
<CurrentWeather />);
expect(container).toBeTruthy();
});

it('should render with children', () => {
const { getByText } = render(<CurrentWeather>
    <div>Test</div>
</CurrentWeather>);

expect(getByText('Test')).toBeTruthy();
});

it('should render with children and className', () => {
const { container } = render(<CurrentWeather className="test">Test</CurrentWeather>);

expect(container.querySelector('.test')).toBeTruthy();
});
});