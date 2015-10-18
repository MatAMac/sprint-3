function cube (x){
  return x*x*x
}



function absolute (x) {
  y = -1
  if (x%2 === 0) {
    return x
  } else if (x%2 === 1) {
    return x*y
  } else {
    return "error"
  }
}



function addy(name){
  var returnname = name + "y"
  return returnname
}
var names = ["bob","mike","mat","frank","paul"];
var namesy = names.map(addy)



function makeKiaOra(name) {
  return function (){
    return "kia Ora " + name
  }
}
var kiaOraJoe = makeKiaOra('Joe')
kiaOraJoe()



function makeSince(d){
  return function (){

    var now = new Date().getTime() / 1000
    var then = new Date()
    then = d.getTime() / 1000
    var seconds = now
    seconds = seconds - then
    return seconds
  }
}

var since = makeSince(new Date())
