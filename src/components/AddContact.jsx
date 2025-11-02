import React,{ useState } from 'react'

const AddContact = ({onClose, addContact}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) return;
        addContact({ name, email, phone });
        setName('');
        setEmail('');
        setPhone('');
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      
      <div className="bg-white p-6 rounded-xl shadow-2xl w-96 relative border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl hover:cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Add New Contact
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-3 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 mb-4 border rounded-md focus:ring-2 focus:ring-blue-400"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition hover:cursor-pointer"
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddContact