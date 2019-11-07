
// ***** START OF DEFINITION FOR FUNCTIONS WHICH USING TO CALL API *****
function callApiService() {};
callApiService.Post = function (url, params) {
  return fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
  })
  .then(function (response) {
      return response.json();
  })
  .catch(function (error) {
      console.log("CallApiService Post Error === " + error);
  });
}

callApiService.Get = function (url) {
  return fetch(url, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(function (response) {
      return response.json();
  })
  .catch(function (error) {
      console.log("CallApiService Get Error === " + error);
  });
}

callApiService.GetWithParams = function (url, params, group_by) {
  if (group_by === null || group_by === "" || typeof group_by === "undefined") {
    group_by = '';
}
  let objectToString = JSON.stringify(params).substring(2, ((JSON.stringify(params).length) - 1)).replace(/"/g, "");
  let urlHead = url + '?' + objectToString.replace(/:/g, "=") + group_by;
  return fetch(urlHead, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  })
  .then(function (response) {
      return response.json();
  })
  .catch(function (error) {
      console.log("CallApiService GetWithParams Error === " + error);
  });
}

callApiService.GetWithParamsAuthencation = function (url, params, token, group_by) {
  if (group_by === null || group_by === "" || typeof group_by === "undefined") {
      group_by = '';
  }
  let objectToString = JSON.stringify(params).substring(2, ((JSON.stringify(params).length) - 1)).replace(/"/g, "");
  let urlHead = url + '?' + objectToString.replace(/:/g, "=") + group_by;
  return fetch(urlHead, {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
      },
  })
  .then(function (response) {
      return response.json();
  })
  .catch(function (error) {
      console.log("CallApiService GetWithParams Error === " + error);
  });
}

callApiService.PostToken = function (url, token, params) {
  return fetch(url, {
      method: 'POST',
      headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(params),
  })
  .then(function (response) {
      return response.json();
  })
  .catch(function (error) {
      console.log("CallApiService Post Error === " + error);
  });
}

callApiService.GetWithAuthencation = function (url, token) {
  return fetch(url, {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
      },
  })
  .then(function (response) {
      return response.json();
  })
  .catch(function (error) {
      console.log('CallApiService.GetWithAuthencation Error === ' + error);
  });
}