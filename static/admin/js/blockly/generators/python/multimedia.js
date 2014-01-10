'use strict';

goog.provide('Blockly.Python.multimedia');
goog.require('Blockly.Python');

Blockly.Python['multimedia_video_play'] = function(block) {
  Blockly.Python.definitions_['from_griotte_scenario_multimedia_play_video'] = 'from griotte.scenario.multimedia import play_video';

  var media = Blockly.Python.quote_(block.getTitleValue('MEDIA'));
  var method = Blockly.Python.quote_(block.getTitleValue('METHOD'));

  var code = 'play_video(' + media + ', sync='

  if (method == 'SYNC') {
    code += 'True';
  } else {
    code += 'False';
  }

  code += ')\n'

  return code;
};

Blockly.Python['multimedia_audio_play'] = function(block) {
  Blockly.Python.definitions_['from_griotte_scenario_multimedia_play_audio'] = 'from griotte.scenario.multimedia import play_audio';

  var media = Blockly.Python.quote_(block.getTitleValue('MEDIA'));
  var method = Blockly.Python.quote_(block.getTitleValue('METHOD'));

  var code = 'play_video(' + media + ', sync='

  if (method == 'SYNC') {
    code += 'True';
  } else {
    code += 'False';
  }

  return code;
};

Blockly.Python['multimedia_image_play'] = function(block) {
  Blockly.Python.definitions_['from_griotte_scenario_multimedia_play_image'] = 'from griotte.scenario.multimedia import play_image';

  var duration = Blockly.Python.valueToCode(block, 'DURATION',
    Blockly.Python.ORDER_MULTIPLICATIVE) || '0';

  var media = Blockly.Python.quote_(block.getTitleValue('IMAGE'));
  var code = 'play_image(' + media + ',duration=' + duration + ')\n'

  return code;
};

Blockly.Python['multimedia_volume'] = function(block) {
  Blockly.Python.definitions_['from_griotte_scenario_multimedia_set_volume'] = 'from griotte.scenario.multimedia import set_volume';

  var volume = Blockly.Python.valueToCode(block, 'VOLUME',
    Blockly.Python.ORDER_MULTIPLICATIVE) || '0';
  volume = Math.min(volume,120);
  var code = 'set_volume(' + volume + ')\n'

  return code;
};

Blockly.Python['multimedia_video_stop'] = function(block) {
  Blockly.Python.definitions_['from_griotte_scenario_multimedia_stop_video'] = 'from griotte.scenario.multimedia import stop_video';

  return 'stop_video()\n';
};

Blockly.Python['multimedia_audio_stop'] = function(block) {
  Blockly.Python.definitions_['from_griotte_scenario_multimedia_stop_audio'] = 'from griotte.scenario.multimedia import stop_audio';

  return 'stop_audio()\n';
};

Blockly.Python['multimedia_black'] = function(block) {
  code = 'stop_video()\n';
  code += ''
  return code;
};

Blockly.Python['multimedia_wait'] = function(block) {
  return code;
};



