import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Card = ({ contact }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-300 hover:shadow-lg transition">
      <p className="flex items-center">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(contact.name)}&background=random`}
          alt={contact.name}
          className="w-5 rounded-full border object-cover"
        />
        <h3 className="font-semibold text-lg text-gray-800 mx-2">{contact.name}</h3>
      </p>
      <p><FontAwesomeIcon icon={faEnvelope}  /><p className="text-gray-600 inline mx-2">
{contact.email}</p></p>
      <p><FontAwesomeIcon icon={faPhone} /><p className="text-gray-600 inline mx-2">
{contact.phone}</p></p>
    </div>
  );
};

export default Card;
