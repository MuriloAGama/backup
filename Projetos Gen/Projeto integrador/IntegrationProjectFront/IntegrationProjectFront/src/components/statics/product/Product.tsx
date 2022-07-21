import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import CardProducts from '../../cardProducts/CardProducts';
import './Product.css'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import useLocalStorage from 'react-use-localstorage';


function Product() {

  const [valueFeira, setValueFeira] = React.useState('NULL');
  const [valueOrdenar, setValueOrdenar] = React.useState('Default');
  const [valuePesquisa, setValuePesquisa] = React.useState('');

  const [valueFeiraStorage, setValueFeiraStorage] = useLocalStorage('StorageFeira');
  const [valueOrdenarStorage, setValueOrdenarStorage] = useLocalStorage('StorageOrdenar');
  const [valuePesquisaStorage, setValuePesquisaStorage] = useLocalStorage('StoragePesquisa');

  useEffect(() => {
    setValueFeiraStorage(valueFeira)
    setValueOrdenarStorage(valueOrdenar)
    setValuePesquisaStorage(valuePesquisa)
  }, [valueFeira, valueOrdenar, valuePesquisa]);

  const handleChangeFeira = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueFeira((event.target as HTMLInputElement).defaultValue);
  };

  const handleChangeOrdenar = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueOrdenar((event.target as HTMLInputElement).value);
  };

  function pegaSearch(event: React.ChangeEvent<HTMLInputElement>){
    setValuePesquisa((event.target as HTMLInputElement).value);
  }

  return (
    <>
      <Navbar />

      <h3 className='titleProduct'>Nossos<span className='colortitle'> Produtos</span></h3>

      <form id='search-form'>
          <label htmlFor="searc-box" className='fas fa-search'></label>
          <input type="search" id='search-box' placeholder='buscar produtos...' onChange={pegaSearch} />
      </form>

      <div className='listAndCard'>
        <div className='listOrder'>
          <div>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"><h2 className='feiraH2'>Nossa Feira</h2></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={valueFeira}
                onChange={handleChangeFeira}
              >
                <FormControlLabel value="NULL" control={<Radio />} label="Todos" />
                <FormControlLabel value="Fruits" control={<Radio />} label="Frutas" />
                <FormControlLabel value="Vegetables" control={<Radio />} label="Verduras" />
                <FormControlLabel value="EggsAndMeat" control={<Radio />} label="Ovos e carnes" />
                <FormControlLabel value="GroceryStore" control={<Radio />} label="Mercearia" />
                <FormControlLabel value="DrinksAndDairy" control={<Radio />} label="Bebidas e laticínios" />
                <FormControlLabel value="BodyAndHouse" control={<Radio />} label="Corpo e Casa" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className='listOrder'>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label"><h2 className='orderH2'>Ordenar</h2></FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={valueOrdenar}
                onChange={handleChangeOrdenar}
              >
                <FormControlLabel value="Default" control={<Radio />} label="Qualquer" />
                <FormControlLabel value="MinorPrice" control={<Radio />} label="Menor preço" />
                <FormControlLabel value="MajorPrice" control={<Radio />} label="Maior preço" />
                <FormControlLabel value="Alphabetical" control={<Radio />} label="Alfabética" />


              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <Container className='screenProduct'>
          <CardProducts />
        </Container>
      </div>

      <Footer />

    </>
  );
}

export default Product;