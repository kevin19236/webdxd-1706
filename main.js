var userArray = [
  
  {
    name: 'Yan Hong',
    age: 26,
    school: 'SFU',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Neo Wang',
    age: 26,
    school: 'UBC',
    skills: ['Python', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Ben Sun',
    age: 30,
    school: 'SFU',
    skills: ['Logo Design', 'VI', 'UIUX', 'Branding'],
    isPublic: false
  },
  
];

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
    if(new RegExp(value,'i').test(user.skills))
    {
      match = true
    }
    return match
}
$('.search-input').keyup(function(){

    
$('#user-container').html("")
for(var i=0; i<userArray.length;i++){
    var userObj=userArray[i]
    var searchStr=$('.search-input').val()
    
    if(matchUser(userObj,searchStr)){
        var userContainer=$('<div>').addClass('user')
        var userObj=userArray[i]

        var addElm = function(tag,value){
          $(tag).text(value).appendTo(userContainer)
        }

        addElm('<h1>',userObj.name)
        addElm('<h2>',userObj.age)
        addElm('<h2>',userObj.school)
        var p=$('<p>').appendTo(userContainer)
        for(var j=0;j<userObj.skills.length;j++){
          $('<span>').text(userObj.skills[j]).appendTo(p)

        }
        $('#user-container').append(userContainer)
      }
  }
})
