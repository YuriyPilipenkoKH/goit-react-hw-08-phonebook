import styled from '@emotion/styled';

export const StyledSearchingForm = styled('form')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;


& > label  {
    display: flex;
    gap: 5px;

  & > input{
        outline: none;
        width: 280px;
/*   
        padding: 6px 90px 6px 16px;
        border: 2px solid #999;
        border-radius: 6px; */
  }  
}
& > .search_btn_wrap{
    position: absolute;
    right: 20px;
    top: 8px;
    display: flex;
    gap: 8px;

    &> button{
        outline: none;
        border: none;
        cursor: pointer;
    }  
  &> button > svg {
    fill: #01050a;
  }  
}

& > .shut{
    position: absolute;
    right: 4px;
    top: 1px;
    width: 12px;
    height: 12px;
    background-color: #f05f05;
    border-radius: 50%;
    border: 2px solid #999;
    cursor: pointer;
}
`
