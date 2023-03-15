import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import monedas from '../data/monedas';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {
  const [criptos, setCriptos] = useState([]);

  const [moneda, SelectMonedas] = useSelectMonedas('Elije tu Moneda', monedas);
  const [cripto, SelectCriptos] = useSelectMonedas('Elije tu Cripto', criptos);

  // ~ Traer Info de criptos de la API
  useEffect(() => {
    const consultarAPI = async () => {
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const response = await axios.get(URL);

      const arrCriptos = response.data.Data.map((cripto) => {
        return { id: cripto.CoinInfo.Name, nombre: cripto.CoinInfo.FullName };
      });
      setCriptos(arrCriptos);
    };
    consultarAPI();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([moneda, cripto].includes('')) return Swal.fire({ title: 'Todos los campos son obligatorios', icon: 'error' });

    setMonedas({ moneda, cripto });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectMonedas />
      <SelectCriptos />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
