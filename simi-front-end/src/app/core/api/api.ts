// export const usersSIMI = async () => {

//   const controller = new AbortController();
//   const timerId = setTimeout(() => controller.abort(), 5000);
//   const myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer +MqsmgrjjDsAIMIrhDKr1mRnsbCzj2E2o/hQaaMbDZCa+rBm5StUrE/kCMXIFlCyMsS/5YZ5uoinS4O3NTVeYdMDgufgyKAsbE4Vp6Fn9ITZ0J1c4Y/ZMoXPStrsu1Tmx2WvyGGb6ZH2ezKWsXMsB4fr+uTyAQui6SW8FocK2kv+vZVhMkk9Ye7MurhpvMHbPlppU9isqLNm7m+yRwJkK62xi4kNBMTNiCSvSrTJ53XnVFvePcznDgsey/fzN2SKGW2ynRYSMdXBWnl+Sck8Aw==");


//   const respo = await fetch("http://172.19.3.143:8055/users/1a401e8e-daba-4cd8-93d2-f1417e5cc9e6?fields=*", {
//     "headers": {
//       "accept": "application/json, text/plain, */*",
//       "accept-language": "es-419,es",
//       "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMjA3MTY4MCwiZXhwIjoxNzEyMDcyNTgwLCJpc3MiOiJkaXJlY3R1cyJ9.VT4mOX1nQEpIfbeyoY1N_QBiBKRKsmJOeqCox38hQq4",
//       "if-none-match": "W/\"284-tgz2PRrpVyLxydsamEB+oOQSr/o\"",
//       "sec-gpc": "1"
//     },
//     "referrer": "http://172.19.3.143:8055/admin/content/Convocatorias/e0e76af0-ea26-4794-a58f-e5705ab212ab",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": null,
//     "method": "GET",
//     "mode": "no-cors",
//     "credentials": "include"
//   });


//     const fixRespon = await respo.text()


//     console.log({fixRespon});

//     return fixRespon;

// }

export const getposter = async (token:string) => {
/**
 * trae la imagen del poster
 */
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), 5000);
  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json, text/plain, */*");
  myHeaders.append("accept-language", "es-419,es");
  // myHeaders.append("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMjE2NTA5MiwiZXhwIjoxNzEyMTY1OTkyLCJpc3MiOiJkaXJlY3R1cyJ9.KvVqaqRaDq5iwkcGA04NnK23n34upys_1ByWcESoZGg");
  myHeaders.append("authorization", `Bearer ${token}`);
  myHeaders.append("if-none-match", "W/\\\"5f5-0lal4BdCHcVhoueKfZt3a3VfwE0\\");
  myHeaders.append("sec-gpc", "1");
  myHeaders.append("Cookie", "directus_refresh_token=RJc5qM097qsaqZzfk-Yx1ZXpN7_nXySW-1ISg9742Q9-gQn3yDrSoYVvmfp_fvVI");


  const respo = await fetch("http://172.19.3.143:8055/files/9a2c7a09-9237-4da1-bfca-04af426a340c?fields[]=id&fields[]=title&fields[]=width&fields[]=height&fields[]=filesize&fields[]=type&fields[]=filename_download&fields[]=modified_on",
  {
    method: "GET",
    headers: myHeaders,
    signal: controller.signal,
    redirect: "follow",
    mode: "no-cors"
  })/*
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => clearTimeout(timerId)); */
  console.log({respo});
  return respo

}

