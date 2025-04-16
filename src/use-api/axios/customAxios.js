import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: '....'
  },
  timeout: 5000,
});

// customAxios.defaults.headers.common['Authorization'] = 'dada'
// customAxios.defaults.headers.get['Authorization'] = 'dada'
// customAxios.defaults.baseURL = '....'

customAxios.interceptors.request.use((request) => {
  console.log('Request send', request);
  request.headers.Authorization = "123456789";
  request.url = request.url + "?start=0&_limit=5";
  return request;
});

customAxios.interceptors.response.use((AxiosResponse) => {

  console.log("Response received", AxiosResponse);
  AxiosResponse.data = AxiosResponse.data.map((value) => {
    return {...value, id: String(value.id).padStart(10,'0')}
    
  })
  return AxiosResponse;
});
export default customAxios;
