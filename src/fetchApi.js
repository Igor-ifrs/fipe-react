const fetchApi = (url, t) => {
  console.log(t);

  const URLS = {
    tipos: `https://parallelum.com.br/fipe/api/v1/${url.tipos}/marcas`,
    marcas: `https://parallelum.com.br/fipe/api/v1/${url.tipos}/marcas/${url.marcas}/modelos`,
    modelos: `https://parallelum.com.br/fipe/api/v1/${url.tipos}/marcas/${url.marcas}/modelos/${url.modelos}/anos`,
    anos: `https://parallelum.com.br/fipe/api/v1/${url.tipos}/marcas/${url.marcas}/modelos/${url.modelos}/anos/${url.anos}`,
  };
  //get api aqui
  console.log(URLS[t]);
};

export default fetchApi;
