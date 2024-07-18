import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface ForecastProps extends React.PropsWithChildren<object>, ITestableProps {
    className?: string;
    styles?: React.CSSProperties;
    }
