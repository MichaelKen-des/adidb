
class myinterface{
    myBarChart;
    done=0;;

    constructor(){
        document.getElementById('add-hobb').addEventListener('click', ()=>{
            event.preventDefault();
            this.AddHobbi();
        } );

        document.getElementById('add-note').addEventListener('click', AddNote);

        document.getElementById('display').addEventListener('click', (x)=>{
            event.preventDefault();
            if (!this.done){
            let data={
                labels:[],
                value:[],
                color:[],
              }
           GenerateData(data);
           this.display(data);
           this.done=1;
            }
        } 
        );
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

    display(data){
        document.getElementById('analit').classList.remove('invis');
        let ctx = document.getElementById('analit').getContext('2d');

        this.myBarChart = new Chart( ctx, {
        type: 'doughnut',
        data: {
            labels:data.labels,
            datasets: [{
                label:"Hobby",
                backgroundColor:data.color,
                borderColor: 'rgb(100,130,132)',
                data:data.value,
            }]
        },
        //options: options
    });
    }

}

let forem=new myinterface;

