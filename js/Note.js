
class men{
    name;
    lastname;
    age;
    correct=1;
    constructor(){
        this.name=document.getElementById('name').value;
        //document.getElementById('name').value.replace('');
        this.lastname=document.getElementById('last-name').value;
        //document.getElementById('last-name').value.replace('');
        this.age=document.getElementById('age').value;
        //document.getElementById('age').value.replace('0');
        
        if (!this.name.trim().length>0||!this.lastname.trim().length>0){
            this.correct=0;
        }
    }
}

class Note{
    hobby=[];
    correct=1;
    constructor(){
       document.getElementsByName('hobb').forEach(l=>{
           if (l.value.trim().length>0){
               this.hobby.push(l.value);
           }
       });
      
        if (this.hobby.length==0){
            this.correct=0;
        }

    }
}

