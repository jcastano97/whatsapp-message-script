const CELLPHONE_NUMBER_ID="wms-cellphone",CELLPHONE_NUMBER_ERROR_ID="wms-cellphone-error",MESSAGE_ID="wms-message",MESSAGE_ERROR_ID="wms-message-error",WHATSAPP_URL="https://wa.me";function wms_open_link(){if(null!=document.getElementById("wms-cellphone")&&""!==document.getElementById("wms-cellphone").value)if(document.getElementById("wms-cellphone-error").style.display="none",null!=document.getElementById(MESSAGE_ID)&&""!==document.getElementById(MESSAGE_ID).value){document.getElementById(MESSAGE_ERROR_ID).style.display="none";let e=`https://wa.me/057${document.getElementById("wms-cellphone").value}?text=${document.getElementById(MESSAGE_ID).value}`;e=encodeURI(e),window.open(e)}else document.getElementById(MESSAGE_ERROR_ID).style.display="block";else document.getElementById("wms-cellphone-error").style.display="block"}