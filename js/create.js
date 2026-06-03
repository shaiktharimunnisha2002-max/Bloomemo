function saveMemory(){const m={recipient:recipient.value,message:message.value};localStorage.setItem('memory_'+Date.now(),JSON.stringify(m));alert('Saved');}
