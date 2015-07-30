

export function element(include = []) {
  return {include: include.join(',')};
}

export function collection(filter = [],
  sort = [], start = '', limit = '', include = []) {
  return {
    include: include.length ? include.join(',') : '',
    filter: filter.length ? filter.join(',') : '',
    sort: sort.length ? sort.join(',') : '',
    start,
    limit
  };
}

export function spreadPrefix(prefix, object) {
  return Object.keys(object).reduce((prefixed, key) => {
    prefixed[`${prefix}_${key}`] = object[key];
    return prefixed;
  }, {});
}
