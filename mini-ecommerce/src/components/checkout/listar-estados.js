import React from 'react';

function ListarEstados() {

  const estados = [
    { 'sigla': '',   'nome': 'Selecione o estado' },
		{ 'sigla': 'AC', 'nome': 'Acre (AC)' },
		{ 'sigla': 'AL', 'nome': 'Alagoas (AL)' },
		{ 'sigla': 'AP', 'nome': 'Amapá (AP)' },
		{ 'sigla': 'AM', 'nome': 'Amazonas (AM)' },
		{ 'sigla': 'BA', 'nome': 'Bahia (BA)' },
		{ 'sigla': 'CE', 'nome': 'Ceará (CE)' },
		{ 'sigla': 'DF', 'nome': 'Distrito Federal (DF)' },
		{ 'sigla': 'ES', 'nome': 'Espírito Santo (ES)' },
		{ 'sigla': 'GO', 'nome': 'Goiás (GO)' },
		{ 'sigla': 'MA', 'nome': 'Maranhão (MA)' },
		{ 'sigla': 'MT', 'nome': 'Mato Grosso (MT)' },
		{ 'sigla': 'MS', 'nome': 'Mato Grosso do Sul (MS)' },
		{ 'sigla': 'MG', 'nome': 'Minas Gerais (MG)' },
		{ 'sigla': 'PA', 'nome': 'Pará (PA)' },
		{ 'sigla': 'PB', 'nome': 'Paraíba (PB)' },
		{ 'sigla': 'PR', 'nome': 'Paraná (PR)' },
		{ 'sigla': 'PE', 'nome': 'Pernambuco (PE)' },
		{ 'sigla': 'PI', 'nome': 'Piauí (PI)' },
		{ 'sigla': 'RJ', 'nome': 'Rio de Janeiro (RJ)' },
		{ 'sigla': 'RN', 'nome': 'Rio Grande do Norte (RN)' },
		{ 'sigla': 'RS', 'nome': 'Rio Grande do Sul (RS)' },
		{ 'sigla': 'RO', 'nome': 'Rondônia (RO)' },
		{ 'sigla': 'RR', 'nome': 'Roraima (RR)' },
		{ 'sigla': 'SC', 'nome': 'Santa Catarina (SC)' },
		{ 'sigla': 'SP', 'nome': 'São Paulo (SP)' },
		{ 'sigla': 'SE', 'nome': 'Sergipe (SE)' },
		{ 'sigla': 'TO', 'nome': 'Tocantins (TO)' }
  ];

  return estados.map(estado =>
    <option
      key={estado.sigla}
      value={estado.sigla}
      data-testid={estado.sigla}>
      {estado.nome}
    </option>
  );

}

export default ListarEstados;
