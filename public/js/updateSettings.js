// UPDATE DATA

import axios from 'axios';
import { showAlert } from './alert';

//type is password or data
export const updatSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : '/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type} updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