export const get_Estados_Idea = async (token:string) => {
console.log({token});

  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), 5000);
  const myHeaders = new Headers();
  myHeaders.append("authorization", `Bearer ${token}`);
  myHeaders.append("accept", "application/json, text/plain, */*");
  myHeaders.append("accept-language", "es-419,es");
  myHeaders.append("if-none-match", "W/\\\"5f5-0lal4BdCHcVhoueKfZt3a3VfwE0\\");
  myHeaders.append("sec-gpc", "1");
  myHeaders.append("Cookie", "directus_refresh_token=CsA7UQMu1Db27tsOT8X1lJuX0dFlavktLtXOGVzyFCUjIQvy5XYqqoVAaPMiwTd8");

  const raw = `{
    "limit": "25",
    "fields[]": "Id_Estado_Idea",
    "alias[6cdaef6]": "Id_Estado",
    "alias[6dd1db8e]": "Id_Estado",
    "sort[]": "Id_Estado_Idea",
    "page": "1"
  }`;

  const respo = await fetch("http://172.19.3.143:8055/items/Estados_Idea?limit=25&fields[]=Fecha_Estado&fields[]=6cdaef6&fields[]=Id_Idea_Investigacion&fields[]=6dd1db8e.Descripcion_Valor&fields[]=Usuario_Creador.id&fields[]=Id_Estado_Idea&alias[6cdaef6]=Id_Estado&alias[6dd1db8e]=Id_Estado&sort[]=Id_Estado_Idea&page=1",
  {
    method: "GET",
    headers: {
      // 'Content-Type': 'application/json', // ejemplo de encabezado de tipo de contenido
      'Authorization': `Bearer ${token}`, // ejemplo de encabezado de autorización
      "accept": "application/json, text/plain, */*",
      "accept-language": "es-419,es",
      "if-none-match": "W/\\\"5f5-0lal4BdCHcVhoueKfZt3a3VfwE0\\",
      "sec-gpc": "1",
      // "Cookie": "directus_refresh_token=CsA7UQMu1Db27tsOT8X1lJuX0dFlavktLtXOGVzyFCUjIQvy5XYqqoVAaPMiwTd8",
    },
    // body: '',
    signal: controller.signal,
    redirect: "follow",
    mode: "no-cors"
  });
  /* .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => clearTimeout(timerId)); */

    console.log({respo});


  }



/**
 * fetch que se emplea en el login
 */
// fetch("http://172.19.3.143:8055/auth/login", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "es-419,es",
//     "content-type": "application/json",
//     "sec-gpc": "1"
//   },
//   "referrer": "http://172.19.3.143:8055/admin/login?reason=SIGN_OUT",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "{\"email\":\"rigoberto.rios@igac.gov.co\",\"password\":\"123456\",\"mode\":\"cookie\"}",
//   "method": "POST",
//   "mode": "cors",
//   "credentials": "omit"
// });


/**
 * trae convocatorias
 */
// fetch("http://172.19.3.143:8055/items/Convocatorias?limit=25&fields[]=Codigo_Convocatoria&fields[]=Id_Responsable&fields[]=Nombre_Convocatoria&fields[]=Poster_Convocatoria&fields[]=Id_Convocatoria&alias[435d3924]=Codigo_Convocatoria&alias[3fe0b2da]=Id_Responsable&alias[47b467ac]=Nombre_Convocatoria&alias[749b2f58]=Poster_Convocatoria&sort[]=Id_Convocatoria&page=1", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "es-419,es",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMjE1MzQ4MywiZXhwIjoxNzEyMTU0MzgzLCJpc3MiOiJkaXJlY3R1cyJ9.eSDugw8geUm9rEC3ybGEJplGhgNRpxm_EzDwHstXJiU",
//     "if-none-match": "W/\"5f5-0lal4BdCHcVhoueKfZt3a3VfwE0\"",
//     "sec-gpc": "1"
//   },
//   "referrer": "http://172.19.3.143:8055/admin/content/Convocatorias",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });


/**
 * convocatoria por ID
 */
// fetch("http://172.19.3.143:8055/items/Convocatorias/34e5e372-db26-4248-9a64-9bc723c8fc61", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "es-419,es",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMjE1OTIxNSwiZXhwIjoxNzEyMTYwMTE1LCJpc3MiOiJkaXJlY3R1cyJ9.m6n3rGiMjGa-YPDjispM5IP968hH_aJVLCFMAchhUDE",
//     "if-none-match": "W/\"215-2M+HeMPJ+ZvGtEOrR1uyehs7XmA\"",
//     "sec-gpc": "1"
//   },
//   "referrer": "http://172.19.3.143:8055/admin/content/Convocatorias/34e5e372-db26-4248-9a64-9bc723c8fc61",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

