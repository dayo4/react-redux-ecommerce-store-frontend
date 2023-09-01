import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
const devMode = process.env.NODE_ENV === 'development'

const config = {
  baseURL: process.env.REACT_APP_BASE,
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)
_axios.defaults.headers.common['Authorization'] = 'Bearer ' + process.env.REACT_APP_APPTOKEN

_axios.interceptors.request.use(
    function (config) {
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (devMode)
      console.log(response)

    return response
  },

  /* if error */
  function ({ response }) {
    if (devMode)
      console.log(response)

    return Promise.reject(response)
  }
)

export default _axios