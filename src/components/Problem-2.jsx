import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get("https://contact.mediusware.com/api/contacts/").then(res => {
            setContacts(res.data.results);
        });
    }, []);

    const showAllContacts = () => {
        setSelectedContacts(contacts);
        setShowModal(true);
    };

    const showUsContacts = () => {
        setSelectedContacts(contacts.filter(contact => contact.country.name === "United States"));
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-lg btn-outline-primary" type="button" onClick={showAllContacts}>
                        All Contacts
                    </button>
                    <button className="btn btn-lg btn-outline-warning" type="button" onClick={showUsContacts}>
                        US Contacts
                    </button>
                </div>

                {showModal && (
                    <Modal closeModal={closeModal}>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Phone</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedContacts.map(contact => (
                                    <tr key={contact.id}>
                                        <td>{contact.id}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.country.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Modal>
                )}
            </div>
        </div>
    );
};


export default Problem2;
