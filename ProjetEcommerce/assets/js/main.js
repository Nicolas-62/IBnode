var images = ["https://sf2.viepratique.fr/wp-content/uploads/sites/8/2017/04/maison-en-bois-le-permis-de-construire-est-il-obligatoire.jpg",
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Maison_Gauvreau_4.JPG/1200px-Maison_Gauvreau_4.JPG",
"https://www.construction21.org/france/data/sources/users/2548/maison-bioclimatique-passive-5.jpg"];


$(document).ready(function(){	
    $('#image-principale').attr('src', images[0]);

    $.each(images, function(index, image){
        $('#carrousel-item').each(function(index){
            const photo = images[index];
            const template =    `<a href="">
                                    <img src="${photo}" />
                                </a>`
            
        });
    });
});