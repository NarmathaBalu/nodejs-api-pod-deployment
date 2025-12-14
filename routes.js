module.exports = function(app) {
    app.get('/api/goodbye', (req, res) => res.json({ message: 'Goodbye from Node.js API' }));
    app.get('/metrics', (req, res) => res.json({ requests: 100, uptime: process.uptime() }));
};
