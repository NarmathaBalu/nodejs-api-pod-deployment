const http = require('http');

http.get('http://localhost:3000/health', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log('Health endpoint response:', data);
        process.exit(0);
    });
}).on('error', err => {
    console.error('Health check failed:', err.message);
    process.exit(1);
});
