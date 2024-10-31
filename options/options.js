function saveOptions(e) {
    e.preventDefault();
    browser.storage.sync.set({
        // When the document has loaded, it fetches values from storage
    });
  }


  // Restores the saved options from storage when the page is loaded
  function restoreOptions() {
    function setCurrentChoice(result) {
      //document.querySelector("#color").value = result.color || "blue";
    }
  
    function onError(error) {
      console.log(`Error: ${error}`);
    }
  
    //let getting = browser.storage.sync.get("color");
    //getting.then(setCurrentChoice, onError);
  }
  
  document.addEventListener("DOMContentLoaded", restoreOptions); // load options when page loads
  document.querySelector("form").addEventListener("submit", saveOptions); // save options when the options form is submitted
  