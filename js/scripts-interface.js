var MarvelModule = require('./../js/scripts.js').marvelModule;

function displayCharacters(characterList) {
  characterList.forEach(function(character){
    $('#character-list').append(`<option value="${character.id}">${character.name}</option>`);
  });
}

function displayCharacterInfo(characterInfo) {
  console.log(characterInfo);
  for (var key in characterInfo) {
    if (typeof characterInfo[key] === 'string') {
      $('#character-info').append(`<p>${characterInfo[key]}</p>`);
    }
  }
}

$(document).ready(function(){

    var marvel = new MarvelModule();
    marvel.getList(displayCharacters);

    $('#bigpapa').submit(function(event){
      event.preventDefault();

      var selectedCharacter = $('#character-list').val();
      marvel.characterInfo(selectedCharacter, displayCharacterInfo);
    });


});
