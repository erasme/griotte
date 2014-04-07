'use strict';

goog.provide('Blockly.Blocks.audio');

goog.require('Blockly.Blocks');
goog.require('Blockly.Medias');

Blockly.Blocks['audio_play'] = {
  init: function() {
    // Load media list on init
  // Delegate real initialization in ajax callback
    this.setHelpUrl('http://www.erasme.org/');
    this.setColour(44);
    this.appendDummyInput()
        .appendTitle("Jouer le son")
         .appendTitle(new Blockly.FieldDropdown(Blockly.Medias.getMediasFor('audio')), "AUDIO");
     this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown([
             ["et attendre la fin", "True"],
             ["et passer à la suite", "False"]]), "SYNC");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Joue le son sélectionné une seule fois');
  },
};

Blockly.Blocks['audio_stop'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(44);
    this.appendDummyInput()
        .appendTitle("Arreter le son en cours");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Couper le son en cours de diffusion');
  }
};
