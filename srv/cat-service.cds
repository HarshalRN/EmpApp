using my.bookshop as my from '../db/data-model';
using { meterread as mr } from '../srv/external/meterread';

service CatalogService {
    @readonly entity Books as projection on my.Books;    
    @readonly 
    entity C_MtrRdngDocumentTP as projection on mr.C_MtrRdngDocumentTP{
        *
    }
    @readonly
    entity MeterReadingDocument as projection on mr.I_MeterReadingDocument {
    key MeterReadingStatus , MeterReadingDocument
    }
    action ReleaseMeterReadingDocument(MeterReadingDocument:String(20)) 
    returns C_MtrRdngDocumentTP;
    //  returns C_MtrRdngDocumentTP;
    
}
