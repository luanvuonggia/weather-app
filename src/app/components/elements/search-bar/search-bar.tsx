import React from 'react';
import clsx from 'clsx';
import { withResourceBundle } from '@lib/i18n';
import { SearchBarProps } from './search-bar.types';
import styles from './search-bar.module.scss';
import useSearchBarViewModel from './search-bar.view-model';
import { EnvironmentOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import useSearchStore from '@store/search';
const { Search } = Input;
function SearchBar(props: SearchBarProps) {
const { children, className, testingID } = props;
const { currentSearch } = useSearchStore();


const { handleIncClick, onSearch } = useSearchBarViewModel(props);

return (
<div className={clsx('search-bar', styles.searchBar, className)} data-testid={testingID}>
  {children}
  <Search
      addonBefore={<EnvironmentOutlined></EnvironmentOutlined>}
      placeholder="input search text"
      allowClear
      value={currentSearch}
      onClick={handleIncClick}
      onSearch={onSearch}
      style={{ width: 304 }}
    />
</div>
);
}

export default React.memo(withResourceBundle( SearchBar , () => import('./translations')));
