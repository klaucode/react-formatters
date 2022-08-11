import * as React from 'react';
import Formatters from "../formatters";

const FormatterDate = ({value, format}) => (<>
    {Formatters.formatDate(value, format)}
</>);

export default FormatterDate;