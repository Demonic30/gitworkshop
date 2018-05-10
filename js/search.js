$(function () {
    

    $('#search').click(function () {
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        var result = '<center><h3>RESULTS</h3></center>';
        $('#searchresult').append(result);
        PlaceSearch.Search(keyword, type, radius).then(function (data) {
            var num = 0;
            
            

            for(var i=0;i<data.length;i++){
                    num ++;
                   if(data[i].rating == undefined){
                    data[i].rating =0;
                   }
                   
                var row =
                
                '<div class="col-md-12">'+
                '<div class="comments text-left padDiv mb-30">'+
                '<div class="entry-comments">'+
                '<ul class="entry-comments-list list-unstyled">'+
                    '<a href="detail.html?placeid=' + data[i].id + '">' +
                    '<div class="well search-result">' +
                    '<div class="row">' +

                    '<div class="col-sm-12 col-md-6 ">'+
                    '<center>'+
                    '<img src=' + data[i].photo + ' class="thumbnail" />'+
                    '</div>' +'</center>'+
                    '<div class="col-sm-12 col-md-6  title">' + 
                    '<center> Location '+ 
                    '<h5>' + data[i].name + '</h5>'+ 
                    
                    "Rating"+

                     '<h5>' + data[i].rating + '</h5>'+ 
                     '<span class="rating-static rating-'+ data[i].rating*10+'"></span> </center>'+

                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</a>'; +
                    '</ul>'+
                   '</div>'+
                  '</div>'+
                  '</div>';
                        
                        $('#searchresult').append(row);

            }
        });
    });
});
