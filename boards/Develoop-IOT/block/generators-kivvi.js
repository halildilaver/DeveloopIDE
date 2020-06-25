module.exports = function (Blockly) {
	'use strict';

	Blockly.JavaScript['kivvi_led'] = function(block) {
  
	let way = block.getFieldValue('WAY');
	let stat = block.getFieldValue('STATUS');
  
	let code = `
		#SETUP pinMode(19, OUTPUT);#END
		#SETUP pinMode(23, OUTPUT);#END
		`;
	code += 'digitalWrite('+ way +', '+stat+');';
		
	return code;
	};
	
	
	Blockly.JavaScript['kivvi_screen_setup'] = function(block) {
		let code = 
			`#EXTINC#include "U8g2lib.h"#END
			#VARIABLEU8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, 15, 4, 16);#END
			#FUNCTION 
			void toScreen(int satir, String wrd)
			{
			  if (wrd != "")
			  {
				satir *= 10;
				u8g2.setFont(u8g2_font_helvR08_tr);     // choose a suitable font
				u8g2.setCursor(3, satir);                   // set cursor point
				u8g2.print(wrd);                        // write something to the internal memory
			  }
			}
			#END
			#SETUPu8g2.begin();#END`;
   
   return code;
};

Blockly.JavaScript['kivvi_screen_clear'] = function(block) {
   let code = 'u8g2.clearBuffer();';
   return code;
};

Blockly.JavaScript['kivvi_screen_send'] = function(block) {
   let code = 'u8g2.sendBuffer();';
   return code;
};

Blockly.JavaScript['kivvi_screen_toscreen'] = function(block) {
	var strng = Blockly.JavaScript.valueToCode(block, 'STRNG', Blockly.JavaScript.ORDER_NONE);
	var scval = block.getFieldValue('SCVAL');
   let code = 'toScreen('+scval+', '+strng+');';
   return code;
};

Blockly.JavaScript['bt_string'] = function(block) {
  var code = 'bluetoothString()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION];
};

Blockly.JavaScript['bt_setup'] = function(block) {
	var btname = block.getFieldValue('BTNAME');
	let code = 
			`#EXTINC#include "BluetoothSerial.h"#END
			#EXTINC#include "U8g2lib.h"#END
			#VARIABLEBluetoothSerial SerialBT;#END
			#FUNCTION
			String bluetoothString() //char olarak gelen message strin haline getiriliyor
			{
			  char c;
			  String str = "";
			  do
			  {
				c = 0;
				if (SerialBT.available()) c = SerialBT.read();
				if (c != 0)
				{
				  str += c;
				}
			  } while (c != 13 && c != 0);
			  return str;
			}
			#END`;
			
	code += 'SerialBT.begin("'+btname+'");';
	
   return code;
};

Blockly.JavaScript['kivvi_buzzer32'] = function(block) {
	let note = block.getFieldValue('NOTE');
	let tt = block.getFieldValue('TT');
	
	let code = 
	`#EXTINC#include <Tone32.h>#END
	#VARIABLE#define BUZZER_PIN 2#END
	#VARIABLE#define BUZZER_CHANNEL 0#END`;
	
	code += 'tone(BUZZER_PIN,'+note+','+tt+',BUZZER_CHANNEL);';
	return code;
};	
}