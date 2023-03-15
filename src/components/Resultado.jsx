import styled from '@emotion/styled';

const ResultadoContainer = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
`;
const Parrafo = styled.div`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.div`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ cotizacion }) => {
  const { PRICE, HIHGHGAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion;
  return (
    <ResultadoContainer>
      <img src={`https://cryptocompare.com/${IMAGEURL}`} alt="ImgCrypto" />
      <Precio>
        El precio es de: <span>{PRICE}</span>
      </Precio>
      <Parrafo>
        Precio más alto del día: <span>{HIHGHGAY}</span>
      </Parrafo>
      <Parrafo>
        Precio más bajo de día: <span>{LOWDAY}</span>
      </Parrafo>
      <Parrafo>
        Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </Parrafo>
      <Parrafo>
        Última actualizacion: <span>{LASTUPDATE}</span>
      </Parrafo>
    </ResultadoContainer>
  );
};

export default Resultado;
