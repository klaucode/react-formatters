interface Formatters {
    formatNumber(value:number, decimals?:number):string;
    formatCurrency(value:number, decimals?:number):string;
    formatDate(value:Date, format?:string):string;
    formatDateTime(value:Date, format?:string):string;
    formatStringCapitalize(value:string):string;
    formatBytes(bytes:number, decimals:number):string;
}