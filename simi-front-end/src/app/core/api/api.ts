export const usersSIMI = async () => {

  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), 5000);
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer +MqsmgrjjDsAIMIrhDKr1mRnsbCzj2E2o/hQaaMbDZCa+rBm5StUrE/kCMXIFlCyMsS/5YZ5uoinS4O3NTVeYdMDgufgyKAsbE4Vp6Fn9ITZ0J1c4Y/ZMoXPStrsu1Tmx2WvyGGb6ZH2ezKWsXMsB4fr+uTyAQui6SW8FocK2kv+vZVhMkk9Ye7MurhpvMHbPlppU9isqLNm7m+yRwJkK62xi4kNBMTNiCSvSrTJ53XnVFvePcznDgsey/fzN2SKGW2ynRYSMdXBWnl+Sck8Aw==");


  const respo = await fetch("http://172.19.3.143:8055/users/1a401e8e-daba-4cd8-93d2-f1417e5cc9e6?fields=*", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "es-419,es",
      "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYxNmRiNTMzLTc2NWItNDAzMC1hNmZkLTA1N2EwNTRkNTM4OCIsInJvbGUiOiJlOTRkNmI5Yy02M2JjLTRkNzEtOTAyYS1kZTU3MjJiNjg3ZmEiLCJhcHBfYWNjZXNzIjoxLCJhZG1pbl9hY2Nlc3MiOjAsImlhdCI6MTcxMjA3MTY4MCwiZXhwIjoxNzEyMDcyNTgwLCJpc3MiOiJkaXJlY3R1cyJ9.VT4mOX1nQEpIfbeyoY1N_QBiBKRKsmJOeqCox38hQq4",
      "if-none-match": "W/\"284-tgz2PRrpVyLxydsamEB+oOQSr/o\"",
      "sec-gpc": "1"
    },
    "referrer": "http://172.19.3.143:8055/admin/content/Convocatorias/e0e76af0-ea26-4794-a58f-e5705ab212ab",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "no-cors",
    "credentials": "include"
  });


    const fixRespon = await respo.text()


    console.log({fixRespon});

    return fixRespon;

}
