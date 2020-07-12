const url = 'https://rickandmortyapi.com/api/';

const getCharacters = async (page = 1, name = null) => {
  try {
    let params = `page=${page}`;
    params += name ? `&name=${name}` : '';
    console.log(`${url}character/?${params}`);
    const response = await fetch(`${url}character/?${params}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
module.exports = {getCharacters};
