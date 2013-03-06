describe("TicTac.Views.Cell", function(){

  describe('event: click .cell', function(){
    it ("when clicked would call placeX", function(){
      var placeXSpy = spyOn(TicTac.Views.Cell.prototype, 'placeX')
      var currentCell = new TicTac.Views.Cell({model: new TicTac.Models.Cell})
      currentCell.render()
      currentCell.$el.click();
      expect(placeXSpy).toHaveBeenCalled();
    })
  })

  describe('#placeX', function(){
    var currentView, currentModel
    beforeEach(function(){
      currentModel = new TicTac.Models.Cell
      currentView = new TicTac.Views.Cell({model: currentModel})
    })
    it("it places a X in the clicked div and updates the associated model", function(){
      var modelValueSpy = spyOn(currentModel, 'setX');
      currentView.placeX();
      expect(modelValueSpy).toHaveBeenCalled()
    })

  })


});