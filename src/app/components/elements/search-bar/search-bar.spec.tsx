import { render } from '@lib/tests';
import SearchBar from './index';

describe('SearchBar Component', () => {
it('should render', () => {
const { container } = render(
<SearchBar />);
expect(container).toBeTruthy();
});

it('should render with children', () => {
const { getByText } = render(<SearchBar>
    <div>Test</div>
</SearchBar>);

expect(getByText('Test')).toBeTruthy();
});

it('should render with children and className', () => {
const { container } = render(<SearchBar className="test">Test</SearchBar>);

expect(container.querySelector('.test')).toBeTruthy();
});
});