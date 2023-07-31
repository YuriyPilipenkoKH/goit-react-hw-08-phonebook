import { Translation } from "react-i18next";
import { HomeTitle, HomeWrapper } from "./Pages.styled";
import CommentComponent from "components/CommentComponent/CommentComponent";


export default function Home() {
 
    return (
      <HomeWrapper  >
        <HomeTitle  >
         React-phonebook  
        </HomeTitle>
        <span>web application that allows users to store and manage their contacts, <br /> providing features for adding, editing, and deleting contact information</span>

        <div>
      <h1>
        <Translation>{(t) => t("appTitle")}</Translation>
      </h1>
      <p>
        <Translation>{(t) => t("welcomeMessage")}</Translation>
      </p>
    </div>

    <CommentComponent></CommentComponent>

      </HomeWrapper>
    );
  }