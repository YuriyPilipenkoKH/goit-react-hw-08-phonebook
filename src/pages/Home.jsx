import { HomeTitle, HomeWrapper } from "./Pages.styled";


export default function Home() {
 
    return (
      <HomeWrapper  >
        <HomeTitle  >
         React-phonebook  
        </HomeTitle>
        <span>web application that allows users to store and manage their contacts, <br /> providing features for adding, editing, and deleting contact information</span>

      </HomeWrapper>
    );
  }