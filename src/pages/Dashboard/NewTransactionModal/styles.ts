import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body)
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background-color: var(--green);

    margin-top: 1.5rem;

    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--shape);

    border-radius: 0.25rem;
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }    
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface IRadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}


const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<IRadioBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  transition: border-color 0.2s;

  background-color: ${props => props.isActive
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };
  
  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title)
  }
`;
