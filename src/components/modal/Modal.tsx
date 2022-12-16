import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SyntheticEvent, useState } from 'react';
import './Modal.css';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectDescription: string;
};

export const HireMeModal = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
  });

  return (
    <div className="modal-background">
      <div className="modal">
        <h2>hire me</h2>
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
              value={formData.email}
              placeholder="john.doe@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <input
            type="tel"
            value={formData.phone}
            placeholder="(123) 456-7890"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <textarea
            value={formData.projectDescription}
            placeholder="A short project description..."
            onChange={(e) =>
              setFormData({ ...formData, projectDescription: e.target.value })
            }
          />
          <button type="submit" className="btn-plain bg-purple">
            Submit <FontAwesomeIcon icon={faLongArrowAltRight} />
          </button>
        </form>
      </div>
    </div>
  );
};
