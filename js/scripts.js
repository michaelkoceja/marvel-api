var apiInfo = require ('./../.env').apiInfo;

var Marvel = function() {
  this.baseURI = 'https://gateway.marvel.com';
  this.publicKey = apiInfo.publicKey;
  this.privateKey = apiInfo.privateKey;
  this.ts = apiInfo.ts;
  this.hash = apiInfo.hash;
  this.characterList = [];
};

Marvel.prototype.characterInfo = function(selectedCharacters, displayCharacterInfo) {
  $.get(this.makeQueryString('/v1/public/characters/' + selectedCharacters))
    .then(function (response) {
      displayCharacterInfo(response.data.results[0]);
    });

}

Marvel.prototype.getList = function(displayCharacters) {
  $.get(this.makeQueryString('/v1/public/characters'))
    .then(function(response){
      displayCharacters(response.data.results)
    }).fail(function(error){
      console.log('I broke it')
    });
}

Marvel.prototype.makeQueryString = function (endpoint, options) {
  var queryString = this.baseURI;
  queryString += endpoint + '?';
  queryString += 'apikey=' + this.publicKey + '&';
  queryString += 'ts=' + this.ts + '&';
  queryString += 'hash=' + this.hash + '&';

  return queryString;
}

exports.marvelModule = Marvel;
