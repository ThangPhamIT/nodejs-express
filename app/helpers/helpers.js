module.exports = {
    showStatusMessage: function (message) {
        if (message === undefined) {
            return '';
        } else if (message.error !== undefined) {
            return `
            <div class="alert alert-danger">
                ${message.error}
            </div>
        `;
        } else if (message.success !== undefined) {
            return `
            <div class="alert alert-success">
                ${message.success}
            </div>
        `;
        } else {
            return '';
        }
    }
};