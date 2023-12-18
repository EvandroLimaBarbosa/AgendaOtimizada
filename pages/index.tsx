import { useState } from 'react';

type Row = {
  horario: string;
  cliente: string;
  servico: string;
  valor: string;
  bairro: string;
  endereco: string;
  contato: string;
  vendedor: string;
  origem: string;
};

export default function Agenda() {
  const [rows, setRows] = useState<Row[]>([
    {
      horario: '08:00',
      cliente: 'João Silva',
      servico: 'Montagem de móveis',
      valor: 'R$200',
      bairro: 'Centro',
      endereco: 'Rua das Flores, 123',
      contato: '(41) 12345-6789',
      vendedor: 'Maria',
      origem: 'Loja ABC',
    },
    // Adicione mais dados de exemplo conforme necessário
  ]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRows = [...rows];
    newRows[index].horario = e.target.value;
    setRows(newRows);
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    horário
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    cliente
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    serviço
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    valor
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    bairro
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    endereço
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    contato
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    vendedor
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    origem
                  </th>
                  {/* Adicione mais cabeçalhos de coluna conforme necessário */}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">
                    <input placeholder='Horário' type="text" className="text-sm text-gray-900 bg-white" value={row.horario} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                    <td className="px-6 py4 whitespace-nowrap">
                      <input placeholder='Cliente' type="text" className="text-sm text-gray-900 bg-white" value={row.cliente} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                    <td className="px-6 py4 whitespace-nowrap">
                      <input placeholder='Serviço' type="text" className="text-sm text-gray-900 bg-white" value={row.servico} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                    <td className="px-6 py4 whitespace-nowrap">
                      <input placeholder='Valor' type="text" className="text-sm text-gray-900 bg-white" value={row.valor} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                    <td className="px-6 py4 whitespace-nowrap">
                      <input placeholder='Bairro' type="text" className="text-sm text-gray-900 bg-white" value={row.bairro} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                    <td className="px-6 py4 whitespace-nowrap">
                      <input placeholder='Endereço' type="text" className="text-sm text-gray-900 bg-white" value={row.endereco} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                    <td className="px-6 py4 whitespace-nowrap">
                      <input placeholder='Contato' type="text" className="text-sm text-gray-900 bg-white" value={row.contato} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                    <td className="px-6 py4 whitespace-nowrap">
                      <input placeholder='Vendedor' type="text" className="text-sm text-gray-900 bg-white" value={row.vendedor} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                    <td className="px-6 py4 whitespace-nowrap">
                      <input placeholder='Origem' type="text" className="text-sm text-gray-900 bg-white" value={row.origem} onChange={(e) => onChangeInput(e, i)}></input>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
