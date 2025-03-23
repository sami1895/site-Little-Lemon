import React from 'react';
import './ConfirmedBooking.css'; // Import du fichier CSS

const ConfirmedBooking = () => {
  // Fonction pour gérer le retour à l'accueil
  const handleReturnToHome = () => {
    // Rediriger vers l'accueil (exemple avec react-router-dom)
    window.location.href = '/';
  };

  return (
    <div className="confirmed-booking">
      <h2>Réservation confirmée !</h2>
      <p>Votre réservation a été confirmée avec succès. Nous avons hâte de vous accueillir !</p>
      
      <div className="buttons">
        <button onClick={handleReturnToHome}>Retour à l'accueil</button>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
