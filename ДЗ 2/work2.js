
      var buttons = document.querySelectorAll('.showButton');
      var tabsArray = Array.from(document.querySelectorAll('.tab'));
      
      buttons.forEach(btn => {
        btn.addEventListener('click', function(e){
          buttons.forEach(function(btn){
            btn.classList.remove('active-btn');
          })
          e.target.classList.add('active-btn');
          hideAllTabs();
          getTabByDataTab(e.target.dataset.tab).classList.add('active');
        })
      })
      
      function getTabByDataTab(tabId) {
        return tabsArray.find(function(tab) {
          return tab.dataset.tab == tabId
        })
      }
      
      function hideAllTabs(){
        tabsArray.forEach(function(tab){
          tab.classList.remove('active');
        })
      }
      