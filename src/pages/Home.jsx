import { useSelector } from "react-redux";
import { HomeTitle, HomeWrapper } from "./Pages.styled";
import { getTheme } from "redux/selectors";

export default function Home() {
  const theme = useSelector(getTheme)


    return (
      <HomeWrapper  className="home__wrapper" >
        <HomeTitle theme = {theme} >
         React-phonebook  
        </HomeTitle>
        <span>web application that allows users to store and manage their contacts, <br /> providing features for adding, editing, and deleting contact information</span>

      </HomeWrapper>
    );
  }