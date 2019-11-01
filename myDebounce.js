
class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}

Function.prototype.myDebounce = function(interval) { 
  let timeout; 

  return () => { 

    const fnCall = () => { 
      timeout = null; 
      this(); 
    }

    clearTimeout(timeout); 
    timeout = setTimeout(fnCall, interval); 
  }

}

// Function#myDebounce accepts an interval as an argument and returns a "debounced" function
// when the debounced function is invoked,
// it sets a timeout that will invoke the original function after interval milliseconds have elapsed
// if the debounced function is invoked early, it resets the timeout








const searchBar = new SearchBar();

searchBar.search = searchBar.search.myDebounce(5000)

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
 
};

queryForHelloWorld();