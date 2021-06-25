import React, { useState, useEffect } from "react";
import fetchApi from "./fetchApi";

const _initialValue = {
  tipos: [
    { codigo: "carros", nome: "Carro" },
    { codigo: "caminhaos", nome: "Caminhão" },
    { codigo: "motos", nome: "Moto" },
  ],
  marcas: [],
  modelos: [],
  anos: [],
  resultado: null,
};
const _disabled = {
  tipos: false,
  marcas: true,
  modelos: true,
  anos: true,
};
export default function FipeSelect() {
  console.log("RENDER COMPONNENT");
  const [automovel, setAutomovel] = useState(_initialValue);
  const [urlPart, setUrlPart] = useState(null);
  const [role, setRole] = useState(null);
  const [ganbi, setGanbi] = useState(_disabled);
  function handler(e) {
    setGanbi({
      ...ganbi,
      [e.target.name]: !ganbi[e.target.name],
      [e.target.dataset.target]: !ganbi[e.target.dataset.target],
    });
    setUrlPart({
      ...urlPart,
      [e.target.name]: {
        select: e.target.name,
        value: e.target.value,
        target: e.target.dataset.target,
      },
    });
    setRole(e.target.name);
  }

  useEffect(() => {
    if (urlPart) {
      console.log("USER EFFECT");
      (async () => {
        const result = await fetchApi(urlPart, role);
        setAutomovel({ ...automovel, ...result });
      })();
    }
    return () => {};
  }, [urlPart, role]);

  function optionsRender(optionlist) {
    console.log("RENDER OPTIONS");
    return optionlist.map((option) => {
      return (
        <option key={option.codigo} value={option.codigo}>
          {option.nome}
        </option>
      );
    });
  }
  function reset() {
    setAutomovel(_initialValue);
    setUrlPart(null);
    setRole(null);
    setGanbi(_disabled);
  }
  function resultado(resultado) {
    if (resultado) {
      return (
        <div className="resultado">
          <span>Valor : {resultado.Valor}</span>
          <span>Marca : {resultado.Marca}</span>
          <span>Modelo : {resultado.Modelo}</span>
          <span>Ano : {resultado.AnoModelo}</span>
          <span>Combustível : {resultado.Combustivel}</span>
          <span>Cod. FIPE : {resultado.CodigoFipe}</span>
          <span>Refêrencia : {resultado.MesReferencia}</span>
          <button onClick={reset}>NOVA PESQUISA</button>
        </div>
      );
    }
  }
  return (
    <>
      <select disabled={ganbi.tipos} value={"DEFAULT"} data-target="marcas" name="tipos" onChange={handler}>
        <option value="DEFAULT" disabled selected>
          Selecione tipo de veículo
        </option>
        {optionsRender(automovel.tipos)}
      </select>

      <select disabled={ganbi.marcas} value={"DEFAULT"} data-target="modelos" name="marcas" onChange={handler}>
        <option value="DEFAULT" disabled selected>
          Selecione a marca do veículo
        </option>
        {optionsRender(automovel.marcas)}
      </select>

      <select disabled={ganbi.modelos} value={"DEFAULT"} data-target="anos" name="modelos" onChange={handler}>
        <option value="DEFAULT" disabled selected>
          Selecione o modelo do veículo
        </option>
        {optionsRender(automovel.modelos)}
      </select>

      <select disabled={ganbi.anos} value={"DEFAULT"} data-target="resultado" name="anos" onChange={handler}>
        <option value="DEFAULT" disabled selected>
          Selecione o ano do veículo
        </option>
        {optionsRender(automovel.anos)}
      </select>
      {resultado(automovel.resultado)}
      <a href="https://github.com/Igor-ifrs/fipe-react">GITHUB</a>
    </>
  );
}
