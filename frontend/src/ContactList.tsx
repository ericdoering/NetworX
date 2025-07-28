// import { useState } from 'react';

interface Contact {
    id: string | number;
    firstName: string;
    lastName: string;
    email: string;
}

interface ContactListProps {
    contacts: Contact[];
    updateContact: (contact: Contact) => void;
    updateCallback: () => void;
}

function ContactList({ contacts, updateContact, updateCallback }: ContactListProps) {
  return (
    <>
        <div>
            <h2>Contacts</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact: Contact) => (
                        <tr key={contact.id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>
                                <button onClick={() => updateContact(contact)}>Update</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
  );
}

export default ContactList;
