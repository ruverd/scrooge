import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    height: 8.5rem;

    background: var(--shape);
    border: none;
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500; 
      line-height: 3rem;
    }
  }

  div:last-child {
    background: var(--green);
    color: var(--shape);
  }
`;
