
  let dbReq=indexedDB.open('ADB', 1);;
  let db;

  dbReq.onupgradeneeded = (event) => {
    // Зададим переменной db ссылку на базу данных
    db = event.target.result;
    // Создадим хранилище объектов с именем Notes.
    db.createObjectStore('Notes', {Keypath:"hobby"});
    console.log("Creat DB");
    };
    

    dbReq.onsuccess = (event) => {
    // Зададим переменной db ссылку на базу данных
    db = event.target.result;
    console.log("There is DB");
    };
    
    dbReq.onerror = (event) => {
    //Выдаем ошибку 
    alert('error opening database ' + event.target.errorCode);
    };

    function Clear(){
        let trans = db.transaction(['Notes'], 'readwrite');
        let store = trans.objectStore('Notes');
        store.clear();
      
        trans.oncomplete = () => {
            console.log('Storege is clear !')
          }
        
          trans.onerror = (event) => {
            console.log('Error cleaning storege ' + event.target.errorCode);
        }
    }

    let persone;

    let hobbylist;

    function AddNote(){
        let trans = db.transaction(['Notes'], 'readwrite');
        let store = trans.objectStore('Notes');

        //let req = store.openCursor();

        person= new men;

        hobbylist= new Note;

        if (!person.correct||!hobbylist.correct){
          console.log("Incorrect Note");
          return
        }

        hobbylist.hobby.forEach(h=>{
          let req=store.get(h);

          req.onsuccess=(event)=>{
            let cn=event.target.result;
            if (!cn){
              cn=[];
            }
            cn.push(person);
            store.put(cn,h);
          }
          
          req.onerror = (event) => {
            console.log('Error getting note ' + event.target.errorCode);
          }
          
        })

        trans.oncomplete = () => {
            console.log('Added successfully!')
          }
        
          trans.onerror = (event) => {
            console.log('Error adding note ' + event.target.errorCode);
        }
    }

    let labels=[];
    let value=[];

  function GenerateData(){
      let tx = db.transaction(['Notes'], 'readonly');
      let store = tx.objectStore('Notes');
      labels.clear();
      value.clear();
  // Создать запрос курсора
  let req = store.openCursor();
  req.onsuccess = (event) => {
    // Результатом req.onsuccess в запросах openCursor является
     // IDBCursor
    let cursor = event.target.result;
    if (cursor != null) {
      // Если курсор не нулевой, мы получили элемент.
      labels.push(cursor.key);
      value.push(cursor.value.length);
      cursor.continue();
    }
  }
  req.onerror = (event) => {
    alert('error in cursor request ' + event.target.errorCode);
  }
    }

