import Service from './Service';
const singleton = new Service('/api/v1');

let service = {
  Service,
  service: singleton,
  request: singleton.request.bind(singleton)
};

export default service;
