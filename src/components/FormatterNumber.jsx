import * as React from 'react';
import Formatters from "../formatters";

const FormatterNumber = ({value, decimals}) => (<>
    {Formatters.formatNumber(value, decimals)}
</>);

export default FormatterNumber;