import React from 'react';
import {Link} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    return (
      <PageDefault>
          <h1> Página de Cadastro de Categoria</h1>

          <Link to='cadastro/categoria'>
              Ir para home
          </Link>    
      </PageDefault>
    );
  }
  
  export default CadastroCategoria;