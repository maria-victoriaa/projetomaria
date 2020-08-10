ver app={
    
    
       capture:function(){
           
           
           
        navigator.camera.getPicture(onSucess,onFail,{        
            quality:50,       
            detinationType:Camera.DstinationType.DATA_URL,
            salvarToPhotoAlbum:true,
            cameraDierection:Camera.Direction.FRONT,
            targeHeight:1000,
            TargeWidth:1000
            
        });
           
           function onSucess(imageData){ 
               var image=document.getElementrById('minhaimagem');
               image.style.display="block";
               image.src="data.image/jpeg,base64," +imageData;
           }
           function onFail(message){
               alert('Failed because:' + message);
               
           } 
       }
};
      
        
        
       