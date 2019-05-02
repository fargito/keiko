import * as React from 'react';

interface ErrorProps {
  error: string;
}

const ErrorDisplayer = (props: ErrorProps) => <div>je suis l'erreur {props.error}</div>;

export default ErrorDisplayer;
