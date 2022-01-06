
let heading = document.createElement('h1');
heading.classList.add("display-4", "p-2", "mb-2",'bg-warning', "text-white", "font-weight-bold", "text-center");
heading.innerText = "BREWERY"
document.body.append(heading)

        let divison = document.createElement('div')
        divison.setAttribute('class','container')

        let adivison = document.createElement('div')
        adivison.setAttribute('class','row')
        adivison.setAttribute('id','data')

        divison.append(adivison)
        document.body.append(divison)
       
        //Creating a async functions
        async function foo(){
            try {
                let mydata = document.getElementById('data')
                var s1 = await fetch('https://api.openbrewerydb.org/breweries')
            //Converting Readable streams into json format
            var s2 = await s1.json();
            //Printing data in console for reference
            mydata.innerHTML = ''
         
            for(let i in s2){
                console.log(s2[i])
                //console.log('Brewery Name: '+s2[i].name)
               // console.log('Brewery type: '+s2[i].brewery_type)
               // console.log('Brewery Address: '+s2[i].street+' '+s2[i].city+' '+s2[i].state+' '+s2[i].country+' '+s2[i].postal_code)
               // console.log('Brewery Website: '+s2[i].website_url)
                //console.log('Brewery Website: '+s2[i].website_url)

                 //Assigning needed data to corresponding variable

               var Bname = s2[i].name
               var Btype = s2[i].brewery_type
               var Baddress = s2[i].street+' ,'+s2[i].city+' ,'+s2[i].state+' ,'+s2[i].country+' ,Postal-Code: '+s2[i].postal_code+'.'
               var Bweb = s2[i].website_url
               var Bphone = s2[i].phone

               //Handling null By if and giving Temporarily Unavaliable to all null's if present

               if(Bname === null){

                   Bname = "Temporarily Unavaliable"
               }

               if(Btype === null){
        
                   Btype = "Temporarily Unavaliable"
               }

               if(Baddress === null){
            
                   Baddress = "Temporarily Unavaliable"
               }

               if(Bweb === null ){
    
                   Bweb = "Temporarily Unavaliable"
               }
               

               if(Bphone === null){
                
                   Bphone = "Temporarily Unavaliable"
               }

               //creating HTML elements Dynamically using DOM
               mydata.innerHTML += `<div class="col-sm-12 box-part">

                   <h5 class = 'text-center'><b>Brewery Name:</b> ${Bname}</h5><br>
                   <h6 class = 'mb-3 lead'><b>Brewery Type:</b> ${Btype}</h6><br>
                   <p class = 'mb-0'><b>Brewery Address:</b> ${Baddress}</p><br>
                   <p class = 'mb-0'><b>Brewery Website:</b> ${Bweb}</p><br>
                   <p class = 'mb-0'><b>Brewery phone number:</b> ${Bphone}</p><br>
                   


                
                </div>`
               

               

               let h11 = document.createElement('h1')
               h11.innerText = 'Brewery Name: '+Bname
               console.log(h11)
              // document.body.append(h11)

               let h12 = document.createElement('h1')
               h12.innerText ='Brewery type: '+ Btype
               //document.body.append(h12)

               let h13 = document.createElement('h1')
               h13.innerText = Baddress
               //document.body.append(h13)

               let h14 = document.createElement('h1')
               h14.innerText = 'Brewery Website: '+Bweb
               //document.body.append(h14)

               let h15 = document.createElement('h1')
               h15.innerText ='Brewery Phone Number: '+ Bphone
               //document.body.append(h15)
            }
            } catch (error) {
                console.log(error)
            }
        }
        //Calling function
        foo()