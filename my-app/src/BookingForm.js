import React from 'react';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
  });

  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = 'La date est requise.';
    } else if (new Date(formData.date) < new Date()) {
      newErrors.date = 'La date doit être dans le futur.';
    }

    if (!formData.time) {
      newErrors.time = 'L\'heure est requise.';
    }

    if (!formData.guests) {
      newErrors.guests = 'Le nombre de convives est requis.';
    } else if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Le nombre de convives doit être entre 1 et 10.';
    }

    if (!formData.occasion) {
      newErrors.occasion = 'Veuillez sélectionner une occasion.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Formulaire de réservation">
      <fieldset>
        <legend>Réserver une table</legend>

        {/* Champ Date */}
        <label htmlFor="date">Date :</label>
        <input
          id="date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="dateError"
        />
        {errors.date && <p id="dateError" className="error">{errors.date}</p>}

        {/* Champ Heure */}
        <label htmlFor="time">Heure :</label>
        <input
          id="time"
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="timeError"
        />
        {errors.time && <p id="timeError" className="error">{errors.time}</p>}

        {/* Champ Nombre de convives */}
        <label htmlFor="guests">Nombre de convives :</label>
        <input
          id="guests"
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          min="1"
          max="10"
          aria-required="true"
          aria-describedby="guestsError"
        />
        {errors.guests && <p id="guestsError" className="error">{errors.guests}</p>}

        {/* Champ Occasion */}
        <label htmlFor="occasion">Occasion :</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
          aria-required="true"
          aria-describedby="occasionError"
        >
          <option value="">Sélectionnez une occasion</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="dîner">Dîner</option>
          <option value="réunion">Réunion</option>
        </select>
        {errors.occasion && <p id="occasionError" className="error">{errors.occasion}</p>}

        {/* Bouton de soumission */}
        <button type="submit" aria-label="Réserver la table">
          Réserver
        </button>
      </fieldset>
    </form>
  );
};

export default BookingForm;
