const btn =document.getElementById('launch-btn');
const loading=document.getElementById('loading-data');
const details=document.getElementById('launch-details');
const error_msg=document.getElementById('error');

btn.addEventListener('click',()=>{
    loading.style.display='block';
    details.style.display='none';
    error_msg.innerText="";
    fetch('https://api.spacexdata.com/v4/launches/latest')
    .then((response)=>{
        if(!response.ok){
            throw new Error("failed to Fetch");
            return response.json();
        }
    })
    .then((data)=>{
        document.getElementById('mission-name').onpointerenter=data.name;
        document.getElementById('launch-date').innerText= new Date(data.date_utc).toLocaleString;
        document.getElementById('details').innerText=data.details || "No details available";
        details.style.display='block';
    })
    .catch((error)=>{
        error_msg.innerText="Error: "+error.message;
    })
    .finally(()=>{
        loading.style.display='none';
    });
});