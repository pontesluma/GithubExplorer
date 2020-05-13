import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: #666;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 40px;
    font-family: Roboto;

    li {
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        font-size: 18px;
        color: #6c6c80;
        margin-top: 4px;
      }

      & + li {
        margin-left: 80px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }
  }

  div {
    flex: 1;
    margin-left: 16px;
    margin-right: 16px;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      margin-top: 4px;
      font-size: 18px;
      color: #a8a8b3;
    }
  }

  svg {
    margin-left: auto;
  }
`;
