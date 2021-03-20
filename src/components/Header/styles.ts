import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--blue-light);
    height: 3rem;
    line-height: 24px;
    color: var(--shape);
    border: none;
    padding: 0 2rem;
    border-radius: 0.25rem;

    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

