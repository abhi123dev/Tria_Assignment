import React from 'react';
import Card from './Card';

const Contacts = ({ contacts }) => {
  if (contacts.length === 0) {
    return <p className="text-gray-500 text-center mt-4">No contacts found.</p>;
  }

  return (
    <div className="grid gap-3 p-4 sm:grid-cols-2 md:grid-cols-3">
      {contacts.map(contact => (
        <Card key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;