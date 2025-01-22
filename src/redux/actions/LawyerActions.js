export const bookAppointment = (firmId, lawyerId, appointment) => {
  return (dispatch, getState) => {
    const { firms } = getState();
    console.log("Current State:", firms);

    const updatedFirms = firms.map((firm) => {
      if (firm.id === firmId) {
        const updatedLawyers = firm.lawyers.map((lawyer) => {
          if (lawyer.id === lawyerId) {
            if (lawyer.availability > 0) {
              return {
                ...lawyer,
                appointments: [...lawyer.appointments, appointment],
                availability: lawyer.availability - 0.5, 
              };
            } else {
              alert("Appointment not available");
              return lawyer;
            }
          }
          return lawyer;
        });
        return { ...firm, lawyers: updatedLawyers };
      }
      return firm;
    });

    console.log("Updated State:", updatedFirms);

    dispatch({ 
      type: "UPDATE_LAWYERS", 
      payload: updatedFirms,
    });
  };
};
