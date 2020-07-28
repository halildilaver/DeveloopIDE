const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';

	var basic_colour = Blockly.Msg.BASIC_HUE;
	
	Blockly.Blocks['kivvi_dist'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Mesafeyi")
				.appendField(new Blockly.FieldDropdown([["santimetre","1"], ["milimetre","0"]]), "TYPE")
				.appendField("cinsinde hesapla");
			this.setOutput(true);
			this.setColour(80);
			this.setTooltip("Mesafeyi hesaplamak için kullanılır.");
			this.setHelpUrl("http://kivblocks.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['kivvi_battery_read'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/battery.png`,20,20,"*"))
				.appendField("Kalan batarya bilgisi");
			this.setOutput(true);
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['kivvi_hcsr04p'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Mesafe hesapla");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("Mesafeyi hesaplamak için kullanılır.");
			this.setHelpUrl("http://kivblocks.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['kivvi_ldr'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("Işık şiddetini hesapla");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("ldr");
			this.setHelpUrl("");
		}
	};
	
	
	Blockly.Blocks['kivvi_qrd1117'] = {
		init: function() {
			this.appendDummyInput()
				.appendField(new Blockly.FieldDropdown([["Orta","midQRD"], ["Sol","leftQRD"], ["Sağ","rightQRD"]]), "QRD")
				.appendField("Çizgi izleme sensörünü oku");
			this.setInputsInline(true);
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("???");
			this.setHelpUrl("http://www.kivvi.com.tr");
		}
	};
	
	Blockly.Blocks['mlx_temp_setup'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MLX Sıcaklık Sensörünü Çalıştır");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mlx_temp'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MLX ile")
				.appendField(new Blockly.FieldDropdown([["Ortamın","mlx.readAmbientTemp"], ["Nesnenin","mlx.readObjectTemp"]]), "PLACE")
				.appendField("sıcaklığını")
				.appendField(new Blockly.FieldDropdown([["santigrat","C"], ["fahrenayt","F"]]), "TYPE")
				.appendField("cinsinden ölç");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['dht_11'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("DHT11 ile Ortamın")
				.appendField(new Blockly.FieldDropdown([["Sıcaklık","true"], ["Nem","false"]]), "TYPE")
				.appendField("değerini ölç");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mpu_setup'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MPU İvme ve Gyro Sensörünü Çalıştır");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mpu_update'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MPU Güncelle");
			this.setPreviousStatement(true);
			this.setNextStatement(true);
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mpu_temp'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MPU ile ortamın sıcaklık değerini ölç");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mpu_getacc'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MPU ile")
				.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"],["Z","Z"]]), "EKSEN")
				.appendField("Ekseninin ivmesini ölç");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mpu_getgyro'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MPU ile")
				.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"],["Z","Z"]]), "EKSEN")
				.appendField("Ekseninin jireskop değerini ölç");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mpu_getacc_angle'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MPU ile")
				.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "EKSEN")
				.appendField("Ekseninin ham açı değerini ölç");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mpu_getgyro_angle'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MPU ile")
				.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"],["Z","Z"]]), "EKSEN")
				.appendField("Ekseninin ham jireskop açı değerini ölç");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	
	Blockly.Blocks['mpu_getangle'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("MPU ile")
				.appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"],["Z","Z"]]), "EKSEN")
				.appendField("Ekseninin işlenmiş açı değerini ölç");
			this.setOutput(true, "Number");
			this.setColour(80);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};


}