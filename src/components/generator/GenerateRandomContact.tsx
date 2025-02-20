import React, { useState } from "react";

interface Contact {
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
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(false);

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
  };

  return (
    <div>
      <button onClick={generateContact} disabled={loading}>
        {loading ? "Generating..." : "Generate Contact"}
      </button>
      {contact && (
        <p>
          <strong>{contact.name}</strong> - {contact.number}
        </p>
      )}
    </div>
  );
};

export default GenerateRandomContact;
