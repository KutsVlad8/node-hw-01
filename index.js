const contacts = require("./contacts");

const { program } = require("commander");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contactsList = await contacts.listContacts();
      return console.log(contactsList);
    case "get":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "update":
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      return console.log(updateContact);

    case "remove":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);

    default:
      return console.log("Unknow action");
  }
};

program
  .option("--action,<type>")
  .option("--id,<type>")
  .option("--name,<type>")
  .option("--email,<type>")
  .option("--phone,<type>");

program.parse();

const options = program.opts();
invokeAction(options);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
// action: "add",
// name: "Vlad",
// email: "kuts@gmail.com",
// phone: "(073)423-49-06",
// });
// invokeAction({
//   action: "update",
//   id: "Yq3cdNbkRa1zswCC9PmTZ",
//   name: "Nazar",
//   email: "kuts@gmail.com",
//   phone: "(073)423-49-06",
// });
// invokeAction({ action: "remove", id: "Yq3cdNbkRa1zswCC9PmTZ" });
