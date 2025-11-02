import './App.css';
import Search from './components/Search';
import Contacts from './components/ContactsList';
import Header from './components/Header';
import Footer from './components/Footer';
import AddContact from './components/AddContact';
import { useState } from 'react';

function App() {

  const [contacts, setContacts] = useState([
    { id: 1, name: 'Abhijeet', email: 'abhijeet@abc.com', phone: '9876543210' },
    { id: 2, name: 'Rahul', email: 'rahul@abc.com', phone: '9876543211' },
    { id: 3, name: 'Utkarsh', email: 'utkarsh@abc.com', phone: '9876543212' },
    { id: 4, name: 'Aryan', email: 'aryan@abc.com', phone: '9876543213' },
    { id: 5, name: 'Anurag', email: 'anurag@abc.com', phone: '9876543214' },
  ]);

  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const [showModal, setShowModal] = useState(false);

  const addContact = (newContact) => {
    const id = contacts.length + 1;
    setContacts([...contacts, { id, ...newContact }]);
    setShowModal(false);
  };
  return (
    <div className={`flex flex-col min-h-screen bg-blue-50 relative ${showModal ? "overflow-hidden" : ""}`}>
      <Header />
      <main className="flex-grow relative">
  <Search search={search} setSearch={setSearch} />
  <button
    onClick={() => setShowModal(true)}
    className="bg-blue-500 text-white ml-4 px-4 py-2 rounded-md shadow hover:bg-blue-600 transition hover:cursor-pointer mb-4"
  >
    Add Contact
  </button>
  <Contacts contacts={filteredContacts} />
</main>
      <Footer />
      {showModal && (
        <AddContact
          onClose={() => setShowModal(false)}
          addContact={addContact}
        />
      )}
    </div>
  );
}

export default App;
