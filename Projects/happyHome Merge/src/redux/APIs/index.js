import { store } from '../Store';
import axios from "axios"
var base64 = require('base-64');
function dispatch(action) {
  store.dispatch(action);
}
//completed
export async function signup(name, email, pass, navigation) {
  // const params = {
  //  username:"Testings",
  // //  first_name:"",
  // //  last_name:"",
  //  email:"A2Z-Testing12s@gmail.com",
  //  password:"Abcd@1234",
  //  role:[
  //       "subscriber"
  //   ]
  // };
  let username = 'admin';
  let password = 'N%Cb&j(6T89@dov3EUpy';
  let formdata = new FormData();
  let headers = new Headers();

  formdata.append('email', email);
  formdata.append('username', name);
  formdata.append('password', pass);
  console.log(formdata);
  headers.append(
    'Authorization',
    'Basic ' + base64.encode(username + ':' + password),
  );
  fetch('https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/wp/v2/users', {
    method: 'POST',
    headers: headers,
    body: formdata,
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson, '<--Result');
      if (responseJson?.data == null) {
        alert(responseJson?.message)
      }

      else {

        navigation.navigate('Login')
      }
    })
    .catch(error => {
      console.error(error);
    });
  // axios
  //     .post(
  //       'https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/wp/v2/users',

  //       {
  //         auth: {
  //           username: 'admin',
  //           password: 'N%Cb&j(6T89@dov3EUpy',
  //         },
  //       },
  //       params
  //     )
  //     .then(function (response) {
  //       console.log('Authenticated', response);
  //     })
  //     .then(function (response) {
  //       console.log('Authenticated', response);
  //     })
  //     .catch(function (error) {
  //       console.log('Error on Authentications');
  //     });
  // const data= axios.post(`https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/wp/v2/users`, params, {
  //   headers: {'Content-Type': 'application/json'},
  //   auth: {
  //     username: 'admin',
  //     password: `N%Cb&j(6T89@dov3EUpy`,
  //   }
  // })
  // .then(async (response) => {
  //   console.log(response,"RESPONS")
  // })
  // const data = await fetchApi('users', params);
  // console.log(data,"DATA");
  // // loaderStop()
  // if (data?.status == 1) {
  //   console.log('signup-->', data);
  //   Toast.show({
  //     text1: data?.message,
  //     type: 'success',
  //     visibilityTime: 3000,
  //   });

  //   NavService.navigate('VerifyOtp', data?.data?.user_id);
  // } else {
  // }
}


export async function login(email, pass, navigation) {

  let username = 'admin';
  let password = 'N%Cb&j(6T89@dov3EUpy';
  let formdata = new FormData();
  let headers = new Headers();
  if (!email && !pass) {
    alert("Please fill all fields")
  }
  else {


    formdata.append('username', email);
    formdata.append('password', pass);
    console.log(formdata);
    headers.append(
      'Authorization',
      'Basic ' + base64.encode(username + ':' + password),
    );
    fetch('https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/jwt-auth/v1/token', {
      method: 'POST',
      headers: headers,
      body: formdata,
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson, '<--Result Login');
        //  dispatch({type:'user', payload:responseJson})
        navigation.navigate('Home')
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export async function getProducts(parent) {

  const data = await axios.get(
    `https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/wc/v3/products/categories?parent=144&consumer_key=ck_5d4c1766060ed5681402f73dd027a4a5a507ea1c&consumer_secret=cs_0ac5a1025944f0b9b0b0ee606b3ff6d4817807c2`
  )
  // fetch(`https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/wc/v3/products/categories?parent=144&consumer_key=ck_5d4c1766060ed5681402f73dd027a4a5a507ea1c&consumer_secret=cs_0ac5a1025944f0b9b0b0ee606b3ff6d4817807c2`, {
  //     method: 'GET',
  //   })
  console.log("Product data--->", data)
  return data?.data


}

export async function getBrandCategories() {

  const data = await axios.get(
    `https://wpstaging.a2zcreatorz.com/Happy-home/wp-json/wc/v3/products/categories?per_page=100&consumer_key=ck_5d4c1766060ed5681402f73dd027a4a5a507ea1c&consumer_secret=cs_0ac5a1025944f0b9b0b0ee606b3ff6d4817807c2`
  )

  console.log("Brand data--->", data)
  return data?.data


}
