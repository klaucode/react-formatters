import * as React from 'react';
import Formatters from "../formatters";

const FormatterStringCapitalize = ({value}) => (<>
    {Formatters.formatStringCapitalize(value)}
</>);

export default FormatterStringCapitalize;