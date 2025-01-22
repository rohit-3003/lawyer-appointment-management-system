import { lawFirms } from "../../mockData"

export const fetchFirms = () => async (dispatch) => {
    const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ data: lawFirms }), 1000)
    );

    dispatch({ type: "UPDATE-LAWYERS", payload: response.data });
};