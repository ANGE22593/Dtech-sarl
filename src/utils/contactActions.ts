
export const contactActions = () => {
  const openMapLocation = () => {
    window.open('https://maps.google.com/?q=Abidjan,Côte+d\'Ivoire', '_blank');
  };

  const sendEmail = () => {
    window.location.href = 'mailto:angenguettia615@gmail.com';
  };

  const callPhone = () => {
    window.location.href = 'tel:+2250566030079';
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2250566030079', '_blank');
  };

  return {
    openMapLocation,
    sendEmail,
    callPhone,
    openWhatsApp
  };
};
