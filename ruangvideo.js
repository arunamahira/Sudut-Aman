const videos = [
  {
    id: 1,
    title: 'Apa Itu HKSR?',
    subTitle: 'Buat teman-teman yang mungkin bertanya-tanya HKSR itu apa sih? Kenapa Sudut Aman kok menggembar-gemborkan hal ini?',
    imageLink: 'https://img.freepik.com/free-vector/flat-people-group-asking-questions_23-2148927481.jpg?w=996&t=st=1668062838~exp=1668063438~hmac=f70b7b15cd09e7346c34b6588645afdcec5f8ce38ed40b346e545ea2710a83a3',
    content: '<p>tes tes tes bunyi hujan</p>',
    videoLink: 'https://www.youtube.com/embed?v=snc-fAeslH4&pp=ugMICgJpZBABGAE%3D',
    createdAt: '22 Jan 2022',
    author: 'Youtube',
    imageAuthorLink: 'https://img.freepik.com/free-photo/people-emotions-lifestyle-leisure-beauty-concept-upbeat-happy-cheerful-asian-girl-dancing-having-fun-partying-moving-rhythm-music-smiling-yellow-background_1258-58916.jpg?w=996&t=st=1668062699~exp=1668063299~hmac=a3b80ff238e63e1cae2c1eb9a9172f5e4e73fce39d89e9b3455f2d997c6ee4e5'
  },
  {
    id: 2,
    title: 'Pubertas: Menstruasi dan Jerawat',
    subTitle: 'Kenapa sih kalau sedang menstruasi seringnya muncul jerawat juga?',
    imageLink: 'https://img.freepik.com/free-vector/female-reproductive-system-with-flowers_52683-46660.jpg?w=996&t=st=1668062563~exp=1668063163~hmac=edb1448cfab2a51c7daea2077f5a29f7e0817b84ad433903c053751849d0ffb5',
    content: '<p> yayayayayaa</p>',
    videoLink: 'https://youtu.be/embed/uFekBQ18CXU',
    createdAt: '22 Jan 2022',
    author: 'Youtube',
    imageAuthorLink: 'https://img.freepik.com/free-photo/people-emotions-lifestyle-leisure-beauty-concept-upbeat-happy-cheerful-asian-girl-dancing-having-fun-partying-moving-rhythm-music-smiling-yellow-background_1258-58916.jpg?w=996&t=st=1668062699~exp=1668063299~hmac=a3b80ff238e63e1cae2c1eb9a9172f5e4e73fce39d89e9b3455f2d997c6ee4e5'
  },
  {
    id: 3,
    title: 'Mengekspresikan Diri dari Sisi HKSR',
    subTitle: 'Bagaimana cara kita bisa mengekspresikan diri sebagai diri kita sendiri?',
    imageLink: 'https://img.freepik.com/free-vector/youth-day-event-with-jumping-people_23-2148600297.jpg?w=996&t=st=1668062539~exp=1668063139~hmac=ba9a1a57d3b9982b66a193ed63b0f67dfd6658e939068562f961ac511e6798dc',
    content: '<p>lalalalala</p>',
    videoLink: 'https://youtu.be/embed/ITRdvGnplLU',
    createdAt: '22 Jan 2022',
    author: 'Youtube',
    imageAuthorLink: 'https://img.freepik.com/free-photo/people-emotions-lifestyle-leisure-beauty-concept-upbeat-happy-cheerful-asian-girl-dancing-having-fun-partying-moving-rhythm-music-smiling-yellow-background_1258-58916.jpg?w=996&t=st=1668062699~exp=1668063299~hmac=a3b80ff238e63e1cae2c1eb9a9172f5e4e73fce39d89e9b3455f2d997c6ee4e5'
  },
]

  function showVideos() {

    let contentVideos = ""
    
    const elListData = document.getElementById("list-videos")
    // proses looping untuk isi data element html
    videos.forEach((element => {
      contentVideos += 
        `<div class="col">
          <div class="card">
            <img src="${element.imageLink}" class="card-img-top">
            <div class="card-body">
              <h2 class="text-center card-title">${element.title}</h2>
              <p class="text-center card-text my-4">${element.subTitle}</p>
              <div class="d-flex justify-content-center">
              <a href ="${'./video.html?id=' + element.id}" class="btn btn-default" >Yuk Baca Selengkapnya</a>
              </div>
             
            </div>
          </div>
        </div>`
      
    }))
  
    // menambahkan hasil looping ke element html
    elListData.innerHTML = contentVideos
  }
  
  showVideos()
  
  console.log ("connect")


