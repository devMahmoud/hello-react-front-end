const getData = async () => fetch('http://127.0.0.1:3000', {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  method: 'GET',
});
export default getData;
