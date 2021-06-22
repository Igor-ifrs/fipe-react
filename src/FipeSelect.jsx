import React, { useEffect, useState } from "react";
import fetchApi from "./fetchApi";

const _initialState = {
  tipos: [
    { value: "carros", name: "Carro" },
    { value: "caminhaos", name: "Caminhão" },
    { value: "motos", name: "Moto" },
  ],
  marcas: [{ value: 1, name: "ACURA" }],
  modelos: [{ value: 1, name: "INTEGRA GS" }],
  anos: [{ value: "1992-1", name: "1992 Gasolina" }],
  resultado: {},
};
const _initialUrl = {
  tipos: "",
  marcas: "",
  modelos: "",
  anos: "",
  resultado: "",
};

export default function FipeSelect(props) {
  const [automovel, setAutomovel] = useState(_initialState);
  const [url, setUrl] = useState(_initialUrl);

  const handlerselect = function (e) {
    e.currentTarget.disabled = true;
    setUrl((url[props.populeList] = e.currentTarget.value));
    fetchApi(url, props.populeList);
  };

  return (
    <>
      <select name={props.name} onChange={handlerselect}>
        <option selected={true} disabled={true}>
          {props.disabledOption}
        </option>

        {automovel[props.populeList].map(function (opt) {
          return (
            <option value={opt.value} key={opt.value}>
              {opt.name}
            </option>
          );
        })}
      </select>
    </>
  );
}
