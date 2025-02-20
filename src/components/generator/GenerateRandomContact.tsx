import React, { useState } from "react";
import { GeneratorWrap } from "./GenerateRandomContact.styled";
import { ContactFormBtn } from "../forms/Form.styled";
import { FlatButton } from "../button/Button";
import { CgCloseO } from "react-icons/cg";
import { useAll } from "../../hooks/useAll";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { rmGenContact, setGenContact } from "../../redux/generator/generatorSlice";

export interface Gen_Contact {
  name: string;
  number: string;
}


const generateRandomPhoneNumber = () => {
  const prefixes = ["095", "066", "068", "099", "098"];
  const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const randomNumber = Math.floor(Math.random() * 10000000).toString().padStart(7, "0");
  return `${randomPrefix}${randomNumber}`;
};

const GenerateRandomContact: React.FC = () => {
  const [contact, setContact] = useState<Gen_Contact | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch()


  const fetchRandomName = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return `${data.results[0].name.first} ${data.results[0].name.last}`;
    } catch (error) {
      console.error("Error fetching random name:", error);
      return "Unknown";
    } finally {
      setLoading(false);
    }
  };

  const generateContact = async () => {
    const name = await fetchRandomName();
    const number = generateRandomPhoneNumber();
    setContact({ name, number });
    dispatch(setGenContact({ name, number }))
  };
  const clear = () => {
    setContact(null)
    dispatch(rmGenContact())
  }

  return (
    <GeneratorWrap>
      <ContactFormBtn onClick={generateContact} disabled={loading}>
        {loading ? "Generating..." : "Generate Contact"}
      </ContactFormBtn>
      {contact && (
        <p className="flex">
          <strong>{contact.name}</strong>
          <span>{contact.number}</span>
          <button
          onClick={ clear }
          className="close shut">
            {/* <CgCloseO /> */}
          </button>
        </p>
      )}
    </GeneratorWrap>
  );
};

export default GenerateRandomContact;
