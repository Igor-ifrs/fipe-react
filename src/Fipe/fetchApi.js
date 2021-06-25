const fetchApi = async (urlParams, role) => {
  const BASEULR = `https://parallelum.com.br/fipe/api/v1/`;
  const URLS = {
    tipos: `${BASEULR}${urlParams.tipos.value}/marcas`,
    marcas: `${BASEULR}${urlParams.tipos.value}/marcas/${urlParams?.marcas?.value}/modelos`,
    modelos: `${BASEULR}${urlParams.tipos.value}/marcas/${urlParams?.marcas?.value}/modelos/${urlParams.modelos?.value}/anos`,
    anos: `${BASEULR}${urlParams.tipos.value}/marcas/${urlParams?.marcas?.value}/modelos/${urlParams?.modelos?.value}/anos/${urlParams.anos?.value}`,
    resultado: "",
  };

  console.info({ url: URLS[role], target: urlParams[role].target });

  try {
    const req = await fetch(URLS[role]);
    if (req.status === 200) {
      const result = await req.json();

      if (role === "marcas") {
        return { [urlParams[role].target]: result[urlParams[role].target] };
      }

      return { [urlParams[role].target]: result };
    }
  } catch (e) {
    console.warn(e.message);
    return null;
  }
};

export default fetchApi;
