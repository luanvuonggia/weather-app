import { useCallback, useState } from 'react';
import { SearchPageProps } from './search-page.types';

import { useTranslation } from '@lib/i18n';

function useSearchPageViewModel({ }: SearchPageProps) {
const [counter, setCounter] = useState(0);
const { t } = useTranslation();
const handleIncClick = useCallback(() => {
setCounter((c) => c + 1);
}, []);


return {
handleIncClick,
counter,
t,
};
}

export default useSearchPageViewModel;