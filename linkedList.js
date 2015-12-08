// /**
//  * @name  linkedListGenerator
//  * @description  Main Module
//  * @return {Object} an object exposing methods to be used to manipulate a linked list
//  */
function linkedListGenerator(){

  var head = null;
  var tail = null;
  var test = 0;
  var module = {};


  module.getHead = function(){
    return head;
  };

  module.getTail = function(){
    return tail;
  };

  module.add = function(parameter){
    var newNodeObject={
      value:parameter,
      next:null,
    };
      test = 'testing';

    if(head===null&&tail===null){
      head=newNodeObject;
      tail=newNodeObject;
      console.log(head,'head');
      return newNodeObject;
    }
    else{
      tail.next=newNodeObject;
      tail=newNodeObject;
      return newNodeObject;
    }
  };

  module.get = function(number){
    var i=1;
    if(number===0){
     return linkedListGenerator().getHead();
    }
      var currentNode = head;
      console.log(test);
      console.log(head);
      while(i<number){
        currentNode = currentNode.next;
        i++;
      }
      return head;
  };

  module.remove = function(number){

  };


  module.insert = function(Value,number){

  };

  return module;
}


// console.log(linkedListGenerator().getHead());
var one = linkedListGenerator();
console.log(one.add('bomber'));
console.log(one.getHead());

console.log(one.add('man'));
console.log(one.add('Playstation'));
console.log(one.add('console'));

console.log(one.get(2));







// function linkedListGenerator(){
//   var poo = {
//     value:null,
//     next:null
//   };


//     return {
//       getHead:function(){
//         var getPoo = poo.value;
//         return getPoo;
//       },


//       getTail:function(){



//       },

//       add:function(value){
//         var node = poo;
//         node.checker = false;
//         while(node.checker===false){
//           if(node.next===null){
//             var insideNode = {};
//             insideNode.value = value;
//             insideNode.next = null;
//             node.checker = true;
//             node.next = insideNode;
//             return insideNode;
//           }

//           else {
//             var tail = {};
//             node.next = tail;
//             return tail;
//           }

//         }

// //       },

// //       remove:function(number){

// //       },

// //       get:function(number){

// //       },

// //       insert:function(value,number){

// //       }
// //     };
// // }

