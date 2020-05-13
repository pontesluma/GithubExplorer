import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RouterParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RouterParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>47</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>64</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/repository/">
          <div>
            <strong>rocketseat/unform</strong>
            <p>sdfsf</p>
          </div>
          <FiChevronRight size={20} color="#cbcbd6" />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
