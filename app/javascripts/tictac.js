var TicTac = {
  Views: {},
  Collections: {},
  Models: {}
};

TicTac.initialize = function(){
  new TicTac.Views.Game();
};


//TicTac.initialize = function(){
//  var newBoard = function(){
//    return new TicTac.Collections.BoardCells([
//      { location: '0-0' },
//      { location: '0-1' },
//      { location: '0-2' },
//      { location: '1-0' },
//      { location: '1-1' },
//      { location: '1-2' },
//      { location: '2-0' },
//      { location: '2-1' },
//      { location: '2-2' }
//    ]);
//  };

//  new TicTac.Views.Game( { collection: newBoard });
//};