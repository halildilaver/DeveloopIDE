module.exports = function(Blockly){
  'use strict';
Blockly.Blocks['bt_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bluetoothu Başlat")
        .appendField(new Blockly.FieldTextInput("Develoop"), "name");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
    this.setTooltip("start Bluetooth");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['bt_send_string'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField("Bluetootha gönder");
    this.appendDummyInput()
        .appendField("yeni satırda")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "newline");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("send string to client");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bt_on_receive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bluetooth veriyi aldığında");
    this.appendStatementInput("receiver_code")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(220);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bt_read_data'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bluetoothtan gelen veriyi yazdır");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(220);
 this.setTooltip("read Bluetooth received data");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bt_read_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bluetoothtan gelen satırı yazdır.");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(220);
 this.setTooltip("read string line from Bluetooth received data");
 this.setHelpUrl("");
  }
};

}