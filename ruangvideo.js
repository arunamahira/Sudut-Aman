const videos = [
    {
      id: 1,
      title: 'Sex vs Gender',
      subTitle: 'tes tes 123 yaya lala',
      imageLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      content: '<p>tes tes tes bunyi hujan</p>',
      videoLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '22 Jan 2022',
      author: 'Raisa',
      imageAuthorLink: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      title: 'title video',
      subTitle: 'sub title dari video',
      imageLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      content: '<p> yayayayayaa</p>',
      videoLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '22 Jan 2022',
      author: 'Raisa',
      imageAuthorLink: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      title: 'title video',
      subTitle: 'sub title dari video',
      imageLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      content: '<p>lalalalala</p>',
      videoLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '22 Jan 2022',
      author: 'Raisa',
      imageAuthorLink: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      title: 'title video',
      subTitle: 'sub title dari video',
      imageLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      content: '<p>lalalalala</p>',
      videoLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '22 Jan 2022',
      author: 'Raisa',
      imageAuthorLink: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      title: 'title video',
      subTitle: 'sub title dari video',
      imageLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      content: '<p>lalalalala</p>',
      videoLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '22 Jan 2022',
      author: 'Raisa',
      imageAuthorLink: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      title: 'title video',
      subTitle: 'sub title dari video',
      imageLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      content: '<p>lalalalala</p>',
      videoLink: 'https://plus.unsplash.com/premium_photo-1664008446775-83cf7631e71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      createdAt: '22 Jan 2022',
      author: 'Raisa',
      imageAuthorLink: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
  ]

// function getVideos() {
//   videos.forEach((bebas) => {
//     console.log (bebas)
//   })
// }

// getVideos()

function showVideos() {
  // panggil function getVideos
  //const content = GetVideos(keyword)
  let contentVideos = ""
  
  // panggil element html dengan id="list-video"
  const elListData = document.getElementById("list-videos")
  // console.log(elListData, '<<<<')

  // proses looping untuk isi data element html
  videos.forEach((element => {
    contentVideos += `
      <div class="col">
        <div class="card">
          <img src="${element.imageLink}" class="card-img-top" alt="img-none">
          <div class="card-body">
            <h2 class="text-center card-title">${element.title}</h2>
            <p class="text-center card-text">${element.content}</p>
            <img src="="${element.imageAuthorLink}" class="card-authorpic" alt="img-none" <h6 class="text card-authorname">${element.author}</h6>
          </div>
        </div>
      </div>
    `
  }))
  
  // menambahkan hasil looping ke element html
  elListData.innerHTML = contentVideos
  return contentVideos
}

showVideos()

console.log ("connect")