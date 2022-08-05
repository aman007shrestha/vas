import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: #f9f9f9;
  background-image: linear-gradient(
    to right,
    #fdfbfb,
    #ebedee,
    #fdfcfb,
    #e2d1c3
  );
`;
export const Content = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NavLeft = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.85);
`;
export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  .nav__link {
    color: rgba(0, 0, 0, 0.85);
  }
  .logout__btn {
    padding: 3px 15px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
