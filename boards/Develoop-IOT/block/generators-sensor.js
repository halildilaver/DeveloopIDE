module.exports = function (Blockly) {
	'use strict';

	Blockly.JavaScript['kivvi_dist'] = function(block) {
		var type = block.getFieldValue('TYPE');
		let code = `#VARIABLE const int trigPin = 17;#END#VARIABLE const int echoPin = 5;#END#VARIABLE long duration;#END#VARIABLE int distance;#END#FUNCTION 
				int mesafe(bool type)
				{
					digitalWrite(trigPin, LOW);
					delayMicroseconds(2);
					digitalWrite(trigPin,HIGH);
					delayMicroseconds(10);
					digitalWrite(trigPin,LOW);
					duration = pulseIn(echoPin,HIGH);
					distance = duration * 0.034 / 2;
					if(type!=1)
					{
						distance *=10;
					}
					delay(50);
					return distance;
				}
				#END#SETUPpinMode(trigPin, OUTPUT); #END#SETUPpinMode(echoPin, INPUT);#END`;

	  code += 'mesafe('+type+')';
	  return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};

		
	Blockly.JavaScript['kivvi_battery_read'] = function(block) {
	  var code = 'analogRead(39)';
	  return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};


	Blockly.JavaScript['kivvi_hcsr04p'] = function(block) {
	  
		let code =`#EXTINC#include "HCSR04.h"#END#VARIABLEUltraSonicDistanceSensor distanceSensor(17, 5);#END`;
	  
		code += 'distanceSensor.measureDistanceCm()';
			
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};

	Blockly.JavaScript['kivvi_ldr'] = function(block) {
		let code = `#SETUPpinMode(34, INPUT);#END`;
		code += 'analogRead(34)';
	  return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};


	Blockly.JavaScript['kivvi_qrd1117'] = function(block) {
		let qrd = block.getFieldValue('QRD');
		
		let code = `#VARIABLE#define leftQRD  36#END#VARIABLE#define midQRD   37#END#VARIABLE#define rightQRD 38#END#FUNCTION
		bool lineTF(int pinNumb)
			{
			  bool rtn = true;
			  if (analogRead(pinNumb) > 1200) rtn = false;
			  return rtn;
			}
		#END#SETUP  pinMode(leftQRD, INPUT);#END#SETUPpinMode(midQRD, INPUT);#END#SETUPpinMode(rightQRD, INPUT);#END`;
		
		code += 'lineTF('+qrd+')';
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};

	Blockly.JavaScript['mlx_temp_setup'] = function(block) {
		let code = 
		`
		#EXTINC#include "Adafruit_MLX90614.h"#END
		#VARIABLEAdafruit_MLX90614 mlx = Adafruit_MLX90614();#END
		#SETUPmlx.begin(); #END
		`;
		
		return code;
	};

	Blockly.JavaScript['mlx_temp'] = function(block) {
		let place = block.getFieldValue('PLACE');
		let type = block.getFieldValue('TYPE');
		
		let code = ''+place+''+type+'()';
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};

	Blockly.JavaScript['dht_11'] = function(block) {
		let type = block.getFieldValue('TYPE');
		let code = `#EXTINC#include "SimpleDHT.h"#END#VARIABLESimpleDHT11 dht11(22);#END#VARIABLEunsigned long milTime = 0;#END#VARIABLEunsigned long oldMilTime = 0;#END#FUNCTION
		int tempOrHumid(bool toh) {
		  milTime = millis();
		  if(milTime - oldMilTime > 2000){
		  byte temperature = 0;
		  byte humidity = 0;
		  int err = SimpleDHTErrSuccess;
		  if ((err = dht11.read(&temperature, &humidity, NULL)) != SimpleDHTErrSuccess) {
			return -999;
		  }
		  if(toh) return temperature;
		  else return (int)humidity;
		  oldMilTime = milTime;
		  }
		  else return -999;
		  }#END`;
		
		code += 'tempOrHumid('+type+')';
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};
	
	Blockly.JavaScript['mpu_setup'] = function(block) {
		let code = 
		`
		#EXTINC#include "MPU6050_tockn.h"#END
		#VARIABLEMPU6050 mpu6050(Wire);#END
		#SETUPWire.begin();#END
		#SETUPmpu6050.begin();#END
		#SETUPmpu6050.calcGyroOffsets();#END
		`;
		
		return code;
	};
	
	Blockly.JavaScript['mpu_update'] = function(block) {
		let code = 'mpu6050.update();';
		
		return code;
	};
		
	Blockly.JavaScript['mpu_temp'] = function(block) {
		let code = 'mpu6050.getTemp()';
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};
	
	Blockly.JavaScript['mpu_getacc'] = function(block) {
		let eksen = block.getFieldValue('EKSEN');
		
		let code = 'mpu6050.getAcc'+eksen+'()';
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};
	
	Blockly.JavaScript['mpu_getgyro'] = function(block) {
		let eksen = block.getFieldValue('EKSEN');
		
		let code = 'mpu6050.getGyro'+eksen+'()';
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};
	
	Blockly.JavaScript['mpu_getacc_angle'] = function(block) {
		let eksen = block.getFieldValue('EKSEN');
		
		let code = 'mpu6050.getAccAngle'+eksen+'()';
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};
	
	Blockly.JavaScript['mpu_getgyro_angle'] = function(block) {
		let eksen = block.getFieldValue('EKSEN');
		
		let code = 'mpu6050.getGyroAngle'+eksen+'()';
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};
	
	Blockly.JavaScript['mpu_getangle'] = function(block) {
		let eksen = block.getFieldValue('EKSEN');
		
		let code = 'mpu6050.getAngle'+eksen+'()';
		
		return [code, Blockly.JavaScript.ORDER_FUNCTION];
	};
	
	


}