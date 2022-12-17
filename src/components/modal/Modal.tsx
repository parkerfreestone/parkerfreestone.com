import { faLongArrowAltRight, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './Modal.css';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
};

interface HireMeModalProps {
  setOpen: (isOpen: boolean) => void;
}

export const HireMeModal = ({ setOpen }: HireMeModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
  });

  return (
    <div className="modal-background">
      <div className="modal">
        <div className="modal-header">
          <h2>hire me</h2>
          <button onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
        <form className="modal-form">
          <div className="form-group">
            <label htmlFor="name">name:</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              placeholder="John Doe"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              placeholder="john.doe@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="(123) 456-7890"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="pj">project description:</label>
            <textarea
              value={formData.projectDescription}
              name="pj"
              placeholder="A short project description..."
              onChange={(e) =>
                setFormData({ ...formData, projectDescription: e.target.value })
              }
            />
          </div>

          <button type="submit" className="btn-plain bg-purple">
            Submit <FontAwesomeIcon icon={faLongArrowAltRight} />
          </button>
        </form>
      </div>
    </div>
  );
};
