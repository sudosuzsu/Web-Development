export function formatCurrency(priceCents, locale = 'en-US', currency = 'USD') {
    if (typeof priceCents !== 'number' || isNaN(priceCents)) {
        throw new TypeError('priceCents should be a number');
    }

    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    });

    return formatter.format(priceCents / 100);
}
