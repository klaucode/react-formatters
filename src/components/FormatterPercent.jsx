import * as React from 'react';
import Formatters from "../formatters";

const FormatterPercent = ({percent, numeric, decimals}) => (<>
    {Formatters.formatPercent(percent, numeric, decimals)}
</>);

export default FormatterPercent;