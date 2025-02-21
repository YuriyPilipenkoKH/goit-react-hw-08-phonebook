import styled from '@emotion/styled';

export const StyledSearchingForm = styled('form')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;


& > label  {
    display: flex;
    flex-direction: column;
    gap: 12px;

  & > input{
        outline: none;
        width: 260px;
/*   
        padding: 6px 90px 6px 16px;
        border: 2px solid #999;
        border-radius: 6px; */
  }  
}
& > .search_btn_wrap{
    position: absolute;
    right: 30px;
    top: 8px;
    display: flex;
    gap: 5px;

    &> button{
        outline: none;
        border: none;
        background: transparent;
        cursor: pointer;
    }  
  &> button > svg {
    fill: #01050a;
  }  
}

& > .shut{
    position: absolute;
    right: 14px;
    top: 1px;
    width: 12px;
    height: 12px;
    background-color: #f05f05;
    border-radius: 50%;
    border: 2px solid #999;
    cursor: pointer;
}
`
