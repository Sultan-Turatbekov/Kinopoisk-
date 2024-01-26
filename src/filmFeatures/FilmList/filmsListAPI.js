import API from '../../requester';

export const getFilmsAPI = async () => {
  const response = await API.get('api/v2.2/films/top', {
    params: { type: 'TOP_100_POPULAR_FILMS' },
  });
  return response.data;
};

export const getFilmsBySearchAPI = async (search) => {
  const response = await API.get('api/v2.1/films/search-by-keyword', {
    params: { keyword: search },
  });
  console.log(response.data);
  return response.data;
};
