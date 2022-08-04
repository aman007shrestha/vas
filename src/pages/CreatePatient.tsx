import React from 'react';
import CreatePatientForm from '../components/CreatePatientForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

/**
 * @desc isAdmin bool checks the action is performed by user or admin
 * @returns view for create patient
 */
const CreatePatient = () => {
  const { isAdmin } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <CreatePatientForm isAdmin={isAdmin} />
    </>
  );
};

export default CreatePatient;
