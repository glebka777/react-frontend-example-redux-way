export const OPEN_MODAL = 'OPEN MODAL';
export const CLOSE_MODAL = 'CLOSE MODAL';


export const openModal = data => {
  return {
    type: OPEN_MODAL,
    data
  }
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
};