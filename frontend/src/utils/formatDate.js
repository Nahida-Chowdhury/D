export const formatDate = (date, config) => {

    const deafultOptions = { date: 'numeric', month: 'short', year: 'numeric' };
    const options = config ? config : deafultOptions;

    return new Date(date).toLocaleDateString('en-US', options);
}