/***
 * userById
 */
// fetch("http://172.19.3.143:8055/users/f16db533-765b-4030-a6fd-057a054d5388?fields=*", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "es-419,es",
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMjE2MTM4NywiZXhwIjoxNzEyMTYyMjg3LCJpc3MiOiJkaXJlY3R1cyJ9.G6yoYU9XaETrcs8i1j5hNCDq3YPsvQpD0JGm5vD_ufA",
//     "if-none-match": "W/\"29d-npqN3puK04WNq84BdqcpQhUamjo\"",
//     "sec-gpc": "1"
//   },
//   "referrer": "http://172.19.3.143:8055/admin/content/Convocatorias/91d48c9b-7637-4206-8964-3b23f3c6f8fa",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });


/**
 * tipo Dominio
 */
// fetch("http://172.19.3.143:8055/items/Tipo_Dominio?limit=25&fields[]=Descripcion_Dominio&fields[]=Nombre_Tabla&fields[]=Tipo_Dominio&sort[]=Tipo_Dominio&page=1", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "es-419,es",
//     "sec-gpc": "1"
//   },
//   "referrer": "http://172.19.3.143:8055/admin/content/Tipo_Dominio",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

/**
 * Valores Dominio
 */

// fetch("http://172.19.3.143:8055/items/Valores_Dominio?limit=25&fields[]=Descripcion_Valor&fields[]=Id_Valor_Dom_Padre&fields[]=Tipo_Dominio&fields[]=Valor_Dominio&fields[]=Id_Valores_Dominio&sort[]=Id_Valores_Dominio&page=1", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "es-419,es",
//     "sec-gpc": "1"
//   },
//   "referrer": "http://172.19.3.143:8055/admin/content/Valores_Dominio",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

// fetch("http://172.19.3.143:8055/items/Estados_Idea?limit=25&fields[]=Fecha_Estado&fields[]=6cdaef6&fields[]=Id_Idea_Investigacion&fields[]=6dd1db8e.Descripcion_Valor&fields[]=Usuario_Creador.id&fields[]=Id_Estado_Idea&alias[6cdaef6]=Id_Estado&alias[6dd1db8e]=Id_Estado&sort[]=Id_Estado_Idea&page=1", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "es-419,es",
//     "if-none-match": "W/\"9e8-t2bM0STgwMmKk3Jp0c1LB9PnPhA\"",
//     "sec-gpc": "1"
//   },
//   "referrer": "http://172.19.3.143:8055/admin/content/Estados_Idea",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "include"
// });

fetch("http://172.19.3.143:8055/items/Estados_Idea?limit=25&fields[]=Fecha_Estado&fields[]=6cdaef6&fields[]=Id_Idea_Investigacion&fields[]=6dd1db8e.Descripcion_Valor&fields[]=Usuario_Creador.id&fields[]=Id_Estado_Idea&alias[6cdaef6]=Id_Estado&alias[6dd1db8e]=Id_Estado&sort[]=Id_Estado_Idea&page=1", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "es-419,es",
    "if-none-match": "W/\"9e8-t2bM0STgwMmKk3Jp0c1LB9PnPhA\"",
    "sec-gpc": "1",
    "cookie": "directus_session_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNlNjk0NTgyLWM4NmMtNDU2Yy05MTY1LTcyY2ZkOTg2NTc4MiIsInJvbGUiOiI5Y2ExZjc3Ny1iYWU0LTQ4MmItYjM5ZC1jMDgxZTM3MGIwNjMiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsInNlc3Npb24iOiJKTFZPNXo2UDRGQnRJTWU0aFFWYWNDdzRjNUpCd2ZJRTdZdTdxbi0yY3B1cnJrU2M4WWp5VldUY01NUll4RGh5IiwiaWF0IjoxNzEzODg3MDkxLCJleHAiOjE3MTM5NzM0OTEsImlzcyI6ImRpcmVjdHVzIn0.oRxvQlqwDGXibB5mZtnbm14TtijZzrpHtRW3XBt_zu0",
    "Referer": "http://172.19.3.143:8055/admin/content/Estados_Idea",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
});
