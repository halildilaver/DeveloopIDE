module.exports = function(Blockly){
  'use strict';

Blockly.Blocks['io_setpin'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Pin");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["OUTPUT","OUTPUT"], ["INPUT","INPUT"], ["INPUT_PULLUP","INPUT_PULLUP"]]), "mode")
		.appendField("ayarla: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("set pin mode");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['io_digital_read'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Dijital pini oku");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(30);
 this.setTooltip("digital read in");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['io_digital_write'] = {
  init: function() {
    this.appendValueInput("pin")
         .setCheck("Number")
        .appendField("Dijital Yazma");
    this.appendValueInput("value")
		.appendField("pinini")
        .setCheck(["Number","Boolean"])
        .appendField("değer: ");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("digital write pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['io_analog_read'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Analog giriş pinini oku ");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(30);
 this.setTooltip("read analog value from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['io_analog_write'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Analog yazma pini")
        .appendField(new Blockly.FieldDropdown([["DAC1 GPIO25","25"], ["DAC2 GPIO26","26"]]), "pin");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("değer:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("analog write to pin , value from 0-255");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['io_pwm_write'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("PWM yazma pini");
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("değer:");
    this.appendDummyInput()
      .appendField("(zaman ")
      .appendField(new Blockly.FieldNumber(0, 0, 7), "timer")
      .appendField(")");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("write PWM to pin (value 0-255) at 5KHz");
 this.setHelpUrl("https://en.wikipedia.org/wiki/Pulse-width_modulation");
  }
};

Blockly.Blocks['io_pulse_in'] = {
  init: function() {
    this.appendValueInput("pin")
        .setCheck("Number")
        .appendField("Pulse değerini");
    this.appendDummyInput()
        .appendField("pininden oku. Durum:")
        .appendField(new Blockly.FieldDropdown([["HIGH","1"], ["LOW","0"]]), "state")
        .appendField("Zaman Aşımı (ms)")
        .appendField(new Blockly.FieldNumber(1000, 1), "timeout");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(30);
 this.setTooltip("read pulse in from pin");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['io_shift_in'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Shift in verisini oku (veri")
        .appendField(new Blockly.FieldNumber(0, 0, 50), "data_pin")
        .appendField("zaman pini")
        .appendField(new Blockly.FieldNumber(0, 0, 50), "clock_pin")
        .appendField(") bit düzeni")
        .appendField(new Blockly.FieldDropdown([["MSB_first","MSBFIRST"], ["LSB_first","LSBFIRST"]]), "bit_order");
    this.setOutput(true, null);
    this.setColour(30);
 this.setTooltip("read shift in");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['io_shift_out'] = {
  init: function() {
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField("Shift out verisini");
    this.appendDummyInput()
        .appendField("  pininden ayarla (veri")
        .appendField(new Blockly.FieldNumber(0, 0, 50), "data_pin")
        .appendField("zaman pini")
        .appendField(new Blockly.FieldNumber(0, 0, 50), "clock_pin")
        .appendField(") bit düzeni")
        .appendField(new Blockly.FieldDropdown([["MSB_first","MSBFIRST"], ["LSB_first","LSBFIRST"]]), "bit_order");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("shift out data");
 this.setHelpUrl("");
  }
};

}