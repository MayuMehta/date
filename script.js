        let no=document.getElementById('no');
        let yes=document.getElementById('yes');
        let fix=document.getElementById('fix');
        let please=document.getElementById('please');
        let thank=document.getElementById('thank');

        let date=document.getElementById('date');
        let time=document.getElementById('time');
        let body=document.getElementById('body');
        let main=document.getElementById('main');

        let head=document.getElementById('header');
        

       yes.addEventListener("click",function(){
            no.style.display="none";
            yes.style.display="none";
            fix.style.display="block";
            please.style.display="none"
            thank.style.display="inline";
            head.style.display="none";
       }) 
       
        no.addEventListener("mouseover",function(){
            let i=Math.floor(Math.random()*500)+1;
            let j=Math.floor(Math.random()*50)+1;
            no.style.left=i+"px";
            no.style.top=j+"px";
        })
        no.addEventListener("click",function(){
            let i=Math.floor(Math.random()*500)+1;
            let j=Math.floor(Math.random()*50)+1;
            no.style.left=i+"px";
            no.style.top=j+"px";
        })

        document.getElementById('done').addEventListener('click',function(){
            console.log(date);
            if(date=="null"){
                alert("Date to btao...");
            }else{
                alert("Okay❤️");
                console.log(date);
                body.style.background="url('https://media0.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif?cid=ecf05e47h2tjd6k0ixxxebyo8khe27ug89hnx82dr2pqzav8&ep=v1_gifs_search&rid=giphy.gif&ct=g')";
                body.style.backgroundRepeat = "no-repeat";
                body.style.backgroundPosition = "center";
                body.style.backgroundSize = "cover";
                main.style.display="none";
            }   
        })
