import styled from '@emotion/styled';

const ResultadoContainer = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;
const Imagen = styled.img`
  width: 120px;
`
const Parrafo = styled.div`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.div`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ cotizacion }) => {
  console.log(cotizacion);
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion;
  return (
    <ResultadoContainer>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="ImgCrypto" />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Parrafo>
          Precio más alto del día: <span>{HIGHDAY}</span>
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
      </div>
    </ResultadoContainer>
  );
};

export default Resultado;
