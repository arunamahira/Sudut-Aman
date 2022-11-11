const videos = [
    {
      id: 1,
      title: 'Apa Itu HKSR/SRHR?',
      subTitle: 'Buat teman-teman yang mungkin bertanya-tanya HKSR itu apa sih? Kenapa Sudut Aman kok menggembar-gemborkan hal ini?',
      imageLink: 'https://img.freepik.com/free-vector/flat-people-group-asking-questions_23-2148927481.jpg?w=996&t=st=1668062838~exp=1668063438~hmac=f70b7b15cd09e7346c34b6588645afdcec5f8ce38ed40b346e545ea2710a83a3',
      content: '<p>tes tes tes bunyi hujan</p>',
      videoLink: 'https://www.youtube.com/embed/jsnusO0T2-0',
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
      videoLink: 'https://www.youtube.com/embed/uFekBQ18CXU',
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
      videoLink: 'https://www.youtube.com/embed/ITRdvGnplLU',
      createdAt: '22 Jan 2022',
      author: 'Youtube',
      imageAuthorLink: 'https://img.freepik.com/free-photo/people-emotions-lifestyle-leisure-beauty-concept-upbeat-happy-cheerful-asian-girl-dancing-having-fun-partying-moving-rhythm-music-smiling-yellow-background_1258-58916.jpg?w=996&t=st=1668062699~exp=1668063299~hmac=a3b80ff238e63e1cae2c1eb9a9172f5e4e73fce39d89e9b3455f2d997c6ee4e5'
    },
  ]

let id="1"

  const query= window.location.search
   
    console.log(query,"query")
    if (query) {
        id= query.substring(4)
    }

  console.log(id, "id")
  
  const elementVideo=document.getElementById("video.js")

  const findVideo=videos.find(el=> el.id == id) 
  if (findVideo) {
    elementVideo.innerHTML= `
    
    <div class="container">
        <h1>${findVideo.title}</h1>

          <!-- garis -->
          <!-- <div class="horizontal_line"></div> -->
          <hr style="border-bottom: 5px solid; color: #F76D6D; border-width: 10px; ">

   
          <br>
          <iframe width="600" height="550" src="${findVideo.videoLink}" class="card-img-top" alt="video in here">
          <br>
          <br>

         ${findVideo.subTitle}
    </div>
    

    <div class="container">
        <div class="card mb-3" style="width: 25rem;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${findVideo.imageAuthorLink}"class="img-fluid rounded-start" 
                width="200" 
                height="200"
                alt="author image" >
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" style="font: size 5px;">Penulis</h5>
                  <p class="card-text">${findVideo.author}</p>
                  <p class="card-text"><small class="text-muted">Created At: ${findVideo.createdAt}</small></p>
                </div>
              </div>
            </div>
          </div>
    </div>
    `
  } else {
    elementVideo.innerHTML= "video not found"
  }