import * as React from 'react';
import Formatters from "../formatters";

const FormatterCurrency = ({value, decimals}) => (<>
    {Formatters.formatCurrency(value, decimals)}
</>);

export default FormatterCurrency;