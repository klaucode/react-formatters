import * as React from 'react';
import Formatters from "../formatters";

const FormatterDateTime = ({value, format}) => (<>
    {Formatters.formatDateTime(value, format)}
</>);

export default FormatterDateTime;