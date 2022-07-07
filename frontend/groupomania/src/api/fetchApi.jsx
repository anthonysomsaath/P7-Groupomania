const config ={
    BASE_API : "http://localhost:3300/api/"
}
export default function fetchApi(path, page, requestOptions) {
    if (page) {
      const result = fetch(
        config + path + "?" + new URLSearchParams({ page: page }),
        requestOptions
      );
      return result;
    } else {
      const result = fetch(config + path, requestOptions);
      return result;
    }
  }