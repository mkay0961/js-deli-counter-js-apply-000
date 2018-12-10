var i = 0;

function takeANumber(line){
  i++;
  line.push(i);
  
  var numberInLine = line.length;
  
  var message = "Welcome!" + " You are number " + i + " in line.";
  
  return message
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length == 0){
    return "There is nobody waiting to be served!"
  }else{
    var name = katzDeliLine[0];
    katzDeliLine.shift();
    return "Currently serving " + name + ".";
  }
  
}
function currentLine(line){
  if(line.length == 0){
    message= "The line is currently empty."
    return message
  }
  
  else{
    
  var message = "The line is currently: ";
  
  for(var i = 0; i<line.length; i++){
    message += (i+1) +". " + line[i];
    
    if(i+1 == line.length){
      return message;
    }
    else if(i<line.length){
      message += ", ";
    }
  }
  return message;
  }
}

