const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        calendar: 'persian',
    }
    const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', options);
    const result = formatter.format(date);

    return result;
}

/// Test Codes

const testDate = '2025-04-17'
const shamsi = formatDate(testDate)
console.log(`${testDate}: ${shamsi}`)
