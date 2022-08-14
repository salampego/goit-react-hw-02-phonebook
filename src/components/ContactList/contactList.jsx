export const ContactList = visibleContact => {
  const { contact, deleteContact } = visibleContact;
  return (
    <ul>
      {contact.map(data => {
        return (
          <li key={data.id} className="list-contact">
            {data.name} : {data.number}
            <button
              type="button"
              onClick={() => deleteContact(data.id)}
              className="btn-delete"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
