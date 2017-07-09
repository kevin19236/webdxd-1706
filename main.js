
$('#fetch-all').click(function() {
  $('#user-container').html("")
 $.get('https://webdxd-student-api.herokuapp.com/student/', function(response) {

    console.log(response);
    var userArray=response;
    for(var i=0; i<userArray.length;i++){
    var userObj=userArray[i]
    //var searchStr=$('.search-input').val()
    
    //if(matchUser(userObj,searchStr)){
        var userObj=userArray[i]
        var userContainer=$('<div>').addClass('show-user user').attr('id', userObj._id)

        var addElm = function(tag,value){
          $(tag).text(value).appendTo(userContainer)
        }

        //addElm('<h1>',userObj._id)
        addElm('<h2>',userObj.name)
       // addElm('<h2>',userObj.school)
        var p=$('<p>').appendTo(userContainer)
        //for(var j=0;j<userObj.skills.length;j++){
        //  $('<span>').text(userObj.skills[j]).appendTo(p)

       // }
        $('#user-container').append(userContainer)
      }
  })

 });
var InUpdate=false
var oldID=""
$('#user-container').on('click','.show-user',function(e){
  var uid= $(this).attr('id');

  if(oldID!=uid){
    $.get('https://webdxd-student-api.herokuapp.com/student/' + uid, function(response) {

 
      if(!InUpdate||oldID!=uid){
          $('#contactform').remove()
          $('.delete-btn').remove()

           $('#' + uid).append('<div id="contactform"></div>')
           $('#contactform').append('<label for="name">Name</label>')
           $('#contactform').append('<input id="sname" value='+response.name +' type="text">')
           console.log(response.name)

           $('#contactform').append('<label for="age">Age</label>')
           $('#contactform').append('<input id="sage" value='+response.age+' type="text">')

           $('#contactform').append('<label for="school">School</label>')
           $('#contactform').append('<input id="sschool" value='+response.school+' type="text">')
                    
           $('#contactform').append('<button id="submit-btn">Update</button>')
           $('#' + uid).append('<button class="delete-btn">Delete</button>')
           InUpdate=true;
           oldID=uid
        } 
        });   
    }
    // console.log(InUpdate)
    $('#submit-btn').click(function(e){        
     
        var updateStudent={
            "name": $('#sname').val(),
            "age": $('#sage').val(),
            "school": $('#sschool').val()
          }
          console.log(updateStudent)
          $.ajax({
            type:'put',
            url:'https://webdxd-student-api.herokuapp.com/student/'+uid,
            data:JSON.stringify(updateStudent),
            success:function(data) {
                          console.log(data) 
                          alert("Data Updated!")
                          $('#' + uid).html("")
                          $('#' + uid).append('<h2>'+updateStudent.name+'</h2>')
                          InUpdate=false
                  },
            contentType: "application/json",
            dataType: 'json'
          })
         
        })

    $('#user-container').on('click','.delete-btn',function(e){        
        
        if(confirm('Are you sure to delete?')){
          $.ajax({
                    type:'delete',
                    url:'https://webdxd-student-api.herokuapp.com/student/'+uid,
                    
                    success:function() { console.log("delete success");
                                         $('#' + uid).remove(); 
                                       },
                 })
          }
          })
  
      });

var matchUser=function(user,value){
    var match=false;
    if(new RegExp(value,'i').test(user.name))
    {
      match = true
    }
    if(new RegExp(value,'i').test(user.age))
    {
      match = true
    }
    if(new RegExp(value,'i').test(user.school))
    {
      match = true
    }
   // if(new RegExp(value,'i').test(user.skills))
    //{
    //  match = true
   // }
    return match
}
$('.search-input').keyup(function(){

 
  $('#user-container').html("")
 $.get('https://webdxd-student-api.herokuapp.com/student/', function(response) {

    console.log(response);
    var userArray=response;
    for(var i=0; i<userArray.length;i++){
    var userObj=userArray[i]
    var searchStr=$('.search-input').val()
    
    if(matchUser(userObj,searchStr)){
        var userObj=userArray[i]
        var userContainer=$('<div>').addClass('show-user user').attr('id', userObj._id)

        var addElm = function(tag,value){
          $(tag).text(value).appendTo(userContainer)
        }

        //addElm('<h1>',userObj._id)
        addElm('<h2>',userObj.name)
       // addElm('<h2>',userObj.school)
        var p=$('<p>').appendTo(userContainer)
        //for(var j=0;j<userObj.skills.length;j++){
        //  $('<span>').text(userObj.skills[j]).appendTo(p)

       // }
        $('#user-container').append(userContainer)
      }
    }
  })

})

$('#submit-form').click(function()
{
  var newStudent={
    "name": $('#sname').val(),
    "age": $('#sage').val(),
    "school": $('#sschool').val()
  }
  console.log(newStudent)
  $.ajax({
    type:'post',
    url:'https://webdxd-student-api.herokuapp.com/new',
    data:JSON.stringify(newStudent),
    success:function(data) { console.log(data) },
    contentType: "application/json",
    dataType: 'json'
  })
});