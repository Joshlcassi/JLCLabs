function doPost(e) {
    var sheet = SpreadsheetApp.openById('AKfycbwck75_PZUJDbZJe61uM_VeIwpcCo9OnSVq-K09fLsYE7_OGjqoYA4DxFMXbTMlzgIOkw').getActiveSheet();
    var name = e.parameter.name;
    var email = e.parameter.email;
    sheet.appendRow([name, email]);
    return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
  }
  

// const sheetName = 'Empowered Sign ups'
// const scriptProp = PropertiesService.getScriptProperties()

// function intialSetup () {
//   const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
//   scriptProp.setProperty('key', activeSpreadsheet.getId())
// }

// function doPost (e) {
//   const lock = LockService.getScriptLock()
//   lock.tryLock(10000)

//   try {
//     const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
//     const sheet = doc.getSheetByName(sheetName)

//     const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
//     const nextRow = sheet.getLastRow() + 1

//     const newRow = headers.map(function(header) {
//       return header === 'Date' ? new Date() : e.parameter[header]
//     })

//     sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   catch (e) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
//       .setMimeType(ContentService.MimeType.JSON)
//   }

//   finally {
//     lock.releaseLock()
//   }
// }