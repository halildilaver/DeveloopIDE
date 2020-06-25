const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';

	var basic_colour = Blockly.Msg.BASIC_HUE;
	
	Blockly.Blocks['rotary_setup'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/encodersetup.png`,20,20,"*"))
				.appendField("Rotary Encoder Ayarları");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Sınır Değerlerini Ayarla ↓");
			this.appendValueInput("ALT")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Alt Sınır:");
			this.appendValueInput("UST")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Üst Sınır:");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Döngü:")
				.appendField(new Blockly.FieldCheckbox("TRUE"), "SORGU");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(125);
			this.setTooltip("Rotary Setup");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['rotary_set_bound'] = {
		init: function() {
			this.appendValueInput("ALT")
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/encodericon.png`,20,20,"*"))
				.appendField("Sınırları Ayarla →")
				.appendField("Alt Sınır:");
			this.appendValueInput("UST")
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Üst Sınır:");
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_RIGHT)
				.appendField("Döngü:")
				.appendField(new Blockly.FieldCheckbox("TRUE"), "SORGU");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(125);
			this.setInputsInline(true);
			this.setTooltip("Rotary set");
			this.setHelpUrl("");
		}
	};
	
	
	Blockly.Blocks['rotary_read'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/encodericon.png`,20,20,"*"))
				.appendField("Encoder oku");
			this.setOutput(true);
			this.setColour(125);
			this.setTooltip("Encoder oku");
			this.setHelpUrl("http://kivblocks.kivvi.com.tr");
		}
	};
	
	
	Blockly.Blocks['rotary_delta'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/encodericon.png`,20,20,"*"))
				.appendField("Delta oku");
			this.setOutput(true);
			this.setColour(125);
			this.setTooltip("Delta oku");
			this.setHelpUrl("http://kivblocks.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['rotary_button'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/encoderbutton.png`,20,20,"*"))
				.appendField("Rotary Buton")
				.appendField(new Blockly.FieldDropdown([["Basıldığında","BUT_PUSHED"], ["Bırakıldığında","BUT_RELEASED"]]), "STATUS")
			this.appendStatementInput("event_do")
				.setCheck(null);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(125);
			this.setTooltip("event when server got event");
			this.setHelpUrl("");
			}
	};

}