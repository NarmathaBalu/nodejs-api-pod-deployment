const axios = require('axios');

(async () => {
  try {
    const health = await axios.get('http://localhost:3000/health');
    console.log('Health:', health.data);

    const hello = await axios.get('http://localhost:3000/api/hello');
    console.log('Hello:', hello.data);

    const goodbye = await axios.get('http://localhost:3000/api/goodbye');
    console.log('Goodbye:', goodbye.data);

    console.log('All tests passed!');
    process.exit(0);
  } catch (err) {
    console.error('Test failed:', err.message);
    process.exit(1);
  }
})();
