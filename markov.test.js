const {MarkovMachine} = require('./markov')


describe('Testing markvov machine', function(){
    test('If result is String', function(){
        let mm = new MarkovMachine('the cat in the hat');
        const s = mm.makeText();
        expect(s).toEqual(expect.any(String))

    })
})