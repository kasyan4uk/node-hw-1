const { Command } = require('commander');
const { listContacts, getContactById, removeContact, addContact } = require("./contacts");

const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
          const showContacts = await listContacts();
          console.table(showContacts);
      break;

    case 'get':
          const getID = await getContactById(id);
          console.table(getID);
      break;

    case 'add':
          const createContact = await addContact(name, email, phone);
          console.log(createContact);
      break;

    case 'remove':
          const deleted = await removeContact(id);
          console.table(deleted);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);








































// const fullList = listContacts();
// fullList.then(function (result) { 
//     console.log(result)
// });

// const getID = getContactById("AeHIrLTr6JkxGE6SN-0Rw");
// getID.then(function (result) { 
//     console.log(result)
// });

// const remove = removeContact("AeHIrLTr6JkxGE6SN-0Rw");
// remove.then(function (result) { 
//     console.log(result)
// });

// const add = addContact("serhii", "dawdawdaw", "234324");
// add.then(function (result) { 
//     console.log(result)
// });



