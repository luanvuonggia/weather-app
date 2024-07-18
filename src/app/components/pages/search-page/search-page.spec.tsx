import { render } from '@lib/tests';
import SearchPage from './search-page';

describe('SearchPage Component', () => {
it('should render', () => {
const { container } = render(
<SearchPage />);
expect(container).toBeTruthy();
});

it('should render with children and className', () => {
const { container } = render(<SearchPage className="test"></SearchPage>);

expect(container.querySelector('.test')).toBeTruthy();
});
});