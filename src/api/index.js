export const getAllStudentsData =  fetch('https://api.myjson.com/bins/1dlper')
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
  // Create and append the li's to the ul
  console.log('get data', data);
  return data
  })

