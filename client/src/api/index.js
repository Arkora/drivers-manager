import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' })

export const signup = (user) => API.post('/user/register',user)
export const login = (user) => API.post('/user/login',user)
export const addCar = (car) =>API.post('/car/add',car)
export const getCars = () => API.get('/car')
export const addValues = (values) =>API.post('/car/add_values',values)
export const deleteCar = (id) =>API.delete(`/car/delete/${id}`)
export const fetchUser = (id)=>API.get(`/user/${id}`)
export const fetchReport = (query) => API.get(`user/report/?start=${query.start}&end=${query.end}`)
export const updateMetric = (id,metric) => API.patch(`/car/update/metric/${id}`,metric)
export const deleteMetric = (id) => API.delete(`/car/delete/metric/${id}`)
