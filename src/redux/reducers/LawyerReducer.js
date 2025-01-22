import { lawFirms } from "../../mockData";

const initialState = lawFirms;

export const lawyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LAWYERS":
      return {
          ...state,
          firms: action.payload,
      };
    default:
      return state;
  }
};



// state.map(firm => {
//   if (firm.id === action.payload.firmId) {
//     return {
//       ...firm,
//       lawyers: firm.lawyers.map(lawyer =>
//         lawyer.id === action.payload.lawyerId
//           ? { ...lawyer, appointments: [...lawyer.appointments, action.payload.appointment] }
//           : lawyer
//       )
//     };
//   }
//   return firm;
// });
