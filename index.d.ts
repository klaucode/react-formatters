interface Formatters {
    formatNumber(value:string, decimals?:number):string;
    formatCurrency(value:string, decimals?:number):string;
    formatDate(value:Date, format?:string):string;
    formatDateTime(value:Date, format?:string):string;
    formatStringCapitalize(value:string):string;
    formatBytes(bytes:number, decimals:number):string;
}

declare function FormatterBytes(value:number, decimals?:number);
declare function FormatterCurrency(value:number, decimals?:number);