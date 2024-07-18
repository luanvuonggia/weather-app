import React, {Suspense} from 'react';
import Loader from '@components/elements/loader';
import { RouteObject } from "react-router";

const SearchPage = React.lazy(() => import('./search-page'));

export const searchPageRoutes: RouteObject[] = [
{
path: '/search-page',
element:
(
    <Suspense fallback={<Loader />}>
    <SearchPage />
    </Suspense>
)
},
];