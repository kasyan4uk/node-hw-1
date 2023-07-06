const fs = require('fs/promises');  
const { v4: uuidv4 } = require('uuid');
const path = require('node:path');

const contactsPath = path.join('db', 'contacts.json');

const listContacts = async () => {
    const contactsPath = path.join('db', 'contacts.json');
    return JSON.parse(await fs.readFile(contactsPath))
};

const getContactById = async (contactId) => { 
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);

    return contact || null;
};

const removeContact = async (contactId) => { 
    const contacts = await listContacts();

    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index !== -1) {
        const deletedContact = contacts.splice(index, 1);
        return deletedContact;
    }

    return null;
};

const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
    };

    contacts.push(newContact);

    return newContact;
};

module.exports = {listContacts, getContactById, removeContact, addContact};