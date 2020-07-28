module.exports = function(Blockly){
    'use strict';

Blockly.Blocks['time_delay'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("Bekle");
    this.appendDummyInput()
        .appendField("milisaniye");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(265);
 this.setTooltip("pause running program for awhile");
 this.setHelpUrl("");
  }
};

  Blockly.Blocks['time_delay_microsec'] = {
    init: function() {
      this.appendValueInput("delay")
      .setCheck("Number")
      .appendField("Bekle");
      this.appendDummyInput()
      .appendField("mikrosaniye");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(265);
      this.setTooltip("pause running program for awhile");
      this.setHelpUrl("");
    }
  };

Blockly.Blocks['time_sync'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/static/icons/icons8_wifi_26px.png", 20, 20, "*"))
        .appendField("İnternet saatini eşitle");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(265);
 this.setTooltip("sync time from internet (wifi & internet needed)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_get_year'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Yıl verisini al");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(265);
 this.setTooltip("get now year (use sync time block first)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_get_month'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ay verisini al");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(265);
 this.setTooltip("get now month (1-12) (use sync time block first)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_get_day'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Gün verisini al");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(265);
 this.setTooltip("get day of month (1-31) (use sync time block first)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_get_day_of_week'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hafta verisini al");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(265);
 this.setTooltip("get day of week (Sunday = 0 , Monday = 1 , ... , Saturday = 6) (use sync time block first)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_get_hour'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Saat verisini al");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(265);
 this.setTooltip("get hour of day (0-23) (use sync time block first)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_get_minute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dakika verisini al");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(265);
 this.setTooltip("get minute of now hour 0-59 (use sync time block first)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_get_second'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Saniye verisini al");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(265);
 this.setTooltip("get now second 0-59 (use sync time block first)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_millis'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timestamp milisaniye");
    this.setInputsInline(true);
    this.setOutput(true, ["Number","uint32_t"]);
    this.setColour(265);
 this.setTooltip("get time since program start in millisecond");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_micros'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Timestamp mikrosaniye");
    this.setInputsInline(true);
    this.setOutput(true,["Number","uint32_t"]);
    this.setColour(265);
 this.setTooltip("get time since program start in microsecond");
 this.setHelpUrl("");
  }
};

}