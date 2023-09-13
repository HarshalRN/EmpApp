const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
	const { MeterReadingDocument } = this.entities;
	const service = await cds.connect.to('meterread');
	this.on('READ', MeterReadingDocument, request => {
		return service.tx(request).run(request.query);
	});

	 this.on('ReleaseMeterReadingDocument', async (req)=>{
		const serviceref = await cds.connect.to("meterread");
	 	// const input = { MeterReadingDocument:'7000005302'};
		//  const input = { MeterReadingDocument : req.data.MeterReadingDocument};
		 var sPath = "ReleaseMeterReadingDocument?MeterReadingDocument='" + req.data.MeterReadingDocument +"'";
	 	// const response = await serviceref.send('ReleaseMeterReadingDocument', input);

		 const response = await serviceref.send(
			{
			method: 'POST',
            path: sPath,
			headers: {},
			data:{}
			},{ fetchCsrfToken: true }
		 )
			//'ReleaseMeterReadingDocument?MeterReadingDocument=' + "'7000005302'");
	 	return response;
	   })    
});