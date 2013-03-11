describe("TicTac.Views.Cell", function(){

  describe('event: click', function(){

    it ("when clicked would call place if not occupied", function(){
      spyOn(TicTac.Views.Cell.prototype, 'place').andCallThrough()
      var  currentModel = new TicTac.Models.Cell()
//      console.log(currentModel.get('value'))
      var  currentView = new TicTac.Views.Cell({model: currentModel})
//      console.log(currentView.model.get('value'))
      currentView.render()
      currentView.$el.click()
      expect(TicTac.Views.Cell.prototype.place).toHaveBeenCalled();
//      console.log(currentView.model.get('value'))
    })

  })


  describe('#place', function(){

    it("it places a X in the clicked div and updates the associated model", function(){
      spyOn(TicTac.Models.Cell.prototype, 'set')
      var currentView = new TicTac.Views.Cell({model: new TicTac.Models.Cell({}) })
      currentView.render()
      currentView.place();
      expect(TicTac.Models.Cell.prototype.set).toHaveBeenCalled();
    })

    it("when clicked in an already occupied cell it shouldnot call set", function(){

      var currentView = new TicTac.Views.Cell({model: new TicTac.Models.Cell({'value':'x'})})
      spyOn(currentView.model, 'set')
      currentView.render()
//      console.log(currentView.model.get('value'))

      currentView.$el.click()
      expect(currentView.model.set).not.toHaveBeenCalled();
//      console.log(currentView.model.get('value'))

    })

  })

});