async function getData(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve({
        name : '정명우',
        id : 'tccelestyn'
      });
    }, 1500);
  })
}

//await
async function printData() {
  const data = await getData()
  console.log(data)
}

printData()