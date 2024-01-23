import axios from 'axios';
import { showAlert } from './alert';

// export const signup = async (data) => {
//   try {
//     const res = await axios({
//       method: 'POST',
//       url: 'api/v1/users/signup',
//       data: qs.stringify(data),
//       withCredentials: false,
//     });

//     console.log(res);
//     if (res.data.status === 'success') {
//       showAlert('success', 'Saving new profil and Logg in successfully!');
//       window.setTimeout(() => {
//         location.assign('/');
//       }, 1500);
//     }
//   } catch (err) {
//     showAlert('error', err.response.data.message);
//   }
// };

// export const signup = async (name, email, password, passwordConfirm) => {
//   try {
//     await axios({
//       method: 'POST',
//       url: 'api/v1/users/signup',
//       name,
//       email,
//       password,
//       passwordConfirm,
//     });

//     if (res.data.status === 'succes' || res.data.status === 'success') {
//       showAlert('success', `${type.toUpperCase()} updated successfully!`);
//       window.setTimeout(() => {
//         window.location.replace('/me');
//       }, 1000);
//     }
//   } catch (err) {
//     showAlert('error', err.response.data.message);
//     console.log(err.response.data.message);
//   }
// };

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    console.log(name, email, password, passwordConfirm);
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });
    if (res.data.status === 'succes' || res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
      window.setTimeout(() => {
        window.location.replace('/me');
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
    console.log(err.response.data.message);
  }
};
