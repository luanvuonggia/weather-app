import React from 'react';
import clsx from 'clsx';
import { withResourceBundle } from '@lib/i18n';
import { SearchPageProps } from './search-page.types';
import styles from './search-page.module.scss';
import useSearchPageViewModel from './search-page.view-model';
import Page from '@components/elements/page';
import { AutoComplete, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import { DeleteOutlined , SearchOutlined } from '@ant-design/icons';
function SearchPage(props: SearchPageProps) {
const { className, testingID } = props;



const options = [
  { value: 'Ho Chi Minh City' },
  { value: 'Singapore, SG' },
  { value: 'Ha Noi' },
];
const { counter, handleIncClick } = useSearchPageViewModel(props);
const navigate = useNavigate();
return (
<Page className={clsx('search-page flex justify-center h-full pt-10', styles.searchPage, className)} testingID={testingID}>
  <div>
    <div>
      <AutoComplete
        style={{ width: 200, marginRight:12 }}
        options={options}
        placeholder="Search..."
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
      <Button onClick={()=> navigate('/')}>Search</Button>
    </div>
    <div className='mt-4 mb-1 font-semibold'>Search History</div>
    <Card>
      <div className='flex justify-between items-center mb-2'>
       <span> Ho Chi Minh City</span>
       <div>
        <SearchOutlined style={{ marginRight: 6 }}></SearchOutlined>
        <DeleteOutlined></DeleteOutlined>
       </div>
      </div>
      <div className='flex justify-between items-center mb-2'>
       <span> Ho Chi Minh City</span>
       <div>
        <SearchOutlined style={{ marginRight: 6 }}></SearchOutlined>
        <DeleteOutlined></DeleteOutlined>
       </div>
      </div>
    </Card>
    <div className='mt-6'>This part is not implemented yet. I will come back to complete it.</div>
    <div>Thank you for having me here, have a nice day!</div>
    </div>

</Page>
);
}

export default React.memo(withResourceBundle( SearchPage , () => import('./translations')));
