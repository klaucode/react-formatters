import * as React from 'react';
import Formatters from "../formatters";

const FormatterStringUppercase = ({value}) => (<>
    {Formatters.formatStringUppercase(value)}
</>);

export default FormatterStringUppercase;