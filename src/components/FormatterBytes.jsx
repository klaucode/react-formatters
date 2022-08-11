import * as React from 'react';
import Formatters from "../formatters";

const FormatterBytes = ({value, decimals}) => (<>
    {Formatters.formatBytes(value, decimals)}
</>);

export default FormatterBytes;