import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface patientInformationInterface {
  birthDate: string;
  address: {
    cityName: string;
    stateName: string;
    streetName: string;
  };
  email: string;
  ethnicity: string;
  firstName: string;
  lastName: string;
  gender: string;
  paymentInfo: {
    insuranceProvider: string;
    insuranceId: number;
    memberId: number;
  };
  document: File;
}

const initialPatientInformation = {
  birthDate: '',
  address: {},
  email: '',
  ethnicity: '',
  firstName: '',
  lastName: '',
  gender: '',
  paymentInfo: {},
  document: {} as File,
};

/**
 * @desc a slice for storing patientInformation
 */
const patientInformationSlice = createSlice({
  name: 'patientInformationSlice',
  initialState: {
    data: initialPatientInformation,
  },
  reducers: {
    /**
     *
     * @param state patient information
     * @param action payload contains data from form
     */
    setPatientInformation: (
      state: { data: {} },
      action: PayloadAction<patientInformationInterface>
    ) => {
      state.data = action.payload;
      // API call to services for database interaction
    },
    resetPatientInformation: (state: { data: {} }) => {
      state.data = initialPatientInformation;
    },
  },
});

export const { setPatientInformation, resetPatientInformation } =
  patientInformationSlice.actions;
export default patientInformationSlice.reducer;
