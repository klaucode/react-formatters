import moment from 'moment';

const Formatters = () => ({

    formatNumber: (value, decimals = 2) => {
        return Number(value).toFixed(decimals);
    },

    formatCurrency: (value, decimals = 2) => {
        return Formatters.formatNumber(value, decimals) + '€';
    },

    formatPercent: (percent = 0, numeric = 0, decimals = 2) => {
        let value = percent;

        if(numeric)
            value = numeric * 100;

        return parseFloat(value.toString()).toFixed(decimals).toString() + '%';
    },

    formatDate: (value, format = 'YYYY-MM-DD') => {
        return moment(value).format(format);
    },

    formatDateTime: (value, format = 'YYYY-MM-DD HH:mm:ss') => {
        return moment(value).format(format);
    },

    formatStringCapitalize: (value) => {
        return value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : '';
    },

    formatStringUppercase: (value) => {
        return value ? value.toString().toUpperCase() : '';
    },

    formatStringLowercase: (value) => {
        return value ? value.toString().toLowerCase() : '';
    },

    formatBytes: (bytes, decimals = 0) => {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[parseInt('' + i)];
    }
});

export default Formatters;