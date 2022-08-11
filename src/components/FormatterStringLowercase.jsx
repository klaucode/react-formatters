import * as React from 'react';
import Formatters from "../formatters";

const FormatterStringLowercase = ({value}) => (<>
    {Formatters.formatStringLowercase(value)}
</>);

export default FormatterStringLowercase;