import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 100px;
  width: 50%;
  height: 100%;
  background-image: linear-gradient(#fdfcfb, #e2d1c3);
`;

export const Content = styled.div`
  width: 50%;
  .login__button::after{
    content="";
    border-button: 2px solid black;
    margin-top:2rem;
  }
  p{
    text-align: center;
  }
  .signup__button{
    display: block;
    margin: auto;
    margin-top: 20px;
    width: 150px;
  }
  .login__button{
    margin-bottom: 50px;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 10px;
  input,
  textarea,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    margin-bottom: 10px;
    font-family: inherit;
  }
  label {
    text-align: left;
    display: block;
    margin: 0 0 5px 3px;
  }
  .form__divider {
    color: #eee;
  }
`;
