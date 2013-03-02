describe("TicTac.Models.Cell", function(){
  var cell

  beforeEach(function(){
    cell = new TicTac.Models.Cell({location:'', value:''});
  });

  it('should exist', function(){
    expect(cell).toBeTruthy();
    expect(cell instanceof TicTac.Models.Cell).toBeTruthy();
  });

  it('should have a location', function(){
     expect(cell.get('location')).toEqual('')
  });

  it('should have a value', function(){
     expect(cell.get('value')).toEqual('')
  });
//  it('should create board view upon initializing', function(){
//    expect(Game.new).toEqual()
//  })
});