/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    this.chains = {}

    for (let i=0; i < this.words.length -1; i++){
      let word = this.words[i];
      let nextWord = this.words[i+1];
      if(this.chains[word]=== undefined){
        this.chains[word]=[nextWord];
      }else{
        this.chains[word].push(nextWord);
      }
    }

    // handling last word in the text file
    let finalWord = this.words[this.words.length-1];
    if(this.chains[finalWord]=== undefined){
      this.chains[finalWord]= [null];
    }else{
      this.chains[finalWord].push(null)
    }
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let words = [];

    let word = this.words[Math.floor(Math.random()* this.words.length)];
    while (words.length < numWords && word !== null){
      words.push(word);
      let nextWords = this.chains[word];
      word = nextWords[Math.floor(Math.random()* nextWords.length)];
    }
    return words.join(" ")
  }
}

module.exports = {
  MarkovMachine,
};