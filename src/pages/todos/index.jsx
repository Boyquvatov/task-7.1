import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { nanoid } from 'nanoid';
import "./index.css"

const Index = () => {
  const [cards, setCards] = useState([
    { id: nanoid(), name: "Card1", status: "status1" },
    { id: nanoid(), name: "Card2", status: "status2" },
    { id: nanoid(), name: "Card3", status: "status3" },
    { id: nanoid(), name: "Card4", status: "status4" }
  ]);  

  const [modal, setModal] = useState(false);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('status1');
  const [cardIdToUpdate, setCardIdToUpdate] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
    if (!modal) {
      setName('');
      setStatus('status1');
    }
  };

  const handleAddCard = () => {
    if (!name || !status) {
      alert('Please fill in all fields');
      return;
    }
    const newCard = {
      id: nanoid(),
      name: name,
      status: status
    };
    setCards([...cards, newCard]);
    toggleModal();
  };

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter(card => card.id !== id);
    setCards(updatedCards);
  };

  const handleUpdateCard = (id) => {
    const cardToUpdate = cards.find(card => card.id === id);
    if (!cardToUpdate) {
      // Karta topilmadi
      return;
    }
    setCardIdToUpdate(id);
    setName(cardToUpdate.name); // Nomni inputga yozishni o'chirib tashlash uchun o'zgartirish
    setStatus(cardToUpdate.status);
    toggleModal();
  };
  

  const handleUpdate = () => {
    const updatedCards = cards.map(card => {
      if (card.id === cardIdToUpdate) {
        return {
          ...card,
          name: name,
          status: status
        };
      }
      return card;
    });
    setCards(updatedCards);
    toggleModal();
  };

  return (
    <div className='contanier'>
      {['status1', 'status2', 'status3', 'status4'].map((status, index) => (
        <div className="row" key={index}>
          {cards.filter(card => card.status === status).map((card, index) => (
            <div key={index}>
                <div className="col-md-5">
                  <div className="card">
                    <div className="card-header">{status}</div>
                    <div className="card-body">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>T/r</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cards.filter(card => card.status === status).map((card, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{card.name}</td>
                              <td>{card.status}</td>
                              <td >
                                <button className="btn btn-danger my-2" onClick={() => handleDeleteCard(card.id)}>Delete</button>
                                <button className="btn btn-primary m-2" onClick={() => handleUpdateCard(card.id)}>Update</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="card-footer">
                      <button className="btn btn-success" onClick={toggleModal}>Add</button>
                    </div>
                  </div>
                </div>
              </div>
          ))}
        </div>
      ))}
      <Modal isOpen={modal} toggle={toggleModal} className='modal-dialog'>
        <ModalHeader toggle={toggleModal}>{cardIdToUpdate ? 'Update Card' : 'Add Card'}</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select className="form-control" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
              {['status1', 'status2', 'status3', 'status4'].map((status, index) => (
                <option key={index} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          <Button color="primary" onClick={cardIdToUpdate ? handleUpdate : handleAddCard}>{cardIdToUpdate ? 'Update' : 'Add'}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Index;
