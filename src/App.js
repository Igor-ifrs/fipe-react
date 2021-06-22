import React from "react";
import FipeSelect from "./FipeSelect";

function App() {
  return (
    <div className="fipe">
      <FipeSelect
        name={"tipos-veiculo"}
        disabledOption={"Selecione o tipo de veículo"}
        populeList={"tipos"}
      ></FipeSelect>

      <FipeSelect
        name={"marcas-veiculo"}
        disabledOption={"Selecione a marca do veículo"}
        populeList={"marcas"}
      ></FipeSelect>

      <FipeSelect
        name={"modelos-veiculo"}
        disabledOption={"Selecione o modelo do veículo"}
        populeList={"modelos"}
      ></FipeSelect>

      <FipeSelect name={"ano-veiculo"} disabledOption={"Selecione o ano do veículo"} populeList={"anos"}></FipeSelect>

      <FipeSelect resultado></FipeSelect>
    </div>
  );
}

export default App;
