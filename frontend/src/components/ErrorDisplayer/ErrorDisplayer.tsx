import * as React from 'react';
import { string } from 'prop-types';

interface ErrorProps {
  error: string;
}

const ErrorDisplayer = (props: ErrorProps) => <div>je suis l'erreur {props.error}</div>;

export default ErrorDisplayer;
