# react-formatters

This is a tiny React set of helpers to save time with most frequently formatting numbers, strings, percentages, size values, dates, etc.
Package contains React components and also ordinary functions.

*How to use:*
```
<FormatterBytes value={8192}/> // Return 8kB
<FormatterCurrency value={100}/> // Return 100€
<FormatterDate value={new Date()}/> // Return 2022-01-01
<FormatterDateTime value={new Date()}/> // Return 2022-01-01 10:00:00
<FormatterNumber value={100.765443}/> // Return 100.77
<FormatterNumber value={100.765443} decimals={0}/> // Return 101
<FormatterPercent percent={10}/> // Return 10%
<FormatterPercent numeric={0.95}/> // Return 95%
<FormatterStringCapitalize value={'test tEst'}/> // Return Test Test
<FormatterStringLowercase value={'test tEst'}/> // Return test test
<FormatterStringUppercase value={'test tEst'}/> // Return TEST TEST

```

Also, you can use an ordinary functions:

```
    Formatters.formatNumber(100.765443);
    Formatters.formatCurrency(100, 2);
    Formatters.formatPercent(10);
    Formatters.formatPercent(null, 0.95);
    Formatters.formatDate(new Date());
    Formatters.formatDateTime(new Date());
    Formatters.formatStringCapitalize('test tEst');
    Formatters.formatStringUppercase('test tEst');
    Formatters.formatStringLowercase('test tEst');
    Formatters.formatBytes(8192);
});

```
