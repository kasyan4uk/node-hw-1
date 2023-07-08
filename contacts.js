const fs = require('fs/promises');  
const path = require('node:path');
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join('db', 'contacts.json');

const writeContacts = async (contacts) => { 
    return await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};

const listContacts = async () => {
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
    if (index === -1) {
        return null;
    }
    const removedContact = contacts.splice(index, 1);

    await writeContacts(contacts);

    return removedContact;
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
    await writeContacts(contacts);

    return newContact;
};

module.exports = {listContacts, getContactById, removeContact, addContact};