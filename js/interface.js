
class myinterface{
    constructor(){
        document.getElementById('add-hobb').addEventListener('click', ()=>{
            event.preventDefault();
            this.AddHobbi();
        } );

        document.getElementById('add-note').addEventListener('click', AddNote);

        document.getElementById('display').addEventListener('click', (x)=>{
            event.preventDefault();
            let labels=[];
            let value=[];
            GenerateData(labels,value);
            let start=100;let color=[];
            for(let i=0;i<labels.length;i++){
                color.push(`rgb(${start},${start-40},${start-10})`);
                start+=50;
            }
            this.display(labels,value,color);
            document.getElementById('analit').classList.remove('invis');
        } );
    }

    AddHobbi(){
       
        const newhob=document.createElement('div');
        newhob.classList.add('form-row');
         newhob.innerHTML=
         `<div class="form-row">
                 <label for="hobb">Hobbi</label>
                 <input name="hobb" type="text">
             </div>`;
    
        document.getElementById("rows").append(newhob);
    }


    display(labels,value,color){
    let ctx = document.getElementById('analit').getContext('2d');

    let myBarChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels:labels,
        datasets: [{
            label:"Hobby",
            backgroundColor:color,
            borderColor: 'rgb(100,130,132)',
            data:value,
        }]
    },
    //options: options
});
    }

}

let forem=new myinterface;
